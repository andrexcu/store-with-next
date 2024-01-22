"use client";
import { Category, Product } from "@/lib/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NextProvider } from "@/Providers/NextProvider";
import { Separator } from "@/components/ui/separator";
import { kaushan } from "@/app/fonts";
import usePreviewModal from "@/hooks/use-preview-modal";
import ProductCarousel from "../ui/product-carousel";
import ProductSearch from "../ui/product-search";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import {
  AnimatePresence,
  motion,
  useAnimate,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { Gem } from "lucide-react";
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

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      const enterAnimation = async () => {
        animate(scope.current, { opacity: [0, 1] }, { duration: 1 });
      };
      enterAnimation();
    }
  }, [isInView]);

  // const imageCarousel = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: imageCarousel,
  //   offset: ["start end", "end start"],
  // });

  const containerVariants = {
    hidden: { width: "250px" },
    visible: { width: "100%" },
  };

  const dynamicUrl =
    "https://utfs.io/f/f3d9e892-d3b4-4da8-8da2-609c12adf0bf-3ao0ov.jpg";

  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start 0.3", "end start"],
  });

  const { height } = dimension;
  // const y = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const maxScrollY = height - 650; // Adjust this value based on your red border height
  const y = useTransform(scrollYProgress, [0, 1], [0, maxScrollY]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <NextProvider>
      <section className={`p-5 mx-auto max-w-full min-h-[450px] `}>
        <motion.div
          initial={{ y: "10%", opacity: 0 }} // Set the initial position off-screen (10% down) and fully transparent
          animate={{ y: 0, opacity: 1 }} // Animate to the final position (0) and fully opaque
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 20,
            stiffness: 100,
            delay: 0.5,
          }}
          className="absolute top-0 left-0  w-full h-dvh"
          // bg-[#111014]
          // style={{ opacity: scrollOpacity }}
        >
          {/* <div className="hidden lg:flex mt-32 relative mx-auto max-w-[1536px] h-full ">
            <div className="bgmoon z-0 top-0 w-[700px] min-h-[800px]" />
          </div> */}
          <div className="hidden sm:flex mt-32 relative mx-auto max-w-[1536px] h-full ">
            <div className="moon z-0 top-28 left-28 w-[300px] min-h-[325px]" />
          </div>
        </motion.div>
        <div className="p-4 text-center h-full text-3xl mx-auto max-w-7xl ">
          <div
            className={`relative grid grid-cols-11 gap-x-4 select-none bg-cover bg-center`}
          >
            <motion.div
              className={`pt-[184px] relative col-span-3 z-20`}
              initial={{ y: "10%", opacity: 0 }} // Set the initial position off-screen (10% down) and fully transparent
              animate={{ y: 0, opacity: 1 }} // Animate to the final position (0) and fully opaque
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: 0.5,
              }}
            >
              <p className="relative z-20 flex font-thin text-3xl text-zinc-800 sm:text-4xl md:text-5xl lg:text-6xl text-start">
                Discover.
              </p>
              <p className="flex relative z-20 font-thin text-3xl text-zinc-900 sm:text-4xl md:text-5xl lg:text-6xl text-start">
                Style.
                <span className="hidden sm:flex">
                  {/* <Gem size={52} className="text-zinc-800" /> */}
                </span>
              </p>
              <p className="relative z-20 font-thin text-3xl text-zinc-900 sm:text-4xl md:text-5xl lg:text-6xl text-start">
                Beyond.
              </p>
            </motion.div>

            <div className="relative flex flex-row col-span-8 min-h-[580px] z-10">
              <motion.div
                layout
                initial={{ x: "-20%", opacity: 0 }} // Set the initial position off-screen (10% down) and fully transparent
                animate={{ x: 0, opacity: 1 }} // Animate to the final position (0) and fully opaque
                transition={{
                  duration: 0.5,
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                }}
                className={` overflow-hidden relative flex flex-row justify-end w-full h-full rounded-3xl gap-9
            "}`}
              >
                {categories?.slice(0, 3).map((category, index) => (
                  <motion.div
                    key={category.id}
                    layout="position"
                    className={`duration-700 rounded-3xl relative h-full overflow-hidden z-0
                     ${
                       selected === category.id
                         ? "w-full"
                         : "w-[250px] hidden sm:flex"
                     }
                    
                   `}
                    onClick={() => {
                      setSelected(category.id);
                    }}
                    animate={selected === category.id ? "visible" : "hidden"}
                    transition={{ duration: 0.7 }}
                    onHoverStart={(e) => setSelected(category.id)}
                    // onHoverEnd={(e) => setSelected(categories[0].id)}
                  >
                    <Image
                      src={category?.billboard?.imageUrl}
                      alt="billboard image"
                      fill
                      sizes="100vw, 100vh"
                      className={`rounded-lg h-[100%] object-cover absolute transition-opacity duration-300 ease-in-out lg:hover:opacity-90`}
                      placeholder="blur"
                      blurDataURL={category?.billboard?.imageUrl}
                    />

                    <p
                      className={`hidden sm:flex absolute top-4 left-4 text-zinc-900 ${
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
                      className={`hidden sm:flex absolute top-52 left-4 text-zinc-900 text-xl ${
                        selected !== category.id
                          ? "opacity-0 transition-opacity duration-500"
                          : "opacity-100 transition-opacity duration-1000"
                      }`}
                    >
                      {category?.billboard.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ y: "10%", opacity: 0 }} // Set the initial position off-screen (10% down) and fully transparent
              animate={{ y: 0, opacity: 1 }} // Animate to the final position (0) and fully opaque
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: 0.5,
              }}
              className="flex absolute bottom-0 left-[-20px] z-0"
            >
              <div className="relative min-h-[340px] w-[240px] ">
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
            </motion.div>

            <motion.div
              initial={{ y: "10%", opacity: 0 }} // Set the initial position off-screen (10% down) and fully transparent
              animate={{ y: 0, opacity: 1 }} // Animate to the final position (0) and fully opaque
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: 0.5,
              }}
              className="absolute z-30 bottom-12 lg:left-24"
            >
              <ProductSearch />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="mb-52 mx-auto max-w-[1920px] ">
        <div className="text-center h-full text-3xl mx-auto max-w-7xl ">
          <div className="grid grid-cols-3 gap-4 mt-24 ">
            <motion.div
              initial={{ y: "10%", opacity: 0 }} // Set the initial position off-screen (10% down) and fully transparent
              animate={{ y: 0, opacity: 1 }} // Animate to the final position (0) and fully opaque
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 20,
                stiffness: 100,
              }}
              className="mb-20 col-span-3 relative flex flex-col gap-8 h-12 justify-center items-center w-full "
            >
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
              <p className="text-zinc-800 font-bold text-4xl">
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
                  <Tab
                    key={category.id}
                    title={category.name}
                    className="text-lg"
                  />
                ))}
              </Tabs>
            </motion.div>

            <div className="col-span-3  ">
              {selectedCategoryProducts ? (
                <ProductCarousel
                  selectedCategoryProducts={selectedCategoryProducts}
                  // y={y}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    </NextProvider>
  );
};

export default TopCategory;
