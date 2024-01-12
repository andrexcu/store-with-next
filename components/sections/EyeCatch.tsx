import { Category, Product } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface EyeCatchProps {
  category: Category;
  products: Product[];
}

const EyeCatch = ({ category, products }: EyeCatchProps) => {
  return (
    <section className="grid grid-cols-3 border bg-zinc-900 my-10 max-h-[800px] overflow-hidden gap-4">
      <div className="col-span-1">
        <Image
          src={category?.billboard?.imageUrl}
          alt="product image"
          width={500}
          height={500}
          priority
          className="w-full h-full grayscale"
        />
      </div>
      <div className="grid grid-cols-2 col-span-2 border border-red-500">
        {products.map((product) => (
          <div
            className="relative w-[300px] border border-green-500"
            key={product.id}
          >
            <Image
              src={product.images[0].url}
              alt="product image"
              fill
              sizes="100vh"
              priority
              className="grayscale "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EyeCatch;
