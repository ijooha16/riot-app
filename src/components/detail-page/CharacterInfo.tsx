import { ChampionDetail } from "@/types/Champion";
import Image from "next/image";

const CharacterInfo = ({ champion }: { champion: ChampionDetail }) => {
  return (
    <div className="flex flex-col items-start">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.id}.png`}
        alt={champion.name}
        width={100}
        height={100}
      />
      <div className="font-bold text-red-700 text-[32px] shadow-white">
        {champion.name} ({champion.id})
      </div>
      <div className="mb-[10px] font-bold text-[#ffffffb1]">
        {champion.title}
      </div>
      <div>{champion.lore}</div>
    </div>
  );
};

export default CharacterInfo;
