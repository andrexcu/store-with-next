import IconButton from "@/components/ui/icon-button";
import { MotionDiv } from "@/components/ui/motiondiv";
import usePreviewModal from "@/hooks/use-preview-modal";
import { Product } from "@/lib/types";
import { formatter } from "@/lib/utils";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface ProductItemsProps {
  product: Product;
}

const ProductItems = ({ product }: ProductItemsProps) => {
  const previewModal = usePreviewModal();

  const onPreview = (e: any) => {
    e.preventDefault();
    previewModal.onOpen(product);
  };

  return (
    <MotionDiv
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="group overflow-hidden  w-full h-[350px] "
    >
      <div className="relative h-full w-full border-2 border-zinc-300 group-hover:border-zinc-900 transition-all duration-300 ease-in-out">
        <div className="relative w-full overflow-hidden h-[280px]">
          <Image
            src={product?.images[0].url as string}
            alt="billboard image"
            fill
            sizes="100vh"
            className="
         transform group-hover:scale-110 object-cover w-full h-full transition-all duration-300 ease-in-out"
            placeholder="blur"
            blurDataURL={product?.images[0].url}
          />
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              <IconButton
                onClick={onPreview}
                icon={<Expand size={20} className="text-gray-600" />}
              />
              <IconButton
                // onClick={onAddToCart}
                icon={<ShoppingCart size={20} className="text-gray-600" />}
              />
            </div>
          </div>
        </div>
        <div className="absolute w-full bg-zinc-200 h-[67px] border-zinc-900 bottom-0 left-0">
          <div className="flex flex-col p-2 ">
            <p>{product?.name}</p>
            <div className="flex justify-between w-full">
              <span className="font-bold">${product.price}</span>

              <p className="flex gap-x-2">
                <span>{product.size.value}</span>
                <span
                  className="rounded-full h-6 w-6"
                  style={{ backgroundColor: `${product.color.value}` }}
                ></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default ProductItems;
