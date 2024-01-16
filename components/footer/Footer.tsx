"use client";
import useScrollStore from "@/hooks/useScroll";
import { Facebook, Instagram, X, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const { scrollToTop } = useScrollStore();
  const handleClick = (event: any) => {
    event.preventDefault();
    scrollToTop();
  };
  return (
    <footer className="bg-zinc-900 text-white w-full h-full">
      <div className="mx-auto py-10 max-w-[1920px]">
        <div className="flex flex-col md:flex-row justify-between text-xs sm:px-5 gap-4">
          <div className="flex flex-wrap sm:grid-cols-5 lg:flex lg:flex-row justify-center items-center gap-x-4 text-sm  w-full md:w-auto">
            <p
              onClick={handleClick}
              className="cursor-pointer flex justify-center"
            >
              About
            </p>
            <p
              onClick={handleClick}
              className="cursor-pointer flex text-center"
            >
              Legal Information
            </p>
            <p
              onClick={handleClick}
              className="cursor-pointer flex text-center"
            >
              Contact
            </p>
            <p
              onClick={handleClick}
              className="cursor-pointer flex text-center"
            >
              Terms Of Service
            </p>
            <p
              onClick={handleClick}
              className="cursor-pointer text-center flex"
            >
              Privacy Policy
            </p>
          </div>
          <div className="flex justify-center items-center flex-row gap-x-4 text-sm ">
            <p className="text-sm lg:pt-2">by Jan Andrex</p>
            <div
              className="rounded-full border p-1 cursor-pointer"
              onClick={handleClick}
            >
              <Facebook size={18} />
            </div>
            <div
              className="rounded-full border p-1 cursor-pointer"
              onClick={handleClick}
            >
              <X size={18} />
            </div>
            <div
              className="rounded-full border p-1 cursor-pointer"
              onClick={handleClick}
            >
              <Instagram size={18} />
            </div>
            <div
              className="rounded-full border p-1 cursor-pointer"
              onClick={handleClick}
            >
              <Youtube size={18} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
