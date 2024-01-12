import type { Metadata } from "next";
import { Urbanist, Stick, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/ui/Footer";
// urbanist
// const urbanist = Urbanist({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });

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
        bg-gradient-to-r from-[#EDF1FE]
        
        `}
        // from-[#EDF1FE]
        // style={{ backgroundColor: "#F8F4FF" }}
        // style={{ backgroundColor: "#EDF1FE" }}
      >
        <Navbar />
        <section className="pt-28">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
