import { Champion } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import { fetchChampionList } from "@/utils/serverApi";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  const res = await fetch(
    `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations`,
    {
      headers: {
        "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY!,
      },
    }
  );
  const rotation: ChampionRotation = await res.json();
  const champions: Champion[] = await fetchChampionList();
  const rotationChampion: Champion[] = champions.filter((champion) => {
    return rotation.freeChampionIds.includes(parseInt(champion.key));
  });
  return NextResponse.json(rotationChampion);
}
