import { defineStore } from "pinia";
import data from "@/data/final_data_v6.json";
import s from "@/data/skills.json";
import { RefSymbol } from "@vue/reactivity";

export const useMyInternshipsStore = defineStore("internships", () => {
  const internships = ref(data);
  const skills = s;
  const savedInternships: Ref<Set<number>> = ref(getInternshipsCookies());

  function getInternshipsCookies(): Set<number> {
    const data: Ref<string | null | undefined> = useCookie("savedInternships");
    if (data.value == "0") return new Set([0]);
    if (!data.value) {
      return new Set();
    }
    return new Set(data.value?.split(";").map(Number));
  }

  function addInternship(id: number) {
    const cookies = useCookie("savedInternships");
    savedInternships.value.add(id);
    cookies.value = Array.from(savedInternships.value).join(";");
    console.log(cookies.value);
  }
  function removeInternship(id: number) {
    const cookies = useCookie("savedInternships");
    savedInternships.value.delete(id);
    cookies.value = Array.from(savedInternships.value).join(";");
    console.log(cookies.value);
  }
  return {
    internships,
    skills,
    savedInternships,
    addInternship,
    removeInternship,
  };
});
