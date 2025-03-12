import ItemCard from "@/components/cards/ItemCard";
import { Item } from "@/types/Item";

const ItemsPage = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json"
  );
  const data = await res.json();
  const items: Item[] = Object.values(data.data);

  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
