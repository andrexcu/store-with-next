"use client";
import { Product } from "@/lib/types";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import React, { useEffect } from "react";
import Client from "@/components/ui/Client";
import { MotionDiv, MotionLi, MotionUl } from "@/components/ui/motiondiv";
import { motion, useAnimate, useInView } from "framer-motion";
import usePreviewModal from "@/hooks/use-preview-modal";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";

interface FeaturedProductsProps {
  products: Product[] | null;
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      const enterAnimation = async () => {
        animate(scope.current, { opacity: [0, 1] }, { duration: 1.5 });
      };
      enterAnimation();
    }
  }, [isInView]);

  const previewModal = usePreviewModal();

  const onPreview = (product: Product) => {
    // e.preventDefault();
    previewModal.onOpen(product);
  };
  return (
    <div
      className="relative justify-center flex flex-col gap-4 items-center max-w-7xl mx-auto bg-[#18181b]"
      // style={{ opacity: scrollOpacity }}
    >
      <div className="absolute mb-40 p-1 z-30 border-4 border-slate-400 backdrop-blur-md">
        <div className="border-2 border-slate-400 p-2 backdrop-blur-md">
          <p className="text-3xl text-zinc-800">Featured Products</p>
        </div>
      </div>
      {/* bg-[#ECF3F9] */}
      <div className="w-full flex flex-col gap-4 framed ">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 grid grid-cols-2 gap-4">
            {products?.slice(0, 2).map((product) => (
              <div
                className={`bg-black group relative overflow-hidden h-[300px] 
               
                `}
                //  ${index === 0 ? "rounded-tl-full" : ""}
                key={product.id}
              >
                <Image
                  src={product.images[0].url}
                  alt="product image"
                  fill
                  sizes="100vh"
                  className={`
           transform group-hover:scale-110
          object-cover w-full h-full transition-all duration-300 ease-in-out group-hover:opacity-80 
          `}
                  placeholder="blur"
                  // ${index === 0 ? "rounded-tl-full" : ""}
                  blurDataURL={product.images[0].url}
                />
                <p className="opacity-0 transition-opacity duration-1000 ease-in-out flex select-none group-hover:opacity-100  items-center justify-center  absolute right-0 bottom-0 text-lg w-full h-full p-1 ">
                  <span className="bg-[#EDF1FE]/50 text-zinc-800 max-w-[230px] px-2 border">
                    {product.name}
                  </span>
                </p>

                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                  <div className="flex gap-x-6 justify-center">
                    <IconButton
                      onClick={() => onPreview(product)}
                      icon={<Expand size={20} className="text-gray-600" />}
                    />
                    <IconButton
                      // onClick={onAddToCart}
                      icon={
                        <ShoppingCart size={20} className="text-gray-600" />
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          {products?.slice(2, 5).map((product, index) => (
            <div
              key={product.id}
              className={`bg-black group relative overflow-hidden h-[450px] `}
            >
              <Image
                src={product.images[0].url}
                alt="product image"
                fill
                sizes="100vh"
                className={`
          transform group-hover:scale-110
          object-cover absolute w-full h-full transition-all duration-300 ease-in-out bg-black group-hover:opacity-80
          `}
                placeholder="blur"
                blurDataURL={product.images[0].url}
              />
              <p className="opacity-0 transition-opacity duration-1000 ease-in-out flex select-none group-hover:opacity-100  items-center justify-center  absolute right-0 bottom-0 text-lg w-full h-full p-1 ">
                <span className="max-w-[230px] px-2 border bg-[#EDF1FE]/50 text-zinc-800">
                  {product.name}
                </span>
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                <div className="flex gap-x-6 justify-center">
                  <IconButton
                    onClick={() => onPreview(product)}
                    icon={<Expand size={20} className="text-gray-600" />}
                  />
                  <IconButton
                    // onClick={onAddToCart}
                    icon={<ShoppingCart size={20} className="text-gray-600" />}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
