"use client";

import { Product } from "@/lib/types";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Column from "@/components/ui/Column";
import { ReactLenis } from "@studio-freight/react-lenis";

interface FeaturedProductsProps {
  products: Product[] | null;
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  let images: Product[] = [];

  if (products) {
    const slicedProducts = products.slice(0, 12);
    images.push(...slicedProducts);
  }
  // console.log(products);

  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

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
    <ReactLenis root>
      <div className="h-[5vh]"></div>
      <div
        ref={gallery}
        className={`h-[175vh] bg-[#111014] flex justify-center items-center gap-[2vw] p-[2vw] box-border overflow-hidden`}
        style={{ position: "relative" }}
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
        <div className="absolute mb-40 p-1 z-30 border-4 border-slate-200">
          <div className="border-2 border-slate-200 p-1 ">
            <p className="text-3xl text-zinc-200">Featured Products</p>
          </div>
        </div>
      </div>
      <div className="h-[5vh]"></div>
    </ReactLenis>
  );
};

export default FeaturedProducts;
