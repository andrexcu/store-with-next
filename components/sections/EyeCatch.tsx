"use client";
import { Category, Product } from "@/lib/types";
import Image from "next/image";
import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Separator } from "@/components/ui/separator";
import { Kaushan_Script } from "next/font/google";

const kaushan = Kaushan_Script({ subsets: ["latin"], weight: "400" });
interface EyeCatchProps {
  category: Category;
  products: Product[];
}

const EyeCatch = ({ category, products }: EyeCatchProps) => {
  const autoplay_left = useRef(
    Autoplay({
      delay: 1000,
      stopOnInteraction: false,
    })
  );
  const autoplay_right = useRef(
    Autoplay({
      delay: 1000,
      stopOnInteraction: false,
    })
  );

  const [emblaRef_left] = useEmblaCarousel(
    { direction: "ltr", loop: true, axis: "y" },
    [autoplay_left.current]
  );
  const [emblaRef_right] = useEmblaCarousel(
    { direction: "ltr", loop: true, axis: "y", startIndex: 3 },
    [autoplay_right.current]
  );
  // const [emblaRef] = useEmblaCarousel(
  //   { loop: true, axis: "y" }
  // );

  return (
    <>
      <div className="my-8">
        <div className=" col-span-3 relative flex h-12 justify-center items-center w-full">
          <Separator className="bg-zinc-200 absolute" />
          <p className={` bg-[#EDF1FE]/70 z-30 p-1 ${kaushan.className}`}>
            Photography
          </p>
        </div>
        <p className=" text-medium">Uncompromised Quality in Every Shot</p>
      </div>
      <section className="bg-zinc-900 grid grid-cols-3 h-[600px] gap-4 overflow-hidden">
        <div className="relative col-span-1 overflow-hidden h-[600px]">
          <Image
            src={category?.billboard?.imageUrl}
            alt="product image"
            fill
            sizes="100vh"
            className="object-cover w-full"
            placeholder="blur"
            blurDataURL={category?.billboard?.imageUrl}
          />

          <div className="z-30 backdrop-grayscale-0 absolute transform m-2 p-2 border bg-[#EDF1FE]/30">
            {"PRODUCTS".split("").map((char, index) => (
              <div key={index} className="font-thin whitespace-nowrap ">
                {char}
              </div>
            ))}
          </div>
          <div className="absolute flex justify-center items-center  z-30 w-full h-full">
            <div className=" transform m-2 p-2 border bg-[#EDF1FE]/30">
              {"FROM".split("").map((char, index) => (
                <div key={index} className="font-thin whitespace-nowrap">
                  {char}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 right-0 transform m-2 p-2 border bg-[#EDF1FE]/30">
            {"EYECATCH".split("").map((char, index) => (
              <div key={index} className="font-thin whitespace-nowrap">
                {char}
              </div>
            ))}
          </div>
        </div>
        <div className="embla w-[300px]">
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
        <div className="embla w-[300px]">
          <div className="embla__viewport" ref={emblaRef_right}>
            <div className="embla__container h-[600px]">
              {products.map((product) => (
                <div className="embla__slide " key={product.id}>
                  <div className="embla__slide__inner h-[300px] border-2 border-[#EDF1FE]">
                    <Image
                      src={product.images[1].url}
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
        {/* {products.map((product) => (
          <div
            className="flex flex-col embla_container relative w-[300px] border border-green-500"
            key={product.id}
          >
              </div>
        ))} */}
      </section>
    </>
  );
};

export default EyeCatch;
