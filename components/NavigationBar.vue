<script setup lang="ts">
  const route = useRoute();

  const links = [
    {
      label: "Profile",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
    {
      label: "Home",
      icon: "i-heroicons-home",
    },
    {
      label: "Stages",
      icon: "i-heroicons-academic-cap",
    },
  ];
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b border-primary-200 dark:border-primary-500 z-100" />
</template>
