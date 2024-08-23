<template>
  <div>
    <NuxtRouteAnnouncer />

    <NavigationBar />

    <!-- <InternshipDetails /> -->
    <Internships />
    <!-- <div class="container flex w-96 my-16 mx-auto">
      <InternshipCard />
    </div> -->
  </div>
</template>

<script setup lang="ts">
  import Internships from "./components/Internship/Internships.vue";
</script>
