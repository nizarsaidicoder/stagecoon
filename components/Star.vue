<template>
  <div
    class="rounded-full bg-white shadow-lg flex items-center justify-center absolute top-5 right-5 p-2 z-100 cursor-pointer"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    @click="setFavorite">
    <UIcon
      name="i-heroicons-star-16-solid"
      class="text-lg duration-200 ease-in-out text-black"
      :class="{ 'text-primary-500': hovered || favorite }" />
  </div>
</template>

<script lang="ts" setup>
  const hovered = ref<boolean>(false);
  const { favorite, setFavorite } = defineProps(["favorite", "setFavorite"]);
</script>

<style></style>
