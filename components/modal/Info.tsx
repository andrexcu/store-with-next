"use client";
import { Product } from "@/lib/types";
// import Currency from "@/components/ui/currency";
// import Button from "@/components/ui/Button";
import { ShoppingCart } from "lucide-react";
// import useCart from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info = ({ data }: InfoProps) => {
  //   const cart = useCart();

  //   const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
  //     event.stopPropagation();
  //     cart.addItem(data);
  //   };
  const cart = useCart();
  const onAddToCart = (data: Product) => {
    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data?.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900 font-bold">${data.price}</div>
      </div>
      <Separator className="my-4 bg-zinc-400" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          className="flex items-center gap-x-2"
          onClick={() => onAddToCart(data)}
        >
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
