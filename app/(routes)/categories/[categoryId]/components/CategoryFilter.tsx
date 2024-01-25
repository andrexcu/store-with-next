"use client";

import { Button } from "@/components/ui/button";
import { Category, Color, Product, Size } from "@/lib/types";
import Image from "next/image";
import React, { useState } from "react";
import ProductItems from "./ProductItems";
import { motion, AnimatePresence } from "framer-motion";
import { Settings2, X } from "lucide-react";
import Link from "next/link";
import FilterColor from "./FilterColor";
import FilterSize from "./FilterSize";
import NoResults from "./NoResults";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryFilterProps {
  categories?: Category[];
  products?: Product[] | null;
  sizes?: Size[] | null;
  colors?: Color[] | null;
  category?: Category | null;
}

const CategoryFilter = ({
  categories,
  products,
  sizes,
  colors,
  category,
}: CategoryFilterProps) => {
  const [selected, setSelected] = useState(`${category ? category.id : ""}`);
  const [filterOpened, setFilterOpened] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const selectedCategory = categories?.filter((c) => c.id === selected);

  let filteredProducts;

  if (selectedSize !== "" && selectedColor === "") {
    filteredProducts = products?.filter((m) => m.size.id === selectedSize);
  } else if (selectedColor !== "" && selectedSize === "") {
    filteredProducts = products?.filter((m) => m.color.id === selectedColor);
  } else if (selectedSize !== "" && selectedColor !== "") {
    filteredProducts = products?.filter(
      (m) => m.size.id === selectedSize && m.color.id === selectedColor
    );
  } else {
    filteredProducts = products?.map((product) => product);
  }

  return (
    <div className="relative w-full h-full flex flex-col gap-8 py-8">
      {selected !== "" ? (
        selectedCategory &&
        selectedCategory.map((category) => (
          <h1 key={category?.id} className="text-3xl font-bold">
            {category.name}
          </h1>
        ))
      ) : (
        <h1 key={category?.id} className="text-3xl font-bold">
          All Categories
        </h1>
      )}
      <div className=" gap-4 flex flex-col lg:flex-row justify-between items-center">
        <Link href={`/categories/all`}>
          <Button
            variant={`${selected === "" ? "default" : "outline"}`}
            className={`min-w-24 focus-none ring-offset-0 focus-visible:ring-0  focus-visible:ring-offset-0`}
            onClick={() => setSelected("")}
          >
            ALL
          </Button>
        </Link>
        <div className="flex flex-wrap text-lg justify-center gap-4  items-center">
          {categories?.map((category) => (
            <Link
              key={category?.id}
              href={`/categories/${category.id}`}
              className=""
            >
              <Button
                variant={`${category.id === selected ? "default" : "outline"}`}
                className={`min-w-24 focus-none ring-offset-0 focus-visible:ring-0  focus-visible:ring-offset-0`}
                onClick={() => setSelected(category.id)}
              >
                {category.name}
              </Button>
            </Link>
          ))}
        </div>

        <div className="min-w-0  flex items-center justify-end  ">
          <Button
            variant="default"
            className={`flex items-center min-w-36 focus-none ring-offset-0 focus-visible:ring-0  focus-visible:ring-offset-0 gap-2`}
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
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full  p-4 bg-[#C4C5BA]"
        >
          <FilterColor
            valueKey="colorId"
            name="Colors"
            colors={colors as Color[]}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />

          <FilterSize
            valueKey="sizeId"
            name="Sizes"
            sizes={sizes as Size[]}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </motion.div>
      )}
      {products && products.length > 0 ? (
        <motion.div layout>
          <AnimatePresence>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {products?.map((product) => (
                <ProductItems key={product.id} product={product} />
              ))}
            </div>
          </AnimatePresence>
        </motion.div>
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default CategoryFilter;
