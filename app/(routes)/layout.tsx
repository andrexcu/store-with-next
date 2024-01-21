"use client";
import Navbar from "@/components/navbar/Navbar";
import { Lenis, ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReactLenis root>{children}</ReactLenis>;
}
