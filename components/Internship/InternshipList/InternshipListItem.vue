<template>
  <div
    class="relative bg-gray-900 py-4 px-6 w-[90%] text-white rounded-lg flex gap-4 cursor-pointer hover:backdrop-blur-md hover:backdrop hover:shadow-lg hover:outline hover:outline-primary-500 hover:outline-2 hover:translate-x-12 transition-all duration-200 ease-in-out animation"
    @click="handleOpen">
    <Star
      :favorite="favorite"
      :setFavorite="handleFavorite"
      @click="(e : Event) => e.stopPropagation()" />
    <NuxtImg
      :src="data.image"
      alt="internship"
      class="rounded-lg object-cover w-[20%]" />
    <div class="flex gap-1 flex-col">
      <h2 class="text-lg font-bold">{{ data.title }}</h2>
      <p class="text-gray-400">{{ desc }} ...</p>
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
    :favorite="favorite"
    :setFavorite="handleFavorite"
    :handleOpen="handleOpen" />
</template>

<script lang="ts" setup>
  import InternshipDetails from "@/components/Internship/InternshipDetails/InternshipDetails.vue";
  const { data, saved } = defineProps(["data", "saved"]);
  const open = ref<boolean>(false);
  const handleOpen = () => (open.value = !open.value);
  import { useMyInternshipsStore } from "~/store/internships";
  const internshipsStore = useMyInternshipsStore();
  const favorite = ref<boolean>(saved);
  const handleFavorite = () => (favorite.value = !favorite.value);
  const desc = computed(() => data.description?.slice(0, 100));
  watch(favorite, (value) => {
    if (value) {
      internshipsStore.addInternship(data.id);
    } else {
      internshipsStore.removeInternship(data.id);
    }
  });
</script>

<style scoped>
  .animation {
    animation: fadeIn 0.5s ease-in-out;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
