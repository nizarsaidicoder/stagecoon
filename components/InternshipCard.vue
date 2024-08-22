<template>
  <div
    class="bg-white text-black rounded-xl flex flex-col gap-4 border-white border-2 pt-2 pb-6 px-2 max-w-[340px]">
    <img
      :src="data.image"
      alt="Internship"
      class="w-full h-[80%] object-cover rounded-xl" />
    <div class="px-2 flex flex-col gap-1">
      <h2 class="text-xl font-bold">{{ data.title }}</h2>
      <p class="text-gray-700">
        {{ computedText }} <span class="font-bold italic">...</span>
      </p>
    </div>
    <div>
      <ul class="flex gap-2 mt-2 flex-wrap">
        <div
          :style="{ backgroundColor: skills[skill] }"
          class="text-black-800 rounded-md px-2 py-1 text-white text-sm"
          v-for="skill in data.skills"
          :key="skill">
          {{ skill }}
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { InternshipData } from "../types.ts";
  import skills from "../data/skills.json";
  const data = ref<InternshipData>({
    subject:
      "Développement d'une application de gestion du personnel et des clients",
    tasks: "undefined",
    company: "Aérial",
    postal_code: "67400",
    city: "Illkirch-graffenstaden",
    tutor_last_name: "undefined",
    tutor_first_name: "undefined",
    tutor_email: "undefined",
    title: "Stage de Développement d'Application de Gestion",
    description:
      "Ce stage consiste à développer une application de gestion du personnel et des clients pour Aérial. Vous serez amené à travailler sur des fonctionnalités cruciales pour améliorer l'efficacité opérationnelle de l'entreprise.",
    skills: [
      "Web Development",
      "Front-End Development",
      "User Interface Design",
      "User Experience Design",
    ],
    image: "https://i.imgur.com/9EQ6vuS.jpeg",
  });

  const computedText: Computed<string> = computed(() => {
    return data.value.description.slice(0, 85);
  });
</script>

<style lang="scss" scoped></style>
