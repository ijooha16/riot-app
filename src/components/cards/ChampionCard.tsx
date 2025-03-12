import { ChampionCardProps } from "@/types/Champion";
import Image from "next/image";

const ChampionCard = ({ champion }: ChampionCardProps) => {
  console.log(champion);

  return (
    <div className="w-[300px] p-6 flex flex-col items-center border-2 rounded-md">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
        alt={champion.name}
        width={champion.image.w}
        height={champion.image.h}
      />
      <div>{champion.name}</div>
      <div>{champion.title}</div>
    </div>
  );
};

export default ChampionCard;
