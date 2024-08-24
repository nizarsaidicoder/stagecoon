<template>
  <div class="flex gap-10 py-6 px-4">
    <div class="w-[20rem] border-r-2 border-primary-500"></div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      v-if="viewType === 'gallery'">
      <InternshipCard
        v-for="internship in internships"
        :key="internship.image"
        :data="internship" />
    </div>
    <div
      v-else-if="viewType === 'list'"
      class="flex flex-col gap-2">
      <InternshipPane
        v-for="internship in internships"
        :key="internship.image"
        :data="internship" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { InternshipData } from "@/types.ts";
  import data from "@/data/final_data_v4.json";

  const internships = ref<InternshipData[]>(data);
  const viewType = ref<string>("list");
</script>

<style></style>
