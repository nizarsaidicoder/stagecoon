<template>
  <ul class="flex gap-2 mt-2 flex-wrap">
    <div
      :style="{ backgroundColor: skills[skill] || 'black' }"
      class="text-black-800 rounded-md px-2 py-1 text-white text-sm"
      v-for="skill in requirements"
      :key="skill">
      {{ skill }}
    </div>
  </ul>
</template>

<script lang="ts" setup>
  import skills from "@/data/skills.json";
  type Skills = {
    [key: string]: string;
  };
  const { requirements } = defineProps(["requirements"]);
</script>

<style></style>
