"use client";
import { Category } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
// import { Input } from "@/components/ui/input";
import { Input } from "@nextui-org/react";
import { NextProvider } from "@/Providers/NextProvider";
import { SearchIcon } from "@/components/ui/SearchIcon";
interface TopCategoryProps {
  category: Category | null;
}

const TopCategory = ({ category }: TopCategoryProps) => {
  const [selected, setSelected] = useState(0);

  // console.log(selected);
  return (
    <NextProvider>
      <section className="py-2">
        <div className="relative grid grid-cols-3 gap-x-4 select-none">
          {/* <div className="grid grid-cols-3 border-y-2 p-2 col-span-3">
          <div className="col-span-3">
            <header>Top 3 Categories</header>
          </div>
        </div> */}
          <div className="px">
            <p className="font-light text-7xl text-start">Top</p>
            <p className="font-light text-7xl text-start">Categories</p>
            <p className="font-light text-7xl text-start">This</p>
            <p className="font-light text-7xl text-start">Month.</p>
          </div>
          <div className="flex flex-row relative col-span-2 min-h-[400px] ">
            <div
              className={`flex flex-row justify-end gap-2 w-full h-full  
            "}`}
            >
              {category &&
                Array.from({ length: 3 }, (_, index) => (
                  <div
                    key={index}
                    className={`relative  bg-black/30 h-full rounded-xl overflow-hidden transition-all duration-300 ease-in-out 
                
              ${selected === index ? "w-full" : "w-[150px]"}`}
                    onClick={() => setSelected(index)}
                  >
                    <Image
                      src={category?.billboard?.imageUrl as string}
                      alt="billboard image"
                      fill
                      sizes="1096px, 822px"
                      className="object-cover absolute inset-0 transition-all duration-300 ease-in-out bg-black hover:opacity-80 rounded-xl"
                      placeholder="blur"
                      blurDataURL={category?.billboard?.imageUrl as string}
                    />
                    <p
                      className={`absolute top-4 left-4 text-slate-200/60 ${
                        selected !== index
                          ? "opacity-0 transition-opacity duration-500"
                          : "opacity-100 transition-opacity duration-1000"
                      }`}
                    >
                      {category?.name}
                    </p>
                    <p
                      className={`absolute top-52 left-4 text-slate-200/60 text-xl ${
                        selected !== index
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

          <div className="grid grid-cols-3 border col-span-3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>

          <div className="absolute bottom-20 left-60">
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
      </section>
    </NextProvider>
  );
};

export default TopCategory;
