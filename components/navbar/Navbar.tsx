"use client";

import Cart from "@/components/navbar/Cart";
import Container from "@/components/ui/Container";
import useScrollStore from "@/hooks/useScroll";
import { Diamond } from "lucide-react";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
const dmsans = DM_Sans({ subsets: ["latin"], weight: "500" });

// const scrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);
  const { scrollToTop } = useScrollStore();
  const handleClick = (event: any) => {
    event.preventDefault();
    scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        return setShowBackground(true);
      } else {
        return setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={` fixed bg-[#111014] w-full z-50  ${dmsans.className} 
        ${showBackground ? " transition-colors duration-400" : ""}
      `}
      >
        <Container>
          <header
            className={`transition-all duration-300 ease-in flex justify-between items-center cursor-pointer select-none
            ${showBackground ? "h-10" : "h-20"}`}
          >
            <Link href="/">
              <div
                onClick={handleClick}
                className="relative ml-4 items-center flex lg:ml-0 gap-x-2"
              >
                <p
                  className={`flex flex-row items-center font-bold text-4xl z-10 p-1 tracking-wide text-white
            
                `}
                >
                  <span>A</span>
                  <span className="opacity-90">I</span>
                  <span className="opacity-80">T</span>
                  <span className="opacity-70">O</span>
                  <span className="opacity-60">U</span>
                  <span className="opacity-50">KA</span>
                  <span className="opacity-40">RT</span>
                </p>
                <div className="bg-red-500 border absolute left-20 rounded-full p-4" />
                <div className="bg-red-500 border absolute left-24 rounded-full p-4" />

                <div className="bg-red-500 border absolute left-28 rounded-full p-4" />

                <div
                  className={` absolute bg-[#111014] left-32 rounded-full p-4
                
                `}
                />
              </div>
            </Link>
            <div className="hidden sm:flex gap-8">
              <Link
                href="/categories/all"
                className="text-slate-200 flex flex-col justify-end items-end pt-2 "
              >
                CATEGORIES
              </Link>
              <Cart />
            </div>
          </header>
        </Container>
      </nav>
    </>
  );
};
{
  /* <MainNav data={categories} /> */
}
{
  /* <NavbarActions /> */
}
export default Navbar;
