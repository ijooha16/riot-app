import { splashImg } from "@/assets/character-image";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div>리그 오브 레전드 정보 앱</div>
      <div>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</div>
      <Link href="/champions">
        <Img championName="Nunu" />
        <div>Champions</div>
        <div>챔피언 페이지에서 각 챔피언의 세부정보를 확인하세요!</div>
      </Link>
      <Link href="/items">
        <Img championName="Irelia" />
        <div>Items</div>
        <div>아이템 페이지에서 각 아이템의 세부정보를 확인하세요!</div>
      </Link>
      <Link href="/rotation">
        <Img championName="Aurora" />
        <div>Rotation</div>
        <div>로테이션 페이지에서 매주 달라지는 무료 챔피언을 확인하세요!</div>
      </Link>
    </div>
  );
}

const Img = ({ championName }: { championName: string }) => {
  return (
    <Image
      src={splashImg(`${championName}`)}
      alt={`${championName}`}
      width={400}
      height={300}
    />
  );
};
