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
      href={`/categories/${href}`}
      onClick={scrollToTop}
      className="w-full"
    >
      <span>{children}</span>
    </Link>
  );
};

export default Scroller;
