"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Instagram } from "lucide-react";

const InstagramPhotos = () => {
  const links = [
    {
      url: "https://utfs.io/f/5af4dbb3-905e-4558-84d5-2753db8c36b4-1d.jpg",
    },
    {
      url: "https://utfs.io/f/46a7cfa0-e555-489b-aefb-db76e48ada2a-1e.jpg",
    },
    {
      url: "https://utfs.io/f/17b3f1e9-05de-4e03-8408-28c9a0af77f5-1f.jpg",
    },
    {
      url: "https://utfs.io/f/77b2b0d2-02fe-4ddc-a4ac-b586ee85682d-1g.jpg",
    },
    {
      url: "https://utfs.io/f/35c2b550-ddc3-4ec5-a5e7-5761771e4b56-1h.jpg",
    },
    {
      url: "https://utfs.io/f/734f2ca2-92ff-415d-b172-07a2ad4e7b45-1i.jpg",
    },
  ];

  return (
    <section>
      <div className="mt-4 relative flex justify-center items-center w-full">
        <Separator className="bg-zinc-200 absolute" />
        <p className="flex items-center gap-x-2 font-thin text-3xl bg-[#EDF1FE]/70 z-30 my-12">
          <Instagram />
          Follow us on instagram
        </p>
        <p className="absolute bottom-6 text-medium">@aitoukart_store</p>
      </div>

      <div className="w-full grid grid-cols-3 xl:grid-cols-6 bg-slate-900 h-[300px]">
        {links?.map((link, index) => (
          <div key={link?.url} className="relative">
            <Image
              src={link?.url}
              alt="product image"
              fill
              sizes="100vh"
              className="object-cover w-full"
              placeholder="blur"
              blurDataURL={link?.url}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramPhotos;
