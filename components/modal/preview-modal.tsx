"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useOnClickOutside } from "@/components/modal/use-on-click-outside";
import { useRef } from "react";
import Info from "@/components/modal/Info";
import Gallery from "@/components/gallery";
import { Product } from "@/lib/types";
// import Gallery from "./gallery";
// import Info from "@/components/Info";

interface useDisclosure {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onOpenChange?: () => void;
  isControlled?: boolean;
  getButtonProps?: (props?: any) => any;
  getDisclosureProps?: (props?: any) => any;
}

const PreviewModal = () => {
  const product = usePreviewModal((state) => state.data);

  const { isOpen, onClose } = usePreviewModal();

  return (
    <>
      {product ? (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="3xl"
          backdrop="blur"
          className="bg-[#F2F7FD]/80 backdrop-blur-md"
        >
          <ModalContent className="p-4">
            <ModalBody className="">
              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                  <Gallery images={product?.images} />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                  <Info data={product} />
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
};

export default PreviewModal;
