<template>
  <UModal
    :ui="{
      base: ' min-w-[80vw] min-h-[70vh] flex items-center justify-center',
      background: 'bg-transparent dark:bg-transparent shadow-none ',
    }"
    :modelValue="open"
    @update:model-value="handleOpen">
    <div
      class="bg-gray-900  rounded-xl overflow-hidden flex gap-4 h-[100%] w-[100%]">
      <InternshipImage :image="data.image" />
      <InternshipInfos
        :title="data.title"
        :description="data.description"
        :city="data.city"
        :postal_code="data.postal_code"
        :company="data.company"
        :requirements="data.skills"
        ><InternshipExtraInfo
          :tutor_first_name="data.tutor_first_name"
          :tutor_last_name="data.tutor_last_name"
          :tutor_email="data.tutor_email"
      /></InternshipInfos>
    </div>
  </UModal>
</template>

<script lang="ts" setup>
  import InternshipImage from "@/components/Internship/InternshipDetails/InternshipImage.vue";
  import InternshipInfos from "@/components/Internship/InternshipDetails/InternshipInfos.vue";
  import InternshipExtraInfo from "@/components/Internship/InternshipDetails/InternshipExtraInfo.vue";
  const { data, open, handleOpen } = defineProps([
    "data",
    "open",
    "handleOpen",
  ]);
</script>

<style></style>
