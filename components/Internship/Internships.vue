<template>
  <div class="flex gap-10 py-6 px-4">
    <div class="w-[20%] border-r-2 border-primary-500 px-4">
      <div class="flex flex-col gap-2">
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
      </div>
    </div>
    <div
      class="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
      v-if="viewType === 'Gallerie'">
      <InternshipCard
        v-for="internship in internships"
        :key="internship.image"
        :data="internship" />
    </div>
    <div
      v-else-if="viewType === 'Liste'"
      class="w-full flex flex-col gap-2">
      <InternshipPane
        v-for="internship in internships"
        :key="internship.id"
        :data="internship" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { InternshipData } from "@/types.ts";
  import { useMyInternshipsStore } from "~/store/internships";
  const internshipsStore = useMyInternshipsStore();
  const internships = ref<InternshipData[]>(internshipsStore.internships);
  const viewType = ref<string>("Liste");
  const views = ["Liste", "Gallerie"];
  //  Date is the default order
  const order = ref<string>("date");
  const orders = ["title", "date"];
  // console.log(
  //   internships.value.filter(
  //     (internship: InternshipData) => internship.title === null
  //   )
  // );

  // const handleOrder = (order: string) => {
  //   if (order === "title") {
  //     internships.value = internshipsStore.internships.sort((a, b) =>
  //       a.title.localeCompare(b.title)
  //     );
  //   } else {
  //     internships.value = internshipsStore.internships;
  //   }
  // };
  // watch(order, handleOrder, { immediate: true });
</script>
