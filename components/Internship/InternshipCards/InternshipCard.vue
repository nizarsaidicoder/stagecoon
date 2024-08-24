<template>
  <div
    class="bg-gray-900 text-white rounded-xl flex flex-col items-start justify-between gap-3 hover:outline hover:outline-primary-500 hover:outline-2 pt-2 pb-6 px-2 max-w-[340px] card relative animation">
    <Star
      :favorite="favorite"
      :setFavorite="handleFavorite" />
    <div class="flex flex-col gap-2">
      <div class="w-full zoom-image">
        <img
          :src="data.image"
          alt="Internship"
          class="object-cover rounded-xl" />
      </div>

      <div class="px-2 flex flex-col gap-1">
        <h2 class="text-xl font-bold">{{ data.title || "Non renseigné" }}</h2>
        <p class="text-gray-400">
          {{ computedText || "Non renseigné" }}
          <span class="font-bold italic">...</span>
        </p>
      </div>
    </div>
    <UButton
      class="self-end justify-self-end mr-2"
      icon="i-heroicons-arrow-right-16-solid"
      color="primary"
      label="Voir plus"
      @click="handleOpen" />
  </div>
  <InternshipDetails
    v-if="open"
    :open="open"
    :data="data"
    :handleOpen="handleOpen" />
</template>

<script setup lang="ts">
  import InternshipDetails from "@/components/Internship/InternshipDetails/InternshipDetails.vue";
  import Star from "~/components/Star.vue";
  const { data } = defineProps(["data"]);
  const open = ref<boolean>(false);
  const handleOpen = () => (open.value = !open.value);

  const favorite = ref<boolean>(false);
  const handleFavorite = () => (favorite.value = !favorite.value);

  const computedText: ComputedRef<string | undefined> = computed(() => {
    return data.description?.slice(0, 85);
  });
</script>

<style scoped>
  .card {
    transition: all 0.3s;
  }
  .card:hover {
    transform: scale(1.02);
  }
  .card img {
    transition: all 01s;
  }
  .card:hover .zoom-image img {
    width: 100%;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }

  .zoom-image {
    overflow: hidden;
  }
  .zoom-image img {
    width: 100%;
    height: auto;
  }
  .animation {
    animation: fadeIn 0.5s ease-in-out;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
