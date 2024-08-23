<template>
  <div class="h-full">
    <img
      :src="image"
      alt="Internship"
      class="h-[40rem] max-h-[70rem] object-cover" />
  </div>
</template>

<script lang="ts" setup>
  const { image } = defineProps({
    image: String,
  });
</script>

<style></style>
