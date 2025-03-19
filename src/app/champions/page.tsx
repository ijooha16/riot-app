"use server";

import ChampionCard from "@/components/cards/ChampionCard";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import { Suspense } from "react";
import Loading from "../loading";

const ChampionPage = async () => {
  const champions: Champion[] = await fetchChampionList();

  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {champions.map((champion) => (
          <Suspense key={champion.id} fallback={<Loading />}>
            <ChampionCard page="champions" champion={champion} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default ChampionPage;
