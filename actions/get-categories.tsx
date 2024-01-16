import { Category } from "@/lib/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL, {
    next: {
      revalidate: 1,
    },
  });

  return res.json();
};

export default getCategories;
