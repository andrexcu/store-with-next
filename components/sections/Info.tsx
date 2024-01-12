import { Billboard } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { LucideInfinity } from "lucide-react";

interface InfoProps {
  billboard: Billboard | null;
}

const Info = ({ billboard }: InfoProps) => {
  //   console.log(billboard);
  return (
    <section className="relative grid grid-cols-2 h-[400px] my-24">
      <div className="bg-zinc-200 flex flex-col justify-center items-center col-span-2 sm:col-span-1">
        <div className="w-[400px] h-[200px] flex flex-col gap-2 text-start">
          <p className="text-2xl text-slate-950 flex items-center gap-2">
            Timeless <LucideInfinity /> Elegance for Your Space
          </p>
          <p className="text-lg font-light">
            Discover your style as AITOUKART Products lets you freely choose
            your preferred colors and sizes.
          </p>
          <Button variant="default" className="w-1/3 rounded-none">
            SHOP NOW
          </Button>
        </div>
      </div>
      <div className="hidden sm:flex relative">
        <Image
          src={billboard?.imageUrl as string}
          alt="product image"
          width={500}
          height={500}
          priority
          className="w-full h-full "
        />
      </div>
    </section>
  );
};

export default Info;
