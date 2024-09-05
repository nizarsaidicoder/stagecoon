<script setup lang="ts">
  import { _size } from "#tailwind-config/theme";

  const route = useRoute();
  const open = ref(true);
  const links = [
    [
      {
        label: "STAGECOON",
        avatar: {
          src: "/images/logo.jpg",
        },
      },
    ],
    [
      {
        label: "Home",
        icon: "i-heroicons-home",
        to: "/",
      },
      {
        label: "Stages",
        icon: "i-heroicons-clipboard",
        to: "/stages",
      },
      {
        label: "Database",
        icon: "i-heroicons-circle-stack",
        to: "/database",
      },
      {
        label: "Generate",
        icon: "i-heroicons-cube",
        to: "/generate",
      },
      {
        label: "Informations",
        icon: "i-heroicons-information-circle",
        to: "/informations",
      },
      {
        label: "Offres disponibles",
        icon: "i-heroicons:arrow-path-16-solid",
        to: "/offres",
      },
    ],
  ];
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b border-primary-200 dark:border-primary-500 z-100" />

  <div
    v-if="open"
    class="bg-primary-500 py-2 text-center font-medium text-lg flex items-center justify-center relative">
    <div class="flex items-center gap-2">
      <UIcon name="i-heroicons-information-circle" /> Le site est toujours en
      construction et pas indicative du produit finale, si vous rencontrer un
      bug, veuillez le signaler dans github.
    </div>

    <UIcon
      @click="open = false"
      name="i-heroicons-x-circle-20-solid"
      class="absolute top-1/2 -translate-y-1/2 right-8 w-7 h-7 cursor-pointer hover:bg-red-500" />
  </div>
</template>
