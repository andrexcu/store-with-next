import Navbar from "@/components/navbar/Navbar";

import type { Metadata } from "next";

import "./globals.css";
import { urbanist } from "@/app/fonts";
import Footer from "@/components/footer/Footer";
import ModalProvider from "@/components/modal/modal-provider";
import usePreviewModal from "@/hooks/use-preview-modal";
import { Toaster } from "@/components/ui/sonner";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
// urbanist
// const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Website",
  description: "An ecommerce website for my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { isOpen } = usePreviewModal();

  return (
    <html lang="en" className={` `}>
      <body
        className={` relative ${urbanist.className}  
        bg-gradient-to-r from-[#EDF1FE] to-[#d3d1ce] 
       
        `}
      >
        {/* from-[#d8d0c5] to-[#EDF1FE] */}
        {/* from-[#EDF1FE] to-[#d8d0c5] */}
        {/* [#fff7ea]  */}
        {/* <div className="w-full bg-[#FFFAFA] fixed min-h-[50px] z-50 top-0"></div> */}
        <ModalProvider />
        <Toaster position="bottom-right" />
        <Navbar />
        <section className="pt-28 overflow-x-hidden">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
