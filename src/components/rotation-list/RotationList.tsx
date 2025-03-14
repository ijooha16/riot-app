"use client";

import ChampionCard from "../cards/ChampionCard";
import { getChampionRotation } from "@/utils/riotApi";
import { useQuery } from "@tanstack/react-query";

const RotationList = () => {
  const { data: rotation } = useQuery({
    queryKey: ["championRotation"],
    queryFn: getChampionRotation,
  });

  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {rotation?.map((champion) => (
          <ChampionCard key={champion.id} page="rotation" champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default RotationList;
