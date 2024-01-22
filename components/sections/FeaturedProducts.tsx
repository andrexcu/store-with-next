"use client";

import useCart from "@/hooks/use-cart";
import usePreviewModal from "@/hooks/use-preview-modal";
import { Product } from "@/lib/types";
import { useAnimate, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/page.module.scss";

import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import Column from "@/components/ui/Column";
import { motion } from "framer-motion";

interface FeaturedProductsProps {
  products: Product[] | null;
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  let images: Product[] = [];

  const allFeaturedProducts = products
    ?.slice(0, 12)
    .map((product) => images.push(product));

  const previewModal = usePreviewModal();

  const onPreview = (product: Product) => {
    // e.preventDefault();
    previewModal.onOpen(product);
  };
  const cart = useCart();
  const onAddToCart = (data: Product) => {
    cart.addItem(data);
  };

  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  // const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    // requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

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

  return (
    // <div className="bg-[#111014]  min-h-[1024px] w-full ">

    //   <div
    //     className=" relative min-h-[1024px] justify-center flex flex-col gap-4 items-center p-8 max-w-[1920px] mx-auto"

    //   >
    // <div className="absolute mb-40 p-1 z-30 border-4 border-slate-200">
    //   <div className="border-2 border-slate-200 p-1 ">
    //     <p className="text-3xl text-zinc-200">Featured Products</p>
    //   </div>
    // </div>

    //     <div className="w-full flex flex-col gap-4">
    //       <div className="grid grid-cols-3 gap-4">
    //         <div className="col-span-3 grid grid-cols-4 gap-4">

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <main>
      <div className="h-[5vh] relative"></div>
      <div
        ref={gallery}
        className={`h-[175vh] bg-[#111014] relative flex justify-center items-center gap-[2vw] p-[2vw] box-border overflow-hidden`}
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
      <div className="h-[5vh] relative"></div>
    </main>
  );
};

export default FeaturedProducts;
