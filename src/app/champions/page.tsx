import ChampionCard from "@/components/cards/ChampionCard";
import { Champion } from "@/types/Champion";

const ChampionPage = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
  );
  const data = await res.json();
  const champions: Champion[] = Object.values(data.data);

  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {champions.map((champion) => (
          <ChampionCard champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default ChampionPage;
