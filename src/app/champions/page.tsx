import ChampionCard from "@/components/cards/ChampionCard";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";

const ChampionPage = async () => {
  const champions: Champion[] = await fetchChampionList();

  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {champions.map((champion) => (
          <ChampionCard page='champions' champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default ChampionPage;
