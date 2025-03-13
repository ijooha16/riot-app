import { loadingImg } from "@/assets/character-image";
import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

const ChampionCard = ({ champion }: { champion: Champion }) => {
  console.log(champion);

  return (
    <Link href={`/champions/${champion.id}`}>
      <div className="w-[300px] p-6 flex flex-col items-center">
        <Image
          src={loadingImg(champion.id)}
          alt={champion.name}
          width={300}
          height={200}
        />
        <div>{champion.name}</div>
        <div>{champion.title}</div>
      </div>
    </Link>
  );
};

export default ChampionCard;
