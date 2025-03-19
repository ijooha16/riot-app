import { Props } from "../../../types/Props";
import { Metadata } from "next";
import DetailPage from "@/components/detail-page/DetailPage";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  return {
    title: `${params.id}-detail`,
    description: `${params.id}의 세부 정보를 확인하세요!`,
  };
};

const ChampionDetailPage = ({ params }: Props) => {
  return <DetailPage params={params} />;
};

export default ChampionDetailPage;
