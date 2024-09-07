<template>
  <div class="flex gap-10 py-6 px-4 max-h-[92vh]">
    <div class="min-w-[18%] max-w-[18%] border-r-2 border-primary-500 px-4">
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">Filtres</h2>
        <div class="flex flex-col gap-2">
          <label for="viewType">View</label>
          <USelect
            v-model="viewType"
            :options="views" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="viewType">Order</label>
          <USelect
            v-model="order"
            :options="orders" />
        </div>
        <div class="flex flex-col gap-2">
          <p>Filtrer par ville / CP</p>
          <UInput
            icon="i-heroicons-magnifying-glass-20-solid"
            size="sm"
            color="white"
            :trailing="false"
            placeholder="Ville / Code postal..."
            v-model="city" />
        </div>
        <div class="flex flex-col gap-2">
          <p>Rechercher par titre</p>
          <UInput
            icon="i-heroicons-magnifying-glass-20-solid"
            size="sm"
            color="white"
            :trailing="false"
            placeholder="Job..."
            v-model="search" />
        </div>
        <div class="flex flex-col gap-2">
          <p>Rechercher par compétences</p>
          <USelectMenu
            v-model="selectedSkills"
            :options="skills"
            multiple
            placeholder="Skills" />
        </div>
        <div class="flex flex-col gap-2">
          <p>Stages sauvegardées</p>
          <UToggle v-model="onlySaved" />
        </div>
        <div class="flex flex-col gap-2">
          <p>Stages avec mail</p>
          <UToggle v-model="onlyMail" />
        </div>
        <div class="flex flex-col gap-2">
          <p>E-mail unique</p>
          <UToggle v-model="uniqueMail" />
        </div>
      </div>
    </div>
    <div
      class="max-h-[100vh] flex flex-col gap-4 overflow-y-scroll no-scrollbar">
      <p class="text-lg text-white font-bold">
        Stages trouvés : {{ internships.length }}
      </p>
      <InternshipCards v-if="viewType === 'Gallerie'">
        <InternshipCard
          v-for="internship in limitedInternships"
          :key="internship.id"
          :data="internship" />
      </InternshipCards>
      <InternshipList v-else-if="viewType === 'Liste'">
        <InternshipListItem
          v-for="internship in limitedInternships"
          :key="internship.id"
          :data="internship" />
      </InternshipList>
      <UButton
        v-if="internships.length > max"
        color="primary"
        class="self-center"
        icon="i-heroicons:arrow-path-16-solid"
        label="Load more"
        @click="incrementMax" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { InternshipData } from "@/types.ts";
  import { useMyInternshipsStore } from "~/store/internships";
  import InternshipList from "@/components/Internship/InternshipList/InternshipList.vue";
  import InternshipCard from "@/components/Internship/InternshipCards/InternshipCard.vue";
  import InternshipCards from "@/components/Internship/InternshipCards/InternshipCards.vue";
  import InternshipListItem from "@/components/Internship/InternshipList/InternshipListItem.vue";

  const internshipsStore = useMyInternshipsStore();
  const skills = Object.keys(internshipsStore.skills);
  const selectedSkills = ref<string[]>([]);
  const internships = ref<InternshipData[]>([...internshipsStore.internships]);
  const viewType = ref<string>("Liste");
  const views = ["Liste", "Gallerie"];
  const order = ref<string>("Date");
  const orders = ["Title", "Date"];
  const search = ref<string>("");
  const city = ref<string>("");
  const onlySaved = ref<boolean>(false);
  const onlyMail = ref<boolean>(false);
  const uniqueMail = ref<boolean>(false);
  const max = ref(10);
  const limitedInternships = computed(() =>
    internships.value.slice(0, max.value)
  );

  const incrementMax = () => {
    if (max.value < internships.value.length) max.value += 10;
  };
  const handleOrder = (order: string) => {
    if (order === "Title") {
      internships.value = internships.value.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else {
      internships.value = internships.value.sort((a, b) => a.id - b.id);
    }
  };
  const filterInternships = () => {
    if (
      city.value.length >= 3 ||
      search.value.length >= 3 ||
      selectedSkills.value.length >= 1 ||
      onlySaved.value ||
      onlyMail.value ||
      uniqueMail.value
    ) {
      const mails = new Set<string | null>();
      internships.value = internshipsStore.internships.filter((internship) => {
        const filterByCity =
          city.value.length < 3
            ? true
            : internship.city.toLowerCase().includes(city.value.toLowerCase());
        const filterBySearch =
          search.value.length < 3
            ? true
            : internship.title
                .toLowerCase()
                .includes(search.value.toLowerCase());
        const filterBySkills =
          selectedSkills.value.length < 1
            ? true
            : selectedSkills.value.every((skill) =>
                internship.skills.includes(skill)
              );
        const filterBySaved = onlySaved.value
          ? internshipsStore.savedInternships.has(internship.id)
          : true;
        const filterByMail = onlyMail.value ? internship.tutor_email : true;
        const res =
          filterByCity &&
          filterBySearch &&
          filterBySkills &&
          filterBySaved &&
          filterByMail;
        if (uniqueMail.value && res) {
          if (mails.has(internship.tutor_email)) return false;
          mails.add(internship.tutor_email);
        }
        return res;
      });
    } else {
      internships.value = internshipsStore.internships;
    }
  };
  watch(onlySaved, filterInternships);
  watch(onlyMail, filterInternships);
  watch(uniqueMail, filterInternships);
  watch(order, handleOrder, { immediate: true });
  watch(city, filterInternships);
  watch(search, filterInternships);
  watch(selectedSkills, filterInternships);
</script>
