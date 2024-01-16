import getCategories from "@/actions/get-categories";
import Container from "@/components/ui/Container";
import React from "react";
import CategoryFilter from "./components/CategoryFilter";
import { getProducts } from "@/actions/get-products";

const CategoriesPage = async () => {
  const categories = await getCategories();

  const productsPromises = categories.map((category) =>
    getProducts({ categoryId: category.id })
  );

  const products = await Promise.all(productsPromises);

  return (
    <div>
      <Container>
        <div className="min-h-dvh overflow-hidden">
          <CategoryFilter categories={categories} products={products} />
        </div>
      </Container>
    </div>
  );
};

export default CategoriesPage;
