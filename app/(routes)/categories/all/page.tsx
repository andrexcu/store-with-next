import getCategories from "@/actions/get-categories";
import Container from "@/components/ui/Container";
import React from "react";
import CategoryFilter from "../[categoryId]/components/CategoryFilter";
import { getProducts } from "@/actions/get-products";
import ModalProvider from "@/components/modal/modal-provider";
import getSizes from "@/actions/get-sizes";
import getColors from "@/actions/get-colors";
import getCategory from "@/actions/get-category";
import { Product } from "@/lib/types";

interface CategoryPageProps {
  // params: {
  //   categoryId: string;
  // };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const AllCategoryPage = async ({
  // params: { categoryId },
  searchParams: { colorId, sizeId },
}: CategoryPageProps) => {
  const products = await getProducts({
    colorId,
    sizeId,
  });
  const categories = await getCategories();
  const sizes = await getSizes();
  const colors = await getColors();
  return (
    <div>
      <Container>
        <div className="min-h-dvh overflow-hidden">
          <CategoryFilter
            products={products}
            categories={categories}
            colors={colors}
            sizes={sizes}
          />
        </div>
      </Container>
    </div>
  );
};

export default AllCategoryPage;
