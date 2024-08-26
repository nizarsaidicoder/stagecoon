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
      </div>
    </div>
    <div
      class="max-h-[100vh] flex flex-col gap-4 overflow-y-scroll no-scrollbar">
      <p
        v-if="!buttonIsVisible"
        class="text-lg text-white font-bold">
        Stages trouvés : {{ internships.length }}
      </p>
      <p
        v-else
        class="text-lg text-white font-bold">
        Stages trouvés : {{ internshipsStore.internships.length }}
      </p>
      <InternshipCards v-if="viewType === 'Gallerie'">
        <InternshipCard
          v-for="internship in internships"
          :key="internship.id"
          :data="internship"
          :saved="savedInternships.has(internship.id)" />
      </InternshipCards>
      <InternshipList v-else-if="viewType === 'Liste'">
        <InternshipListItem
          v-for="internship in internships"
          :key="internship.id"
          :data="internship"
          :saved="savedInternships.has(internship.id)" />
      </InternshipList>
      <UButton
        v-if="buttonIsVisible"
        color="primary"
        class="self-center"
        icon="i-heroicons:arrow-path-16-solid"
        label="Load more"
        @click="loadMore" />
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
  // savedInternships.value =
  //   savedInternships.value?.toString() ||
  //   Math.round(Math.random() * 1000).toString();
  // console.log(savedInternships);

  let internshipCount = 10;
  const internshipsStore = useMyInternshipsStore();
  const savedInternships = ref(internshipsStore.savedInternships);
  const skills = Object.keys(internshipsStore.skills);
  const selectedSkills = ref<string[]>([]);
  const internships = ref<InternshipData[]>([
    ...internshipsStore.internships.slice(0, internshipCount),
  ]);
  const viewType = ref<string>("Liste");
  const views = ["Liste", "Gallerie"];
  const order = ref<string>("Date");
  const orders = ["Title", "Date"];
  const buttonIsVisible = ref<boolean>(true);
  const search = ref<string>("");
  const city = ref<string>("");

  const loadMore = () => {
    const currentLength = internships.value.length;
    const nextInternships = internshipsStore.internships.slice(
      currentLength,
      currentLength + 10
    );
    internships.value = [...internships.value, ...nextInternships];
    internshipCount = internships.value.length;
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
      selectedSkills.value.length >= 1
    ) {
      buttonIsVisible.value = false;
      internships.value = internshipsStore.internships.filter((internship) => {
        console.log(search.value);

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
        return filterByCity && filterBySearch && filterBySkills;
      });
    } else {
      buttonIsVisible.value = true;
      internships.value = internshipsStore.internships.slice(
        0,
        internshipCount
      );
    }
  };
  watch(order, handleOrder, { immediate: true });
  watch(city, filterInternships);
  watch(search, filterInternships);
  watch(selectedSkills, filterInternships);
</script>
