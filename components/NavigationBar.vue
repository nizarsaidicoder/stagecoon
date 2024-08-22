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
      to: `${
        route.path.startsWith("/dev") ? "/dev" : ""
      }/components/horizontal-navigation`,
    },
  ];
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b border-orange-200 dark:border-orange-500" />
</template>
