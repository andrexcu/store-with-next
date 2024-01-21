import Image from "next/image";
import React from "react";
import styles from "@/app/page.module.scss";
import { useTransform, useScroll, motion } from "framer-motion";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { Product } from "@/lib/types";
import Link from "next/link";
import useScrollStore from "@/hooks/useScroll";

interface ColumnProps {
  images: Product[];
  y: any;
}

const Column = ({ images, y }: ColumnProps) => {
  const { scrollToTop } = useScrollStore();

  const handleScroll = (e: any) => {
    e.preventDefault();
    scrollToTop();
  };
  return (
    <motion.div
      className={`column relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw]`}
      style={{ y }}
    >
      {images.map((src, i) => {
        return (
          <div
            onClick={handleScroll}
            className="group h-full w-full relative rounded-[2vw] overflow-hidden flex justify-center items-center"
          >
            <Link key={i} href={`/products/${src.id}`} scroll={false}>
              <Image
                src={src.images[0].url}
                alt="product image"
                fill
                sizes="100vw, 100vh"
                className={`object-cover transition-opacity duration-300 hover:opacity-80 `}
                placeholder="blur"
                blurDataURL={src.images[0].url}
              />
            </Link>
          </div>

          // className={`transform object-cover w-full h-full transition-all duration-300
          //         ease-in-out hover:opacity-80 `}
          //  <p className="opacity-0 transition-opacity duration-1000 ease-in-out flex select-none group-hover:opacity-100  items-center justify-center  absolute right-0 bottom-0 text-lg w-full h-full p-1 ">
          //     <span className="bg-[#EDF1FE]/50 text-zinc-800 max-w-[230px] px-2 border">
          //       {product.name}
          //     </span>
          //   </p>

          //  <div className="opacity-0 group-hover:opacity-100 transition w-full px-6 ">
          //     <div className="flex gap-x-6 justify-center">
          //       <IconButton
          //         onClick={() => onPreview(product)}
          //         icon={<Expand size={20} className="text-gray-600" />}
          //       />
          //       <IconButton
          //         onClick={() => onAddToCart(product)}
          //         icon={<ShoppingCart size={20} className="text-gray-600" />}
          //       />
          //     </div>
          //   </div>

          // className={`transform group-hover:scale-110 object-cover w-full h-full transition-all duration-300
          //             ease-in-out group-hover:opacity-80 `}
          //  ${index === 0 ? "rounded-tl-full" : ""}
        );
      })}
    </motion.div>
  );
};

export default Column;
