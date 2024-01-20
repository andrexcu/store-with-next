import getCategories from "@/actions/get-categories";
import Container from "@/components/ui/Container";
import React from "react";
import CategoryFilter from "./components/CategoryFilter";
import { getProducts } from "@/actions/get-products";
import ModalProvider from "@/components/modal/modal-provider";
import getSizes from "@/actions/get-sizes";
import getColors from "@/actions/get-colors";

const CategoriesPage = async () => {
  const categories = await getCategories();

  const productsPromises = categories.map((category) =>
    getProducts({ categoryId: category.id })
  );

  const products = await Promise.all(productsPromises);
  const sizes = await getSizes();
  const colors = await getColors();

  return (
    <div>
      <Container>
        <div className="min-h-dvh overflow-hidden">
          <CategoryFilter
            categories={categories}
            products={products}
            sizes={sizes}
            colors={colors}
          />
        </div>
      </Container>
    </div>
  );
};

export default CategoriesPage;
