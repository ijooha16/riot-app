"use server";

import { Champion, ChampionDetail } from "@/types/Champion";
import { Item } from "@/types/Item";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchChampionList = async (): Promise<Champion[]> => {
  try {
    await delay(2000);

    const res = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json",
      { next: { revalidate: 86400 } }
    );

    if (!res.ok) {
      throw new Error("챔피언 데이터를 불러오지 못했습니다.");
    }

    const { data } = await res.json();
    return Object.values(data);
  } catch (error) {
    console.error("챔피언 리스트 로딩 실패:", error);
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

    if (!res.ok) {
      throw new Error(`챔피언 상세 정보를 불러오지 못했습니다: ${championId}`);
    }

    const { data } = await res.json();
    return Object.values(data);
  } catch (error) {
    console.error("챔피언 상세 정보 로딩 실패:", error);
    throw error;
  }
};

export const fetchItemList = async (): Promise<Item[]> => {
  try {
    await delay(2000);

    const res = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json"
    );

    if (!res.ok) {
      throw new Error("아이템 데이터를 불러오지 못했습니다.");
    }

    const { data } = await res.json();
    return Object.values(data);
  } catch (error) {
    console.error("아이템 리스트 로딩 실패:", error);
    throw error;
  }
};