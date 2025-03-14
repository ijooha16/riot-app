import ItemCard from "@/components/cards/ItemCard";
import { Item } from "@/types/Item";
import { fetchItemList } from "@/utils/serverApi";

const ItemsPage = async () => {
  const items: Item[] = await fetchItemList();

  return (
    <div>
      <div className="grid grid-cols-5 gap-6">
        {items.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
