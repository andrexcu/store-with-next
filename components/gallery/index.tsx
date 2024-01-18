"use client";
import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Image as ImageType } from "@/lib/types";
import Image from "next/image";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImageId, setSelectedImageId] = useState(images[0].id);

  return (
    <div className="flex w-full flex-col gap-2">
      <Card>
        <CardBody className=" aspect-square ">
          {images.map((image, index) => (
            <div key={image.id} className="rounded-xl">
              {image.id === selectedImageId && (
                <>
                  {/* <div className="aspect-square relative h-full w-full overflow-hidden rounded-lg bg-black"> */}
                  <Image
                    src={image.url}
                    alt="billboard image"
                    fill
                    sizes="100vw, 100vh"
                    className="h-auto w-auto rounded-lg object-cover "
                    placeholder="blur"
                    blurDataURL={image.url}
                  />
                  {/* </div> */}
                </>
              )}
            </div>
          ))}
        </CardBody>
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
