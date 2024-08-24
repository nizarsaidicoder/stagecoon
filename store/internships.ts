import { defineStore } from "pinia";
import data from "@/data/final_data_v6.json";

export const useMyInternshipsStore = defineStore("internships", () => {
  const internships = ref(data);
  return { internships };
});
