import { fetchChampionDetail } from "@/utils/serverApi";
import { Props } from "../../../types/Props";
import { ChampionDetail } from "@/types/Champion";
import Background from "@/components/detail-page/Background";
import CharacterInfo from "@/components/detail-page/CharacterInfo";

const ChampionDetailPage = async ({ params }: Props) => {
  const data: ChampionDetail[] = await fetchChampionDetail(params.id);
  const champion = data[0];

  return (
    <div className="w-[800px]">
      <Background champion={champion} />
      <div className="flex flex-col gap-10 relative z-10 mt-[300px]">
        <CharacterInfo champion={champion} />

        {champion.allytips.map((el) => el)}
        {champion.enemytips.map((el) => el)}
        <br />
        <br />
        {JSON.stringify(champion)}
      </div>
    </div>
  );
};

export default ChampionDetailPage;



