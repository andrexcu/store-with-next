"use client";
import React, { useRef } from "react";
import { Content } from "./Content";
import { ScrollShadow } from "@nextui-org/react";
import { Category, Product } from "@/lib/types";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface ShadowScrollProps {
  products: Product[];
}

export default function ShadowScroll({ products }: ShadowScrollProps) {
  const autoplay_left = useRef(
    Autoplay({
      delay: 1000,
      stopOnInteraction: false,
    })
  );

  const [emblaRef_left] = useEmblaCarousel(
    { direction: "ltr", loop: true, axis: "y", startIndex: 1 },
    [autoplay_left.current]
  );

  return (
    <ScrollShadow
      hideScrollBar
      className="border border-red-500 mt-2 overflow-y-auto h-full"
    >
      <div className="embla w-[300px] h-full">
        <div className="embla__viewport" ref={emblaRef_left}>
          <div className="embla__container h-[600px]">
            {products.map((product) => (
              <div className=" embla__slide" key={product.id}>
                <div className="embla__slide__inner h-[300px] border-2 border-[#EDF1FE]">
                  <Image
                    src={product.images[0].url}
                    alt="product image"
                    fill
                    sizes="100vh"
                    className="grayscale"
                    placeholder="blur"
                    blurDataURL={product.images[0].url}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollShadow>
  );
}
