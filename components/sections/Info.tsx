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
    <section className="relative grid grid-cols-2 h-[400px] mt-24">
      <div className="bg-zinc-200 flex flex-col justify-center items-center col-span-2 lg:col-span-1">
        <div className="w-[420px] h-full flex flex-col justify-center gap-2 text-start  min-w-0">
          <p className="text-2xl text-slate-950 flex flex-col lg:flex-row justify-start items-center gap-2">
            <span className="flex justify-start items-center gap-2">
              Timeless <LucideInfinity />
            </span>
            <span>Elegance for Your Space</span>
          </p>
          <div className="text-center lg:text-start text-lg font-light break-words ">
            Discover your style as AITOUKART Products lets you freely choose
            your preferred colors and sizes.
          </div>
          <div className="flex items-center justify-center lg:justify-start w-full ">
            <Button variant="default" className="w-1/3 rounded-none">
              SHOP NOW
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex relative">
        <Image
          src={billboard?.imageUrl as string}
          alt="product image"
          fill
          sizes="100vh"
          className="w-full h-full "
          placeholder="blur"
          blurDataURL={billboard?.imageUrl as string}
        />
      </div>
    </section>
  );
};

export default Info;
