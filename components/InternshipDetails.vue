<template>
  <UButton @click="isOpen = !isOpen">Open Modal</UButton>
  <UModal
    :ui="{
      base: ' min-w-[80vw] min-h-[70vh] flex items-center justify-center',
      background: 'bg-transparent dark:bg-transparent shadow-none ',
    }"
    v-model="isOpen">
    <div class="bg-white rounded-xl overflow-hidden flex h-[100%] w-[100%]">
      <div class="h-full">
        <img
          :src="data.image"
          alt="Internship"
          class="h-[40rem] max-h-[70rem] object-cover" />
      </div>
      <div class="text-black">
        <div class="flex flex-col gap-4 p-4">
          <h2 class="text-3xl font-bold">{{ data.title }}</h2>
          <div class="flex gap-1 items-center">
            <div class="flex gap-1 items-center">
              <UIcon
                name="i-heroicons-map-pin-16-solid"
                class="fill-golden-300" />
              <span>{{ data.city }} </span>
            </div>
            <div class="flex gap-1 items-center">
              <UIcon name="i-heroicons-map-16-solid" />
              <span>{{ data.postal_code }} </span>
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-bold">Description</h3>
            <p class="text-gray-700">{{ data.description }}</p>
          </div>

          <div class="flex flex-col gap-2 mt-2 flex-wrap">
            <h3 class="text-2xl font-bold">Compétences requises</h3>
            <div class="flex gap-2">
              <div
                v-for="skill in data.skills"
                class="text-black-800 rounded-md px-2 py-1 text-white text-sm"
                :style="{ backgroundColor: typedSkills[skill] }"
                :key="skill">
                {{ skill }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UModal>
</template>

<script lang="ts" setup>
  import type { InternshipData } from "../types.ts";
  import skills from "../data/skills.json";

  type Skills = {
    [key: string]: string;
  };

  const typedSkills: Skills = skills;

  const isOpen = ref<boolean>(true);
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
</script>

<style></style>
