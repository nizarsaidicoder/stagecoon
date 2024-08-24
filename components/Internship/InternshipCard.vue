<template>
  <div
    class="bg-white text-black rounded-xl flex flex-col items-start gap-3 border-white border-2 pt-2 pb-6 px-2 max-w-[340px] card relative">
    <div
      class="rounded-full bg-white shadow-lg flex items-center justify-center absolute top-5 right-5 p-2 z-10 cursor-pointer"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
      @click="favorite = !favorite">
      <UIcon
        name="i-heroicons-star-16-solid"
        class="text-lg duration-200 ease-in-out"
        :class="{ 'text-primary-500': hovered || favorite }" />
    </div>
    <img
      :src="data.image"
      alt="Internship"
      class="w-full h-[80%] object-cover rounded-xl" />
    <div class="px-2 flex flex-col gap-1">
      <h2 class="text-xl font-bold">{{ data.title || "Non renseigné" }}</h2>
      <p class="text-gray-700">
        {{ computedText || "Non renseigné" }}
        <span class="font-bold italic">...</span>
      </p>
    </div>
    <UButton
      class="self-end mr-2"
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
  const { data } = defineProps(["data"]);
  const open = ref<boolean>(false);
  const handleOpen = () => (open.value = !open.value);
  const hovered = ref<boolean>(false);
  const favorite = ref<boolean>(false);

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
  .card:hover img {
    /* zoom */
    scale: 1.02;
  }
</style>
