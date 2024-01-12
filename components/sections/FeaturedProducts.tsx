import { Product } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface FeaturedProductsProps {
  products: Product[] | null;
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <section className="relative justify-center flex flex-col gap-4 items-center">
      <div className="absolute mb-40 p-1 z-30 border-4 border-slate-200 ">
        <div className="border-2 border-slate-200 p-2">
          <p className="text-3xl text-slate-700">Featured Products</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 ">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 grid grid-cols-2 gap-4">
            {products?.splice(0, 2).map((product, index) => (
              <div
                className={`relative overflow-hidden h-[300px] 
                ${index === 0 ? "" : ""}`}
                key={product.id}
              >
                <Image
                  src={product.images[0].url}
                  alt="product image"
                  fill
                  sizes="100vh"
                  className={`
          transform hover:scale-110
          object-cover absolute w-full h-full transition-all duration-300 ease-in-out bg-black hover:opacity-80 
          ${index === 0 ? "" : ""}`}
                  placeholder="blur"
                  blurDataURL={product.images[0].url}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {products?.splice(0, 3).map((product, index) => (
            <div
              className={`relative overflow-hidden h-[450px] ${
                index === 2 ? "" : ""
              }`}
              key={product.id}
            >
              <Image
                src={product.images[0].url}
                alt="product image"
                fill
                sizes="100vh"
                className={`
          transform hover:scale-110
          object-cover absolute w-full h-full transition-all duration-300 ease-in-out bg-black hover:opacity-80
          ${index === 2 ? "" : ""}`}
                placeholder="blur"
                blurDataURL={product.images[0].url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
