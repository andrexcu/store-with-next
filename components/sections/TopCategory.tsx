"use client";
import { Category, Product } from "@/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";
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
import { Expand, Gem, ShoppingCart } from "lucide-react";
// import { getProductsForCategory } from "@/actions/get-products";
import { kaushan } from "@/app/fonts";
import { motion } from "framer-motion";
import IconButton from "../ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";

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

  const selectedCategoryProducts = mappedProducts?.filter(
    (m) => m.category.id === selected
  );

  // const [selectedUrl, setSelectedUrl] = useState(
  //   categories && categories.length > 0 && categories[0].billboard.imageUrl
  // );
  // selectedCategoryProducts?.map((product) => console.log(product.name));

  // console.log(currentCategory);

  const [scrollOpacity, setScrollOpacity] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position and adjust the opacity
      const scrollPosition = window.scrollY;
      const maxScroll = 200; // Adjust this value based on when you want the fading effect to complete
      const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);

      setScrollOpacity(opacity);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const previewModal = usePreviewModal();

  const onPreview = (product: Product) => {
    // e.preventDefault();
    previewModal.onOpen(product);
  };
  const dynamicUrl =
    "https://utfs.io/f/f3d9e892-d3b4-4da8-8da2-609c12adf0bf-3ao0ov.jpg";
  return (
    <NextProvider>
      <section className={`p-5 mx-auto max-w-full min-h-[450px] `}>
        <div
          className="absolute top-0 left-0  w-full h-dvh"
          // bg-[#111014]
          // style={{ opacity: scrollOpacity }}
        >
          {/* <div className="hidden lg:flex mt-32 relative mx-auto max-w-[1536px] h-full ">
            <div className="bgmoon z-0 top-0 w-[700px] min-h-[800px]" />
          </div> */}
        </div>
        <div className="p-4 text-center h-full text-3xl mx-auto max-w-7xl">
          <div
            className={`relative grid grid-cols-3 gap-x-4 select-none bg-cover bg-center`}
          >
            <div className={`relative`}>
              <div className="relative z-10 flex font-thin text-3xl text-slate-800 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-start">
                <Gem size={38} />
                Top
              </div>
              <p className="relative z-10 font-thin text-3xl text-slate-800 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-start">
                Categories
              </p>
              <p className="relative z-10 font-thin text-3xl text-slate-800 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-start">
                This
              </p>
              <p className="relative z-10 font-thin text-3xl text-slate-800 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-start">
                Month
              </p>

              {/* <div className="moon hidden sm:flex lg:hidden   top-5 w-[225px] min-h-[275px]" /> */}
            </div>

            <div className="flex flex-row relative col-span-2 min-h-[400px] ">
              <div
                className={`flex flex-row justify-end gap-2 w-full h-full  
            "}`}
              >
                {categories?.slice(0, 3).map((category, index) => (
                  <div
                    key={category.id}
                    className={` relative w-[150px] h-full rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
                
              ${selected === category.id ? "w-full" : "w-[150px]"}`}
                    onClick={() => {
                      setSelected(category.id);
                    }}
                  >
                    <Image
                      src={category?.billboard?.imageUrl}
                      alt="billboard image"
                      fill
                      sizes="100vw, 100vh"
                      className=" rounded-xl object-cover absolute transition-opacity duration-300 ease-in-out hover:opacity-90"
                      placeholder="blur"
                      blurDataURL={category?.billboard?.imageUrl}
                    />

                    <p
                      className={`absolute top-4 left-4 text-slate-200/80 ${
                        kaushan.className
                      } ${
                        selected !== category.id
                          ? "opacity-0 transition-opacity duration-500"
                          : "opacity-100 transition-opacity duration-1000"
                      }`}
                    >
                      {category?.name}
                    </p>
                    <p
                      className={`absolute top-52 left-4 text-slate-200/80 text-xl ${
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
            <div className="hidden sm:flex absolute bottom-2 left-[-20px]">
              <div className="relative min-h-[340px] w-[240px] "></div>
              <Image
                src={dynamicUrl}
                alt="product image"
                fill
                sizes="100vh"
                className="object-cover w-full opacity-80 h-full"
                placeholder="blur"
                blurDataURL={dynamicUrl}
              />
            </div>
            <div className="absolute z-30 bottom-20 left-52">
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
        </div>
      </section>
      <section className="mb-20 mx-auto max-w-[1920px] min-h-[500px] ">
        <div className="text-center h-full text-3xl mx-auto max-w-7xl ">
          <div className="grid grid-cols-3 gap-4 my-8 ">
            <div className="mb-8  col-span-3 relative flex h-12 justify-center items-center w-full  ">
              <Separator className="bg-zinc-700/80 absolute " />
              {categories?.slice(0, 3)?.map((category) => (
                <p
                  key={category.id}
                  // bg-[#EDF1FE]/70
                  // bg-[#111014]
                  className={`absolute bg-[#EDF1FE]/70 backdrop-blur-sm z-30 p-2 min-h-[50px] ${
                    selected !== category.id
                      ? "opacity-0 transition-opacity duration-300"
                      : "opacity-100 transition-opacity duration-300"
                  }`}
                >
                  <span className="text-2xl font-thin text-zinc-950 ">
                    Products for {category.name}
                  </span>
                </p>
              ))}
            </div>
            <Carousel className="col-span-3 min-h-[400px] ">
              <CarouselContent className=" ">
                {selectedCategoryProducts?.reverse().map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="md:basis-1/2 lg:basis-1/3 "
                  >
                    <Card>
                      <CardContent
                        className={` group border-slate-950 bg-black relative w-full flex min-h-[350px] items-center justify-center overflow-hidden border-2 `}
                      >
                        <Image
                          src={product.images[0].url}
                          alt="billboard image"
                          fill
                          sizes="100vh"
                          className="
                          transform group-hover:scale-110 object-cover w-full h-full transition-all duration-100 ease-in-out group-hover:opacity-80"
                          placeholder="blur"
                          blurDataURL={product.images[0].url}
                        />

                        <p className="select-none flex items-center justify-center  absolute right-0 bottom-0 text-lg w-full h-full p-1 ">
                          <span className="max-w-[230px] text-zinc-800 px-2 border bg-[#EDF1FE]/50">
                            {product.name}
                          </span>
                        </p>

                        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                          <div className="flex gap-x-6 justify-center">
                            <IconButton
                              onClick={() => onPreview(product)}
                              icon={
                                <Expand size={20} className="text-gray-600" />
                              }
                            />
                            <IconButton
                              // onClick={onAddToCart}
                              icon={
                                <ShoppingCart
                                  size={20}
                                  className="text-gray-600"
                                />
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
          </div>
        </div>
      </section>
    </NextProvider>
  );
};

export default TopCategory;
