"use client";
import React, { MouseEventHandler, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardContent } from "./card";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Product } from "@/lib/types";
import { Expand, ShoppingCart } from "lucide-react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

interface ProductCarouselProps {
  selectedCategoryProducts: Product[];
  y?: any;
}

const ProductCarousel = ({
  selectedCategoryProducts,
  y,
}: ProductCarouselProps) => {
  const cart = useCart();
  const previewModal = usePreviewModal();

  const onPreview = (e: any, product: Product) => {
    e.preventDefault();

    previewModal.onOpen(product);
  };

  const onAddToCart = (e: any, data: Product) => {
    e.preventDefault();
    cart.addItem(data);
  };

  // const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end start"],
  // });

  // const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div className="col-span-3 " style={{ y }}>
      <Carousel className="col-span-3 min-h-[400px] ">
        <CarouselContent className="">
          {selectedCategoryProducts?.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/3 bg-transparent"
            >
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }} // Adjust the initial y value as needed
                exit={{ opacity: 0 }}
                layout
              >
                <Card className="bg-black rounded-none w-full overflow-hidden border-2 border-[#3f0d0c]">
                  <Link
                    href={`/products/${[product.id]}`}
                    className={`overflow-hidden group relative w-full flex min-h-[400px] items-center justify-center  `}
                  >
                    {/* <Link
                      href={`/products/${[product.id]}`}
                      className="border border-red-500 w-full h-full"
                    > */}
                    <Image
                      src={product.images[1].url}
                      alt="billboard image"
                      fill
                      sizes="100vh"
                      className="
                          transform group-hover:scale-110 object-cover w-full h-full transition-all duration-100 ease-in-out group-hover:opacity-80"
                      placeholder="blur"
                      blurDataURL={product.images[1].url}
                    />
                    {/* </Link> */}
                    <div className=" select-none flex items-center justify-center  absolute right-0 bottom-0 text-lg w-full h-full p-1 ">
                      <p className="max-w-[230px] text-zinc-800 px-2 border bg-[#EDF1FE]/30">
                        {product.name}
                      </p>
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                      <div className="flex gap-x-6 justify-center">
                        <IconButton
                          onClick={(e) => onPreview(e, product)}
                          icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton
                          onClick={(e) => onAddToCart(e, product)}
                          icon={
                            <ShoppingCart size={20} className="text-gray-600" />
                          }
                        />
                      </div>
                    </div>
                  </Link>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
};

export default ProductCarousel;
