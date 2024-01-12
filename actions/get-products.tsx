import { Product } from "@/lib/types";
import qs from "query-string";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export const getProducts = async ({
  categoryId,
  colorId,
  sizeId,
  isFeatured,
}: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: colorId,
      sizeId: sizeId,
      categoryId: categoryId,
      isFeatured: isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export const getProductsForCategory = async (
  categoryId: string
): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: categoryId,
    },
  });

  const res = await fetch(url);

  return res.json();
};
