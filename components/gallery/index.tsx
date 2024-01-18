"use client";
import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Image as ImageType } from "@/lib/types";
import Image from "next/image";
import { useAnimate, motion } from "framer-motion";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImageId, setSelectedImageId] = useState(images[0].id);
  const [scope, animate] = useAnimate();
  return (
    <div className="flex w-full flex-col gap-2">
      <Card>
        {images.map((image, index) => (
          <React.Fragment key={image.id}>
            {image.id === selectedImageId && (
              <>
                {/* <div className="aspect-square relative h-full w-full overflow-hidden rounded-lg bg-black"> */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  ref={scope}
                  className="relative rounded-xl aspect-square"
                >
                  <Image
                    src={image.url}
                    alt="billboard image"
                    fill
                    sizes="100vw, 100vh"
                    className="h-auto w-auto rounded-lg object-cover "
                    placeholder="blur"
                    blurDataURL={image.url}
                  />
                </motion.div>
              </>
            )}
          </React.Fragment>
        ))}
      </Card>

      <Tabs
        aria-label="Options"
        selectedKey={selectedImageId}
        onSelectionChange={(key: any) => setSelectedImageId(key)}
      >
        {images.map((image, index) => (
          <Tab key={image.id} title={`Image ${index + 1}`} className="" />
        ))}
      </Tabs>
    </div>
  );
};

export default Gallery;
