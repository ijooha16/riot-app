import ItemCard from "@/components/cards/ItemCard";
import { Item } from "@/types/Item";
import { fetchItemList } from "@/utils/serverApi";
import { Suspense } from "react";
import Loading from "../loading";

const ItemsPage = async () => {
  const items: Item[] = await fetchItemList();

  return (
    <div>
      <div className="grid grid-cols-5 gap-6">
        {items.map((item) => (
          <Suspense key={item.name} fallback={<Loading />}>
            <ItemCard item={item} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
