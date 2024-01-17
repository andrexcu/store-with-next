"use client";
import { Separator } from "@/components/ui/separator";
import { Category, Product } from "@/lib/types";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useRef } from "react";

import { kaushan } from "@/app/fonts";
import { ScrollShadow } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import Scroller from "@/components/ui/Scroller";

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

  return (
    <>
      <div className="my-12">
        <div className=" col-span-3 relative flex h-12 justify-center items-center w-full">
          <Separator className="bg-zinc-200 absolute" />
          <p
            className={` bg-[#EDF1FE]/70 z-30 p-2 flex items-center gap-x-2  ${kaushan.className}`}
          >
            Photography{" "}
            <Scroller href="categories">
              <ArrowRight className="hover:cursor-pointer hover:translate-x-2 transition duration-300" />
            </Scroller>
          </p>
        </div>
        <p className=" text-medium">Uncompromised Quality in Every Shot</p>
      </div>
      <section className="bg-zinc-900 grid grid-cols-3 h-[600px] sm:gap-4">
        <div className="relative col-span-3 sm:col-span-1 overflow-hidden h-[600px]">
          <Image
            src={category?.billboard?.imageUrl}
            alt="product image"
            fill
            sizes="100vh"
            className="object-cover w-full grayscale"
            placeholder="blur"
            blurDataURL={category?.billboard?.imageUrl}
          />

          <div className="absolute transform m-2 p-2 border bg-[#EDF1FE]/30">
            {"PRODUCTS".split("").map((char, index) => (
              <div key={index} className="font-thin whitespace-nowrap ">
                {char}
              </div>
            ))}
          </div>
          <div className="absolute flex justify-center items-center z-30 w-full h-full">
            <div className=" transform m-2 p-2 border bg-[#EDF1FE]/30">
              {"FROM".split("").map((char, index) => (
                <div
                  key={index}
                  className="select-none font-thin whitespace-nowrap"
                >
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
        <div className="hidden sm:flex col-span-2 lg:col-span-1 h-full select-none overflow-hidden">
          <div className="embla w-[300px] min-w-[300px] ">
            <div className="embla__viewport" ref={emblaRef_left}>
              <div className="embla__container h-[600px]">
                {products.map((product) => (
                  <div className=" embla__slide" key={product.id}>
                    <div className="embla__slide__inner min-w-[300px] h-[300px] border-2 border-[#EDF1FE] overflow-y-hidden overflow-x-hidden">
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
        </div>
        <div className="hidden lg:flex overflow-hidden h-full">
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
        </div>
      </section>
    </>
  );
};

export default EyeCatch;
