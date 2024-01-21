"use client";
import { Category, Product } from "@/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NextProvider } from "@/Providers/NextProvider";
import { Separator } from "@/components/ui/separator";
import { kaushan } from "@/app/fonts";
import usePreviewModal from "@/hooks/use-preview-modal";
import ProductCarousel from "../ui/product-carousel";
import ProductSearch from "../ui/product-search";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

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
        <div className="p-4 text-center h-full text-3xl mx-auto max-w-7xl ">
          <div
            className={`relative grid grid-cols-4 gap-x-4 select-none bg-cover bg-center`}
          >
            <div className={`pt-20 relative`}>
              <p className="relative z-20 flex font-thin text-3xl text-zinc-800 sm:text-4xl md:text-5xl lg:text-6xl text-start">
                {/* <Gem size={38} /> */}
                Discover.
              </p>
              <p className="relative z-20 font-thin text-3xl text-zinc-900 sm:text-4xl md:text-5xl lg:text-6xl text-start">
                Style.
              </p>
              <p className="relative z-20 font-thin text-3xl text-zinc-900 sm:text-4xl md:text-5xl lg:text-6xl text-start">
                Beyond.
              </p>
              {/* <p className="relative z-20 font-thin text-3xl text-slate-800 sm:text-4xl md:text-5xl lg:text-6xl text-start">
                Month
              </p> */}

              {/* <div className="moon hidden sm:flex lg:hidden   top-5 w-[225px] min-h-[275px]" /> */}
            </div>

            <div className="overflow-hidden relative flex flex-row col-span-3 min-h-[480px] z-10 ">
              <div
                className={`overflow-hidden relative flex flex-row justify-end gap-4 w-full h-full  
            "}`}
              >
                {categories?.slice(0, 3).map((category, index) => (
                  <div
                    key={category.id}
                    className={` rounded-xl relative h-full overflow-hidden transition-all duration-300 ease-in-out z-0
              ${
                selected === category.id
                  ? "w-full"
                  : "hidden sm:flex w-[150px] transition-all duration-300 ease-in-out"
              }`}
                    onClick={() => {
                      setSelected(category.id);
                    }}
                  >
                    <Image
                      src={category?.billboard?.imageUrl}
                      alt="billboard image"
                      fill
                      sizes="100vw, 100vh"
                      className={`rounded-lg h-[100%] object-cover absolute transition-opacity duration-300 ease-in-out lg:hover:opacity-90
                      `}
                      placeholder="blur"
                      blurDataURL={category?.billboard?.imageUrl}
                    />

                    <p
                      className={`hidden sm:flex absolute top-4 left-4 text-slate-200/80 ${
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
                      className={`hidden sm:flex absolute top-52 left-4 text-slate-200/80 text-xl ${
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
            <div className="flex absolute bottom-0 left-[-20px] z-0">
              <div className="relative min-h-[340px] w-[240px] "></div>
              <Image
                src={dynamicUrl}
                alt="product image"
                fill
                sizes="100vh"
                className="object-cover w-full h-full"
                placeholder="blur"
                blurDataURL={dynamicUrl}
              />
            </div>
            <div className="absolute z-30 bottom-8 lg:left-20">
              <ProductSearch />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-4 mb-28 mx-auto max-w-[1920px] min-h-[500px] ">
        <div className="text-center h-full text-3xl mx-auto max-w-7xl ">
          <div className="grid grid-cols-3 gap-4 my-8 ">
            <div className="mb-8 col-span-3 relative flex flex-col h-12 justify-center items-center w-full  ">
              {/* <Separator className="bg-zinc-700/80 absolute " /> */}
              {/*{categories?.slice(0, 3)?.map((category) => (
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
              ))} */}
              <p className="text-zinc-800 text-2xl">
                Top Categories with 1000+ Sold Products
              </p>
              <Tabs
                aria-label="Top Categories"
                size="lg"
                key="underlined"
                variant="underlined"
                selectedKey={selected}
                onSelectionChange={(key: any) => setSelected(key)}
              >
                {categories?.slice(0, 3)?.map((category) => (
                  <Tab key={category.id} title={category.name} />
                ))}
              </Tabs>
            </div>
            {selectedCategoryProducts ? (
              <ProductCarousel
                selectedCategoryProducts={selectedCategoryProducts}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </NextProvider>
  );
};

export default TopCategory;
