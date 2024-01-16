import { MotionDiv } from "@/components/ui/motiondiv";
import { Product } from "@/lib/types";
import { formatter } from "@/lib/utils";
import Image from "next/image";

interface ProductItemsProps {
  product: Product;
}

const ProductItems = ({ product }: ProductItemsProps) => {
  return (
    <MotionDiv
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="group overflow-hidden relative w-full h-[350px] border-2 border-zinc-300 transition-all duration-300 ease-in-out hover:border-zinc-900"
    >
      <div className="relative w-full overflow-hidden h-[280px]">
        <Image
          src={product?.images[0].url as string}
          alt="billboard image"
          fill
          sizes="100vh"
          className="
         transform group-hover:scale-110 object-cover w-full h-full transition-all duration-300 ease-in-out  "
          placeholder="blur"
          blurDataURL={product?.images[0].url}
        />
      </div>
      <div className="absolute w-full bg-zinc-200 h-[67px] border-zinc-900 bottom-0">
        <div className="flex flex-col p-2 ">
          <p>{product?.name}</p>
          <div className="flex justify-between w-full">
            <span>${product.price}</span>

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
    </MotionDiv>
  );
};

export default ProductItems;
