"use server";

import { Champion, ChampionDetail } from "@/types/Champion";
import { Item } from "@/types/Item";

export const fetchChampionList = async (): Promise<Champion[]> => {
  try {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json",
      { next: { revalidate: 86400 } }
    );
    const { data } = await res.json();
    return Object.values(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchChampionDetail = async (
  championId: string
): Promise<ChampionDetail[]> => {
  try {
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion/${championId}.json`
    );
    const { data } = await res.json();
    return Object.values(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchItemList = async (): Promise<Item[]> => {
  try {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json"
    );
    const { data } = await res.json();
    return Object.values(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
