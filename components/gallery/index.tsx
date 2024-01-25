"use client";
import { Image as ImageType } from "@/lib/types";
import { Card, Tab, Tabs } from "@nextui-org/react";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImageId, setSelectedImageId] = useState(images[0].id);
  const [scope] = useAnimate();
  return (
    <div className="flex w-full flex-col gap-2">
      <Card>
        {images.map((image, index) => (
          <React.Fragment key={image.id}>
            {image.id === selectedImageId && (
              <>
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
                    priority
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
          <Tab
            key={image.id}
            title={`Image ${index + 1}`}
            className="relative"
          />
        ))}
      </Tabs>
    </div>
  );
};

export default Gallery;
