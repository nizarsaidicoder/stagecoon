import { defineStore } from "pinia";
import data from "@/data/final_data_v6.json";
import s from "@/data/skills.json";

export const useMyInternshipsStore = defineStore("internships", () => {
  const internships = ref(data);
  const skills = s;
  const savedInternships: Ref<Set<number>> = ref(getInternshipsCookies());

  function getInternshipsCookies(): Set<number> {
    const data = useCookie("savedInternships");
    if (!data) {
      return new Set();
    }
    return new Set(data.value?.split(",").map(Number));
  }

  function addInternship(id: number) {
    const cookies = useCookie("savedInternships");
    savedInternships.value.add(id);
    cookies.value = Array.from(savedInternships.value).join(",");
  }
  function removeInternship(id: number) {
    const cookies = useCookie("savedInternships");
    savedInternships.value.delete(id);
    cookies.value = Array.from(savedInternships.value).join(",");
  }

  getInternshipsCookies();
  return {
    internships,
    skills,
    savedInternships,
    addInternship,
    removeInternship,
  };
});
