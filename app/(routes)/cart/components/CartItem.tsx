"use client";
import Image from "next/image";
import { toast } from "sonner";
import { X } from "lucide-react";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/lib/types";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();
  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b border-zinc-400">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48 group">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          sizes="100vw, 100vh"
          className="object-cover transition-transform duration-300 transform group-hover:scale-110 rounded-md w-full h-full"
          placeholder="blur"
          blurDataURL={data.images[0].url}
        />
      </div>
      <div className=" relative ml-4 flex flex-col flex-1 justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0 mr-2">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.size.name}
            </p>
          </div>
          <div className="font-semibold">${data.price}</div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
