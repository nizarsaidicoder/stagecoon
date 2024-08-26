<template>
  <div
    class="rounded-full bg-white shadow-lg flex items-center justify-center absolute top-5 right-5 p-2 z-100 cursor-pointer"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    @click="handleSaved">
    <UIcon
      name="i-heroicons-star-16-solid"
      class="text-lg duration-200 ease-in-out text-black"
      :class="{ 'text-primary-500': hovered || saved }" />
  </div>
</template>

<script lang="ts" setup>
  import { useMyInternshipsStore } from "~/store/internships";
  const { id } = defineProps(["id"]);
  const internshipsStore = useMyInternshipsStore();
  const hovered = ref<boolean>(false);

  const saved = ref<boolean>(internshipsStore.savedInternships.has(id));
  const handleSaved = () => (saved.value = !saved.value);

  watch(internshipsStore.savedInternships, (value) => {
    saved.value = value.has(id);
  });
  watch(saved, (value) => {
    if (value) {
      internshipsStore.addInternship(id);
    } else {
      internshipsStore.removeInternship(id);
    }
  });
</script>
