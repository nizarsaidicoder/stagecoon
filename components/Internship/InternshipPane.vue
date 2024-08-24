<template>
  <div
    class="bg-white py-4 px-6 w-[90%] text-black rounded-lg flex gap-4 cursor-pointer hover:backdrop-blur-md hover:backdrop hover:shadow-md hover:translate-x-12 hover:shadow-primary-50 transition-all duration-300 ease-in-out"
    @click="handleOpen">
    <NuxtImg
      :src="data.image"
      alt="internship"
      class="rounded-lg object-cover w-[20%]" />
    <div class="flex gap-1 flex-col">
      <h2 class="text-lg font-bold">{{ data.title }}</h2>
      <p class="text-gray-500">{{ desc }} ...</p>
      <div class="flex gap-4 items-center">
        <div class="flex items-center gap-2">
          <UIcon name="i-heroicons-map-pin-16-solid" />
          <p>{{ data.city }}</p>
          <p>{{ data.postal_code }}</p>
          <UIcon name="i-heroicons-building-library-16-solid" />
          <p>{{ data.company }}</p>
        </div>
      </div>
      <InternshipSkills :requirements="data.skills" />
    </div>
  </div>
  <InternshipDetails
    v-if="open"
    :open="open"
    :data="data"
    :handleOpen="handleOpen" />
</template>

<script lang="ts" setup>
  const { data } = defineProps(["data"]);
  const open = ref<boolean>(false);
  const handleOpen = () => (open.value = !open.value);
  const desc = computed(() => data.description?.slice(0, 100));
</script>

<style></style>
