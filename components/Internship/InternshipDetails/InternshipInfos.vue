<template>
  <div class="text-black h-[40rem] overflow-y-scroll scroll-smooth">
    <div class="flex flex-col gap-4 py-12 px-6">
      <h2 class="text-3xl font-bold">
        {{ title || "Non renseigné" }}
      </h2>
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-bold">Coordonnées</h2>
        <div class="flex gap-10">
          <div class="flex gap-2 items-center">
            <UIcon
              name="i-heroicons-map-pin-16-solid"
              class="fill-golden-300" />
            <span>{{ city || "Non renseigné" }} </span>
          </div>
          <div class="flex gap-2 items-center">
            <UIcon name="i-heroicons-map-16-solid" />
            <span>{{ postal_code || "Non renseigné" }} </span>
          </div>
          <div class="flex gap-2 items-center">
            <UIcon name="i-heroicons-briefcase-16-solid" />
            <span>{{ company || "Non renseigné" }} </span>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="text-2xl font-bold">Description</h3>
        <p class="text-gray-700">{{ description || "Non renseigné" }}</p>
      </div>

      <div class="flex flex-col gap-1 flex-wrap">
        <h3 class="text-2xl font-bold">Compétences requises</h3>
        <InternshipSkills :requirements="requirements" />
      </div>
      <UDivider label="" />

      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import InternshipSkills from "../InternshipSkills.vue";
  const { title, city, postal_code, company, description, requirements } =
    defineProps([
      "title",
      "city",
      "postal_code",
      "company",
      "description",
      "requirements",
    ]);
</script>
