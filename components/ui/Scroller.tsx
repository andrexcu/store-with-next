"use client";

import useScrollStore from "@/hooks/useScroll";
import Link from "next/link";

const Scroller = ({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) => {
  const { scrollToTop } = useScrollStore();
  return (
    <Link
      scroll={false}
      href={`/${href}`}
      className="w-full"
      onClick={scrollToTop}
    >
      {children}
    </Link>
  );
};

export default Scroller;
