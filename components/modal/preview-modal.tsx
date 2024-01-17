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
  //   const previewModal = usePreviewModal();
  //   const product = usePreviewModal((state) => state.data);
  //   const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const { isOpen, onClose } = usePreviewModal();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl" backdrop="blur">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat
                consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
                consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
                et. Culpa deserunt nostrud ad veniam.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose}>
                Close
              </Button>
              {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PreviewModal;
