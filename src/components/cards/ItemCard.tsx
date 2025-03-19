import { Item } from "@/types/Item";
import Image from "next/image";

const ItemCard = ({ item }: {item: Item}) => {

  return (
    <div className="p-6 flex flex-col items-center border-2 rounded-md">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item.image.full}`}
        alt={item.name}
        width={item.image.w}
        height={item.image.h}
      />
      <div>{item.name}</div>
      <div>{item.gold.total}</div>
    </div>
  );
};

export default ItemCard;
