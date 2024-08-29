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
  const query = ref("");

  const filteredRows = computed(() => {
    if (!query.value) {
      return interships;
    }

    return interships.filter((intern) => {
      return Object.values(intern).some((value) => {
        return String(value).toLowerCase().includes(query.value.toLowerCase());
      });
    });
  });
</script>

<template>
  <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
    <UInput
      v-model="query"
      placeholder="Rechercher ..." />
  </div>
  <UTable
    :columns="columns"
    :rows="filteredRows"
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
