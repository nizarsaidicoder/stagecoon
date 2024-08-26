<template>
  <div
    class="bg-gray-900 relative text-white rounded-xl flex flex-col items-start justify-between gap-3 hover:outline hover:outline-primary-500 hover:outline-2 pt-2 pb-6 px-2 max-w-[340px] card animation">
    <Star :id="data.id" />
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
  import { useMyInternshipsStore } from "~/store/internships";
  import Star from "~/components/Star.vue";
  const { data } = defineProps(["data"]);
  const open = ref<boolean>(false);
  const handleOpen = () => (open.value = !open.value);
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
