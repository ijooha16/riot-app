"use server";

import { Champion, ChampionDetail } from "@/types/Champion";

export const fetchChampionList = async (): Promise<Champion[]> => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json",
    { next: { revalidate: 86400 } }
  );
  const data = await res.json();
  return Object.values(data.data);
};

export const fetchChampionDetail = async (
  championId: string
): Promise<ChampionDetail[]> => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion/${championId}.json`
  );
  const data = await res.json();
  return Object.values(data.data);
};
