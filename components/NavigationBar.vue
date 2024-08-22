<script setup lang="ts">
  const route = useRoute();

  const links = [
    {
      label: "Profile",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
      badge: 100,
    },
    {
      label: "Home",
      icon: "i-heroicons-home",
    },
    {
      label: "Stages",
      icon: "i-heroicons-chart-bar",
      to: `${
        route.path.startsWith("/dev") ? "/dev" : ""
      }/components/horizontal-navigation`,
    },
  ];
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b border-gray-200 dark:border-gray-800" />
</template>
