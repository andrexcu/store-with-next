import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/ui/Footer";
import type { Metadata } from "next";

import "./globals.css";
import { urbanist } from "@/app/fonts";
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
    <html lang="en">
      <body
        className={`relative ${urbanist.className}  
        bg-gradient-to-r from-[#EDF1FE] overflow-x-hidden
        `}
      >
        <Navbar />
        <section className="pt-28">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
