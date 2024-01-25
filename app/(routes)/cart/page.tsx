"use client";
import Hydration from "@/components/modal/hydration";
import Container from "@/components/ui/Container";
import useCart from "@/hooks/use-cart";
import CartItem from "./components/CartItem";
import Summary from "./components/Summary";
import { ScrollArea } from "@/components/ui/scroll-area";

// import CartItem from "./components/cart-item";
// import Summary from "./components/summary";

const CartPage = () => {
  const cart = useCart();

  return (
    <Hydration>
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8 min-h-dvh">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <ScrollArea
              className="flex items-center  h-[600px] lg:col-span-7 bg-[#C4C5BA] px-8 overflow-auto"
              //   onClick={(e) => handleScrollAreaClick(e)}
            >
              {cart.items.length === 0 && (
                <p className="text-neutral-500 flex justify-center items-center p-4">
                  No items added to cart
                </p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </ScrollArea>
            <Summary />
          </div>
        </div>
      </Container>
    </Hydration>
  );
};
export default CartPage;
