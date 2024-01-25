import ProductItems from "@/app/(routes)/categories/[categoryId]/components/ProductItems";
import { Product } from "@/lib/types";

interface ProductListProps {
  title: string;
  items: Product[];
  productId: string;
}

const ProductList = ({ title, items, productId }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {/* {items.length === 0 && <NoResults />} */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {items.map(
          (item) =>
            item.id !== productId && (
              <div key={item.id}>
                <ProductItems product={item} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ProductList;
