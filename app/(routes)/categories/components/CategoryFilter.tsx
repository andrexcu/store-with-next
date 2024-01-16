"use client";

import { Button } from "@/components/ui/button";
import { Category, Product } from "@/lib/types";
import Image from "next/image";
import React, { useState } from "react";
import ProductItems from "./ProductItems";
import { motion, AnimatePresence } from "framer-motion";

interface CategoryFilterProps {
  categories: Category[] | null;
  products?: Product[][] | null;
}

const CategoryFilter = ({ categories, products }: CategoryFilterProps) => {
  const [selected, setSelected] = useState("");

  const mappedProducts = products?.flatMap((product) => product);

  const selectedCategoryProducts = mappedProducts?.filter(
    (m) => m.category.id === selected
  );

  const selectedCategory = categories?.filter((c) => c.id === selected);
  return (
    <div className="relative w-full h-full flex flex-col gap-8 py-8">
      {selected ? (
        selectedCategory?.map((category) => (
          <h1 key={category.id} className="text-3xl font-bold">
            {category.name}
          </h1>
        ))
      ) : (
        <h1 className="text-3xl font-bold">All Categories</h1>
      )}
      <div className="gap-4 flex overflow-x-auto">
        <Button
          variant={`${selected === "" ? "default" : "outline"}`}
          className={`min-w-36 focus-none ring-offset-0 focus-visible:ring-0  focus-visible:ring-offset-0`}
          onClick={() => setSelected("")}
        >
          ALL
        </Button>
        {categories?.map((category) => (
          <div className="flex items-center" key={category.id}>
            <Button
              variant={`${category.id === selected ? "default" : "outline"}`}
              className={`min-w-36 focus-none ring-offset-0 focus-visible:ring-0  focus-visible:ring-offset-0`}
              onClick={() => setSelected(category.id)}
            >
              {category.name}
            </Button>
          </div>
        ))}
      </div>
      <motion.div layout>
        <AnimatePresence>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {selected !== ""
              ? selectedCategoryProducts?.map((product) => (
                  <ProductItems key={product.id} product={product} />
                ))
              : mappedProducts?.map((product) => (
                  <ProductItems key={product.id} product={product} />
                ))}
          </div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CategoryFilter;
