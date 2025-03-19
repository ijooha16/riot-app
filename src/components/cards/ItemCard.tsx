import { Item } from "@/types/Item";
import Image from "next/image";

const ItemCard = ({ item }: {item: Item}) => {

  return (
    <div className="p-6 flex flex-col items-center justify-center border-2 rounded-md gap-10">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item.image.full}`}
        alt={item.name}
        width={item.image.w}
        height={item.image.h}
      />
      <div className="flex flex-col items-center font-bold text-center">
        <div>{item.name}</div>
        <div className="text-sm text-red-500">sell {item.gold.sell}</div>
        <div className="text-sm text-green-500">total {item.gold.total}</div>
      </div>
    </div>
  );
};

export default ItemCard;
