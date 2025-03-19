import { ChampionDetail } from "@/types/Champion";
import { fetchChampionDetail } from "@/utils/serverApi";
import Background from "./Background";
import CharacterInfo from "./CharacterInfo";
import SpellCard from "./SpellCard";
import { Props } from "@/types/Props";

const DetailPage = async ({ params }: Props) => {
  const data: ChampionDetail[] = await fetchChampionDetail(params.id);
  const champion = data[0];

  return (
    <div className="w-[800px]">
      <Background champion={champion} />
      <div className="flex flex-col gap-10 relative z-10 mt-[300px]">
        <CharacterInfo champion={champion} />

        <div className="grid grid-cols-4 gap-8">
          {champion.spells.map((spell) => (
            <SpellCard spell={spell} />
          ))}
        </div>
        <br />
        <br />
        {JSON.stringify(champion)}
      </div>
    </div>
  );
};

export default DetailPage;
