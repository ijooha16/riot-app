import { Champion } from "@/types/Champion";

export const getChampionRotation = async () => {
  const res = await fetch("https://localhost:3000/api/rotation");
  const data: Champion[] = await res.json();
  return data;
};
