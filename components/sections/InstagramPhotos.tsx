import { kaushan } from "@/app/fonts";
import { Instagram } from "lucide-react";
import Image from "next/image";

const InstagramPhotos = () => {
  const links = [
    {
      url: "https://utfs.io/f/e76f86cd-fb5f-41ab-832c-15892da2fdde-886qjx.jpg",
    },
    {
      url: "https://utfs.io/f/5af4dbb3-905e-4558-84d5-2753db8c36b4-1d.jpg",
    },
    {
      url: "https://utfs.io/f/17b3f1e9-05de-4e03-8408-28c9a0af77f5-1f.jpg",
    },
    {
      url: "https://utfs.io/f/77b2b0d2-02fe-4ddc-a4ac-b586ee85682d-1g.jpg",
    },
    {
      url: "https://utfs.io/f/8e28a2f5-70d5-4158-8168-f6fc63af4f70-hljzjk.jpg",
    },
    {
      url: "https://utfs.io/f/734f2ca2-92ff-415d-b172-07a2ad4e7b45-1i.jpg",
    },
  ];

  return (
    <section className="flex items-end relative h-[320px]">
      <div className="absolute top-0 flex justify-center items-center w-full  z-30">
        <div
          className={`flex flex-col items-center gap-x-2 text-3xl bg-[#EDF1FE]/70 z-30 px-2 ${kaushan.className} font-thin`}
        >
          <div className="flex items-center gap-2">
            <Instagram />
            Follow us on instagram
          </div>
        </div>
        <div className="absolute top-8 text-white text-medium pb-2">
          @aitoukart_store
        </div>
      </div>

      <div className="w-full  bg-[#111014] h-[300px] select-none">
        <div className="grid grid-cols-3 xl:grid-cols-6 h-full mx-auto max-w-[1920px]">
          {links?.map((link, index) => (
            <div key={link?.url} className="relative ">
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
      </div>
    </section>
  );
};

export default InstagramPhotos;
