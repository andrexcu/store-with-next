import Navbar from "@/components/navbar/Navbar";

import type { Metadata } from "next";

import "./globals.css";
import { urbanist } from "@/app/fonts";
import Footer from "@/components/footer/Footer";
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
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`overflow-x-hidden relative ${urbanist.className}  
        bg-gradient-to-r from-[#EDF1FE]
        `}
      >
        <Navbar />
        <section className="pt-28">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
