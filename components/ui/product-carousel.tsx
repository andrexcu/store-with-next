import React from "react";
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

interface ProductCarouselProps {
  selectedCategoryProducts: Product[];
}

const ProductCarousel = ({
  selectedCategoryProducts,
}: ProductCarouselProps) => {
  const previewModal = usePreviewModal();

  const onPreview = (product: Product) => {
    // e.preventDefault();
    previewModal.onOpen(product);
  };

  return (
    <Carousel className="col-span-3 min-h-[400px] ">
      <CarouselContent className="">
        {selectedCategoryProducts?.reverse().map((product) => (
          <CarouselItem
            key={product.id}
            className="md:basis-1/2 lg:basis-1/3 bg-transparent"
          >
            <Card className="bg-black rounded-none w-full overflow-hidden">
              <CardContent
                className={`overflow-hidden group relative w-full flex min-h-[400px] items-center justify-center  `}
              >
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

                <p className=" select-none flex items-center justify-center  absolute right-0 bottom-0 text-lg w-full h-full p-1 ">
                  <span className="max-w-[230px] text-zinc-800 px-2 border bg-[#EDF1FE]/30">
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
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductCarousel;
