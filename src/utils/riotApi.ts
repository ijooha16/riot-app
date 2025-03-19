import { Champion } from "@/types/Champion";

export const getChampionRotation = async () => {
  try {
    const res = await fetch("/api/rotation");
    const data: Champion[] = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
