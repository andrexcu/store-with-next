"use client";

import { dmsans } from "@/app/fonts";
import Cart from "@/components/navbar/Cart";
import useScrollStore from "@/hooks/useScroll";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);
  const { scrollToTop } = useScrollStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <Nav
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
      className={` transition-all duration-300 ease-in bg-[#111014] fixed  w-full z-50   ${
        dmsans.className
      } 
        ${
          showBackground
            ? "h-20 transition-all ease-in duration-400 "
            : "transition-all duration-300 ease-in h-[120px] "
        }`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-slate-200"
        />
        <NavbarBrand
          className={`flex justify-between items-center cursor-pointer select-none`}
        >
          <Link
            href="/"
            scroll={false}
            className=" relative ml-4 items-center flex lg:ml-0 gap-x-2"
          >
            <div
              onClick={scrollToTop}
              className={`flex flex-row items-center font-bold text-4xl z-10 p-1 tracking-wide text-white
                `}
            >
              <span>A</span>
              <span className="opacity-90">I</span>
              <span className="opacity-80">T</span>
              <span className="opacity-70">O</span>
              <span className="opacity-60">U</span>
              <span className="opacity-80">K</span>
              <span className="opacity-60">A</span>
              <span className="opacity-40">RT</span>
            </div>
            <div className="bg-[#02000d] border-2 border-[#EDF1FE] absolute left-20 rounded-full p-4" />
            <div className="bg-[#02000d] border-2 border-[#EDF1FE] absolute left-24 rounded-full p-4" />
            <div className="bg-red-500 border-2 border-[#EDF1FE] absolute left-28 rounded-full p-4" />

            <div
              className={` absolute bg-[#111014] left-32 rounded-full p-4
                
                `}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className=" gap-8" justify="center">
        <Link
          href="/categories/all"
          scroll={false}
          className="hidden sm:flex"
          onClick={scrollToTop}
        >
          <div className="text-slate-200 hidden sm:flex flex-col justify-end items-end pt-2">
            CATEGORIES
          </div>
        </Link>
        <Link
          href="/products/65abbeb7d3c22982ac29c9e8"
          scroll={false}
          className="hidden sm:flex"
          onClick={scrollToTop}
        >
          <div className="text-slate-200 hidden sm:flex flex-col justify-end items-end pt-2">
            PRODUCT PAGE
          </div>
        </Link>
        <Cart />
      </NavbarContent>

      <NavbarMenu className="pt-6 overflow-hidden">
        <NavbarMenuItem className="h-full flex flex-col items-center justify-center gap-4">
          <Link href="/categories/all" scroll={false}>
            <div
              className="text-slate-700 text-3xl flex-col justify-end items-end"
              onClick={scrollToTop}
            >
              CATEGORIES
            </div>
          </Link>
          <Link href="/products/65abbeb7d3c22982ac29c9e8" scroll={false}>
            <div
              className="text-slate-700 text-3xl flex-col justify-end items-end"
              onClick={scrollToTop}
            >
              PRODUCT PAGE
            </div>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
      {/* </motion.div> */}
    </Nav>
  );
};
{
  /* <MainNav data={categories} /> */
}
{
  /* <NavbarActions /> */
}
export default Navbar;
