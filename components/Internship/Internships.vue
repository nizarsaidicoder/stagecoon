<template>
  <div class="flex gap-10 py-6 px-4 max-h-[92vh]">
    <div class="min-w-[18%] border-r-2 border-primary-500 px-4">
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
          <p>Search By Name</p>
          <UInput
            icon="i-heroicons-magnifying-glass-20-solid"
            size="sm"
            color="white"
            :trailing="false"
            placeholder="Search..." />
        </div>
      </div>
    </div>
    <div
      class="max-h-[100vh] flex flex-col gap-4 overflow-y-scroll no-scrollbar">
      <InternshipCards v-if="viewType === 'Gallerie'">
        <InternshipCard
          v-for="internship in internships"
          :key="internship.id"
          :data="internship" />
      </InternshipCards>
      <InternshipList v-else-if="viewType === 'Liste'">
        <InternshipListItem
          v-for="internship in internships"
          :key="internship.id"
          :data="internship" />
      </InternshipList>
      <UButton
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

  const internshipsStore = useMyInternshipsStore();
  // Do not load everything at once
  const internships = ref<InternshipData[]>([
    ...internshipsStore.internships.slice(0, 10),
  ]);
  const loadMore = () => {
    const currentLength = internships.value.length;
    const nextInternships = internshipsStore.internships.slice(
      currentLength,
      currentLength + 10
    );
    internships.value = [...internships.value, ...nextInternships];
  };
  const viewType = ref<string>("Liste");
  const views = ["Liste", "Gallerie"];
  const order = ref<string>("Date");
  const orders = ["Title", "Date"];

  const handleOrder = (order: string) => {
    if (order === "Title") {
      internships.value = internships.value.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else {
      internships.value = internships.value.sort((a, b) => a.id - b.id);
    }
  };
  watch(order, handleOrder, { immediate: true });
</script>
