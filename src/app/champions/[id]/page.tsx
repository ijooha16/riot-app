import { fetchChampionDetail } from "@/utils/serverApi";
import { Props } from "../../../types/Props";
import { ChampionDetail } from "@/types/Champion";
import Background from "@/components/detail-page/Background";
import CharacterInfo from "@/components/detail-page/CharacterInfo";
import SpellCard from "@/components/detail-page/SpellCard";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  return {
    title: `${params.id}-detail`,
    description: "매주 바뀌는 무료 챔피언을 확인하세요!",
  };
};

const ChampionDetailPage = async ({ params }: Props) => {
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

export default ChampionDetailPage;
