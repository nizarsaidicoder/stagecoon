<template>
  <div class="bg-black relative">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>

<style>
  /* Page transitions */
  .rotate-enter-active,
  .rotate-leave-active {
    transition: all 0.4s;
  }
  .rotate-enter-from,
  .rotate-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>
