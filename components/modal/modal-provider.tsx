"use client";

import Hydration from "@/components/modal/hydration";
import PreviewModal from "@/components/modal/preview-modal";
// import PreviewModal from "@/components/preview-modal";

const ModalProvider = () => {
  return (
    <Hydration>
      <PreviewModal />
    </Hydration>
  );
};

export default ModalProvider;
