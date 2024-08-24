import { defineStore } from "pinia";
import data from "@/data/final_data_v6.json";
import s from "@/data/skills.json";

export const useMyInternshipsStore = defineStore("internships", () => {
  const internships = ref(data);
  const skills = s;
  return { internships, skills };
});
