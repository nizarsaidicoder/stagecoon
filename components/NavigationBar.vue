<script setup lang="ts">
  const route = useRoute();

  const links = [
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
  ];
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b border-primary-200 dark:border-primary-500 z-100" />
</template>
