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
    <Link scroll={false} href={`/${href}`} className="w-full">
      <span onClick={scrollToTop}>{children}</span>
    </Link>
  );
};

export default Scroller;
