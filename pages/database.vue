<script setup lang="ts">
  import { useMyInternshipsStore } from "~/store/internships";
  const intershipStore = useMyInternshipsStore();
  const interships = intershipStore.internships;
  const columns = [
    {
      key: "id",
      label: "ID",
      sortable: true,
    },
    {
      key: "company",
      label: "Company",
      sortable: true,
    },
    {
      key: "city",
      label: "City",
      sortable: true,
    },
    {
      key: "postal_code",
      label: "Postal Code",
      sortable: true,
    },
    {
      key: "title",
      label: "Title",
      sortable: true,
    },
    {
      key: "tutor_email",
      label: "Email",
    },
    {
      key: "skills",
      label: "Skills",
    },
  ];
</script>

<template>
  <UTable
    :columns="columns"
    :rows="interships"
    :ui="{
      td: {
        size: 'max-w-[20rem] overflow-x-scroll no-scrollbar',
      },
    }">
    <template #expand="{ row }">
      <div class="p-4">
        <pre>{{ row }}</pre>
      </div>
    </template></UTable
  >
</template>
