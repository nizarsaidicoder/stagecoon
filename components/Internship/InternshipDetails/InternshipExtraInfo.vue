<template>
  <div class="flex flex-col gap-2 mt-2">
    <div class="flex flex-col gap-2">
      <div class="flex gap-2 items-center">
        <UIcon name="i-heroicons-user-16-solid" /> Tuteur :
        <span>{{ tutor_first_name || "Inconnu" }} {{ tutor_last_name }}</span>
      </div>
      <div class="flex gap-2 items-center">
        <UIcon name="i-heroicons-envelope-16-solid" />
        <span>Mail : {{ tutor_email }}</span>
      </div>
    </div>
    <h4 class="text-lg font-bold">Sujet :</h4>
    <p class="text-gray-300">{{ subject || "Non renseingé" }}</p>
    <h4 class="text-lg font-bold">Fontions & Tâches :</h4>
    <p class="text-gray-300">{{ tasks || "Non renseingé" }}</p>
  </div>
</template>

<script lang="ts" setup>
  const { tutor_first_name, tutor_last_name, tutor_email, subject, tasks } =
    defineProps({
      tutor_first_name: String || null,
      tutor_last_name: String || null,
      tutor_email: String || null,
      subject: String || null,
      tasks: String || null,
    });
</script>

<style></style>
