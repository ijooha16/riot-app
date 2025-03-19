import { splashImg } from "@/assets/character-image";
import { ChampionDetail } from "@/types/Champion";

const Background = ({ champion }: { champion: ChampionDetail }) => {
  return (
    <div
      className="z-0 bg-cover bg-center w-full aspect-[16/9] fixed left-0 "
      style={{
        backgroundImage: `url(${splashImg(champion.id)})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Background;
