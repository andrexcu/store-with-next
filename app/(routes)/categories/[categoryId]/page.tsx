import getCategories from "@/actions/get-categories";
import Container from "@/components/ui/Container";
import React from "react";
import CategoryFilter from "./components/CategoryFilter";
import { getProducts } from "@/actions/get-products";
import ModalProvider from "@/components/modal/modal-provider";
import getSizes from "@/actions/get-sizes";
import getColors from "@/actions/get-colors";
import getCategory from "@/actions/get-category";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage = async ({
  params: { categoryId },
  searchParams: { colorId, sizeId },
}: CategoryPageProps) => {
  const products = await getProducts({
    categoryId,
    colorId,
    sizeId,
  });
  const categories = await getCategories();

  //   const productsPromises = categories.map((category) =>
  //     getProducts({ categoryId: category.id })
  //   );

  //   const products = await Promise.all(productsPromises);
  const sizes = await getSizes();
  const colors = await getColors();

  const category = await getCategory(categoryId);

  return (
    <div>
      <Container>
        <div className="min-h-dvh overflow-hidden">
          <CategoryFilter
            categories={categories}
            category={category}
            products={products}
            sizes={sizes}
            colors={colors}
          />
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
