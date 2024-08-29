<template>
  <div class="z-100 w-[90rem] mx-auto mt-12 flex flex-col gap-12 mb-12 cursor">
    <h1 class="text-5xl font-bold">
      Lettre de motivation en quelques instants...
    </h1>
    <div class="flex gap-20">
      <div
        class="flex flex-col gap-5 bg-neutral-950 px-6 py-8 rounded-2xl border-primary-300 border max-w-[40rem]">
        <h3 class="text-3xl font-bold">Vos informations</h3>
        <div class="flex flex-col gap-5">
          <div class="flex gap-4 flex-wrap max-w-[40rem]">
            <div class="flex flex-col gap-2">
              <label> Nom </label>
              <UInput
                v-model="nom"
                placeholder="Nom..." />
            </div>
            <div class="flex flex-col gap-2">
              <label> Prénom </label>
              <UInput
                v-model="prenom"
                placeholder="Prénom" />
            </div>
            <div class="flex flex-col gap-2">
              <label> Téléphone </label>
              <UInput
                v-model="telephone"
                placeholder="Téléphone" />
            </div>
            <div class="flex flex-col gap-2">
              <label> Mail </label>
              <UInput
                v-model="mail"
                placeholder="personal@unistra.iutrs.fr" />
            </div>
            <div class="flex flex-col gap-2">
              <label> Address </label>
              <UInput
                v-model="address"
                placeholder="Adress postal" />
            </div>
          </div>
        </div>
        <h3 class="text-3xl font-bold mt-5">
          Les informations de l'entreprise
        </h3>
        <div class="flex gap-4 flex-wrap">
          <div class="flex flex-col gap-2">
            <label> Titre du stage </label>
            <UInput
              v-model="stageTitre"
              placeholder="Titre..." />
          </div>
          <div class="flex flex-col gap-2">
            <label> Description du stage </label>
            <UInput
              v-model="stageDescription"
              placeholder="Description..." />
          </div>
          <div class="flex flex-col gap-2">
            <label> Nom de l'entreprise </label>
            <UInput
              v-model="entrepriseNom"
              placeholder="Nom..." />
          </div>
          <div class="flex flex-col gap-2">
            <label> Mail de l'entreprise </label>
            <UInput
              v-model="entrepriseMail"
              placeholder="entreprise@stage.fr" />
          </div>
          <div class="flex flex-col gap-2">
            <label> Nom du recruteur </label>
            <UInput
              v-model="entrepriseRecruteur"
              placeholder="Nom..." />
          </div>
        </div>
        <div class="flex flex-col gap-2 items-center">
          <UButton
            v-if="!isGenerating"
            @click="generateLettre"
            color="primary"
            icon="i-heroicons-arrow-right-16-solid"
            size="lg">
            Générer
          </UButton>
          <UButton
            v-else
            color="primary"
            size="lg"
            loading>
            Générer
          </UButton>
        </div>
      </div>
      <div class="flex flex-col gap-5 w-[40rem]">
        <UTextarea
          color="gray"
          disabled
          :ui="{
            base: 'h-full disabled:cursor-text',
            wrapper: 'h-full ',
          }"
          variant="outline"
          size="xl"
          placeholder="Lettre de motivation..."
          v-model="output" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const output = ref("");
  const entrepriseNom = ref("");
  const entrepriseMail = ref("");
  const entrepriseRecruteur = ref("");
  const stageTitre = ref("");
  const stageDescription = ref("");
  const nom = ref("");
  const prenom = ref("");
  const telephone = ref("");
  const mail = ref("");
  const address = ref("");
  const isGenerating = ref(false);
  const generateLettre = async function () {
    isGenerating.value = true;
    const data = {
      nom: nom.value,
      prenom: prenom.value,
      telephone: telephone.value,
      mail: mail.value,
      address: address.value,
      entrepriseNom: entrepriseNom.value,
      entrepriseMail: entrepriseMail.value,
      entrepriseRecruteur: entrepriseRecruteur.value,
      stageTitre: stageTitre.value,
      stageDescription: stageDescription.value,
    };
    const response = await fetch("/api/generate/motivation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.text();
    output.value = result;
    isGenerating.value = false;
  };
</script>

<style></style>
