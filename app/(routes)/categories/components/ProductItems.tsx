import { MotionDiv } from "@/components/ui/motiondiv";
import { Product } from "@/lib/types";
import Image from "next/image";

interface ProductItemsProps {
  product: Product | null;
}

const ProductItems = ({ product }: ProductItemsProps) => {
  return (
    <MotionDiv
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="overflow-hidden relative w-full h-[350px]"
    >
      <Image
        src={product?.images[0].url as string}
        alt="billboard image"
        fill
        sizes="100vh"
        className="
         transform hover:scale-110 object-cover w-full h-full transition-all duration-300 ease-in-out "
        placeholder="blur"
        blurDataURL={product?.images[0].url}
      />
      =
    </MotionDiv>
  );
};

export default ProductItems;
