"use client";

import { Button } from "@/components/ui/button";
import { Category, Color, Product, Size } from "@/lib/types";
import Image from "next/image";
import React, { useState } from "react";
import ProductItems from "./ProductItems";
import { motion, AnimatePresence } from "framer-motion";
import { Settings2, X } from "lucide-react";

interface CategoryFilterProps {
  categories: Category[] | null;
  products?: Product[][] | null;
  sizes?: Size[] | null;
  colors?: Color[] | null;
  categoryId?: string;
}

const CategoryFilter = ({
  categories,
  products,
  categoryId,
  sizes,
  colors,
}: CategoryFilterProps) => {
  const [selected, setSelected] = useState(`${categoryId ? categoryId : ""}`);
  const [filterOpened, setFilterOpened] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const mappedProducts = products?.flatMap((product) => product);

  // const sizeColorProducts = mappedProducts?.filter(
  //   (m) => m.size.id === selectedSize && m.color.id === selectedColor
  // );
  let filteredProducts;

  if (selectedSize !== "" && selectedColor === "") {
    filteredProducts = mappedProducts?.filter(
      (m) => m.size.id === selectedSize
    );
  } else if (selectedColor !== "" && selectedSize === "") {
    filteredProducts = mappedProducts?.filter(
      (m) => m.color.id === selectedColor
    );
  } else if (selectedSize !== "" && selectedColor !== "") {
    filteredProducts = mappedProducts?.filter(
      (m) => m.size.id === selectedSize && m.color.id === selectedColor
    );
  } else {
    filteredProducts = products?.flatMap((product) => product);
  }

  const sizeColorProducts =
    selectedSize !== "" && selectedColor !== ""
      ? mappedProducts?.filter(
          (m) => m.size.id === selectedSize && m.color.id === selectedColor
        )
      : products?.flatMap((product) => product);

  const selectedCategoryProducts = mappedProducts?.filter(
    (m) => m.category.id === selected
  );
  console.log(selectedCategoryProducts);
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
      <div className=" gap-4 flex overflow-x-auto justify-between items-center">
        <div className="flex gap-4 overflow-x-auto ">
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

        <div className="w-1/3  flex justify-end ">
          <Button
            variant="default"
            className={`min-w-36 focus-none ring-offset-0 focus-visible:ring-0  focus-visible:ring-offset-0 flex gap-2`}
            onClick={() => setFilterOpened((prev) => !prev)}
          >
            Filter
            <Settings2 size={18} />
          </Button>
        </div>
      </div>
      {filterOpened && (
        <motion.div
          animate={{ opacity: 1, y: "0" }}
          initial={{ opacity: 0, y: "-50%" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          layout
          className="grid grid-cols-2 w-full  p-4 bg-[#C4C5BA]"
        >
          <div className="flex items-center gap-4">
            <div className="flex justify-start text-lg text-slate-800">
              COLORS
            </div>
            {colors?.map((color) => (
              <Button
                variant="default"
                key={color.id}
                className={`h-8 w-8 rounded-full ${
                  selectedColor === color.id ? "border-4 border-slate-400" : ""
                }`}
                style={{ backgroundColor: color.value }}
                onClick={() => setSelectedColor(color.id)}
              />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex justify-start text-lg text-slate-800">
              SIZES
            </div>
            {sizes?.map((size) => (
              <Button
                variant={`${selectedSize === size.id ? "default" : "outline"}`}
                key={size.id}
                className="w-full"
                onClick={() => setSelectedSize(size.id)}
              >
                {size.name}
              </Button>
            ))}
            <X
              className="h-6 w-1/2"
              onClick={() => {
                setSelectedSize("");
                setSelectedColor("");
              }}
            />
          </div>
        </motion.div>
      )}
      <motion.div layout>
        <AnimatePresence>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {selected !== ""
              ? selectedCategoryProducts?.map((product) => (
                  <ProductItems key={product.id} product={product} />
                ))
              : filteredProducts?.map((product) => (
                  <ProductItems key={product.id} product={product} />
                  // Return null if none of the conditions are met
                ))}
          </div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CategoryFilter;
