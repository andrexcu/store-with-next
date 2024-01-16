import { Product } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface FeaturedProductsProps {
  products: Product[] | null;
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <section className="bg-zinc-900 relative justify-center flex flex-col gap-4 items-center framed">
      <div className="absolute mb-40 p-1 z-30 border-4 border-slate-400 ">
        <div className="border-2 border-slate-400 p-2">
          <p className="text-3xl text-slate-200">Featured Products</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 ">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 grid grid-cols-2 gap-4">
            {products?.splice(0, 2).map((product, index) => (
              <div
                className={` group relative overflow-hidden h-[300px] 
                ${index === 0 ? "" : ""}`}
                key={product.id}
              >
                <Image
                  src={product.images[0].url}
                  alt="product image"
                  fill
                  sizes="100vh"
                  className={`
           transform group-hover:scale-110
          object-cover w-full h-full transition-all duration-300 ease-in-out bg-black group-hover:opacity-80 
          ${index === 0 ? "rounded-tl-full" : ""}`}
                  placeholder="blur"
                  blurDataURL={product.images[0].url}
                />
                <p className="hidden select-none group-hover:flex items-center justify-center absolute right-0 bottom-0 text-lg w-full h-full p-1 ">
                  <span className="bg-[#EDF1FE]/50 text-zinc-800 max-w-[230px] px-2 border">
                    {product.name}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {products?.splice(0, 3).map((product, index) => (
            <div
              className={`group relative overflow-hidden h-[450px] ${
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
          transform group-hover:scale-110
          object-cover absolute w-full h-full transition-all duration-300 ease-in-out bg-black group-hover:opacity-80
          ${index === 2 ? "rounded-br-full" : ""}`}
                placeholder="blur"
                blurDataURL={product.images[0].url}
              />
              <p className="hidden select-none group-hover:flex items-center justify-center  absolute right-0 bottom-0 text-lg w-full h-full p-1 ">
                <span className="max-w-[230px] px-2 border bg-[#EDF1FE]/50 text-zinc-800">
                  {product.name}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
