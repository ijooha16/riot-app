import { Champion } from "@/types/Champion";

export const getChampionRotation = async () => {
  const res = await fetch("https://riot-kttc1oszs-juha-yoons-projects.vercel.app/api/rotation");
  const data: Champion[] = await res.json();
  return data;
};
