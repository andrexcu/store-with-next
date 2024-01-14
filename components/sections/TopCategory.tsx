"use client";
import { Category, Product } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
// import { Input } from "@/components/ui/input";
import { NextProvider } from "@/Providers/NextProvider";
import { SearchIcon } from "@/components/ui/SearchIcon";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Input } from "@nextui-org/react";
import { Gem } from "lucide-react";
// import { getProductsForCategory } from "@/actions/get-products";

interface TopCategoryProps {
  categories: Category[] | null;
  products?: Product[][] | null;
}

const TopCategory = ({ categories, products }: TopCategoryProps) => {
  const [selected, setSelected] = useState(
    categories && categories.length > 0 ? categories[0].id : ""
  );
  const category = categories?.map((category) => category);

  const currentCategory = category?.filter((c) => c.id === selected);

  // console.log(category);
  // console.log(categories);
  // console.log(products)
  const mappedProducts = products?.flatMap((product) => product);
  const selectedCategory = mappedProducts?.filter(
    (m) => m.category.id === selected
  );

  // const [selectedUrl, setSelectedUrl] = useState(
  //   categories && categories.length > 0 && categories[0].billboard.imageUrl
  // );

  // console.log(selectedUrl);

  return (
    <NextProvider>
      <section className="py-2">
        <div
          className={`relative grid grid-cols-3 gap-x-4 select-none  bg-cover bg-center`}
          style={
            {
              // backgroundColor: "red",
              // backgroundImage: `url("${selectedUrl}")`,
            }
          }
        >
          <div className="px">
            <p className="flex font-thin text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-start">
              <Gem size={38} /> Top
            </p>
            <p className="font-thin text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-start">
              Categories
            </p>
            <p className="font-thin text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-start">
              This
            </p>
            <p className="font-thin text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-start">
              Month.
            </p>
          </div>
          <div className="flex flex-row relative col-span-2 min-h-[400px] ">
            <div
              className={`flex flex-row justify-end gap-2 w-full h-full  
            "}`}
            >
              {categories?.slice(0, 3).map((category, index) => (
                <div
                  key={category.id}
                  className={`border border-black-500/0 relative  bg-black/30 w-[150px] h-full rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
                
              ${selected === category.id ? "w-full" : "w-[150px]"}`}
                  onClick={() => {
                    setSelected(category.id);
                    // setSelectedUrl(category.billboard.imageUrl);
                  }}
                >
                  <Image
                    src={category?.billboard?.imageUrl}
                    alt="billboard image"
                    fill
                    sizes="1096px, 822px"
                    className="object-cover absolute inset-0 transition-all duration-300 ease-in-out bg-black hover:opacity-80 rounded-xl"
                    placeholder="blur"
                    blurDataURL={category?.billboard?.imageUrl}
                  />
                  <p
                    className={`absolute top-4 left-4 text-slate-200/60 ${
                      selected !== category.id
                        ? "opacity-0 transition-opacity duration-500"
                        : "opacity-100 transition-opacity duration-1000"
                    }`}
                  >
                    {category?.name}
                  </p>
                  <p
                    className={`absolute top-52 left-4 text-slate-200/60 text-xl ${
                      selected !== category.id
                        ? "opacity-0 transition-opacity duration-500"
                        : "opacity-100 transition-opacity duration-1000"
                    }`}
                  >
                    {category?.billboard.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-20 left-56">
            <Input
              label="Discover"
              radius="lg"
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              placeholder="Search for products"
              startContent={
                <SearchIcon className="text-black/50 mb-[3px] dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0 w-4 h-4" />
              }
              className="relative w-72"
              size="lg"
              maxLength={50}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 my-8">
          <div className="col-span-3 relative flex h-12 justify-center items-center w-full">
            <Separator className="bg-zinc-200 absolute" />
            <p className="font-thin bg-[#EDF1FE]/70 z-30 p-1">
              Special Products for{" "}
              {currentCategory?.map((category) => category.name)}
            </p>
          </div>
          <Carousel className="col-span-3 h-[400px]">
            <CarouselContent>
              {selectedCategory?.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card>
                    <CardContent className="relative flex h-[350px] items-center justify-center overflow-hidden border-4 border-slate-950 p-12">
                      <div className="absolute top-0 w-full h-full border-2 border-slate-200 overflow-hidden p-2">
                        <Image
                          src={product.images[0].url}
                          alt="billboard image"
                          fill
                          sizes="100vh"
                          className="
                          transform hover:scale-110
                          object-cover absolute w- h-full transition-all duration-300 ease-in-out bg-black"
                          placeholder="blur"
                          blurDataURL={product.images[0].url}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </NextProvider>
  );
};

export default TopCategory;
