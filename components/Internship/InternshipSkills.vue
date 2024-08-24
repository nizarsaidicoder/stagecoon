<template>
  <ul class="flex gap-2 mt-2 flex-wrap">
    <div
      :style="{ backgroundColor: skills[skill] || 'black' }"
      class="text-black-800 rounded-md px-2 py-1 text-white text-sm"
      v-for="skill in computedRequirements"
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

  const { requirements, max } = defineProps({
    requirements: {
      type: Array as PropType<string[]>,
      required: true,
    },
    max: {
      type: Number as PropType<number>,
      default: 5,
    },
  });
  const computedRequirements = computed(() => {
    return requirements.slice(0, max);
  });
</script>

<style></style>
