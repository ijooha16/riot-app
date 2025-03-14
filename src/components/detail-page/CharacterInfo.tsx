import { championImg } from "@/assets/character-image";
import { ChampionDetail } from "@/types/Champion";
import Image from "next/image";

const CharacterInfo = ({ champion }: { champion: ChampionDetail }) => {
  return (
    <div className="flex flex-col items-start">
      <Image
        src={championImg(champion.id)}
        alt={champion.name}
        width={100}
        height={100}
      />
      <div className="font-bold text-red-600 text-[32px] shadow-white">
        {champion.name} ({champion.id})
      </div>
      <div className="mb-[10px] text-[18px] font-bold text-[#ffffffd8]">
        {champion.title}
      </div>
      <div className="text-[16px] text-[#ffffffb8]">{champion.lore}</div>
    </div>
  );
};

export default CharacterInfo;
