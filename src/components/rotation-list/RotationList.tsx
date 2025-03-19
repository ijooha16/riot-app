"use client";

import Loading from "@/app/loading";
import ChampionCard from "../cards/ChampionCard";
import { getChampionRotation } from "@/utils/riotApi";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";

const RotationList = () => {
  const { data: rotation } = useQuery({
    queryKey: ["championRotation"],
    queryFn: getChampionRotation,
  });

  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {rotation?.map((champion) => (
          <Suspense fallback={<Loading />}>
            <ChampionCard
              key={champion.id}
              page="rotation"
              champion={champion}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default RotationList;
