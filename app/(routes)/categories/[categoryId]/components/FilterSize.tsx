"use client";

import { Button } from "@/components/ui/button";
import { Size } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import React, { useState } from "react";

interface FilterProps {
  sizes: Size[] | null;
  name: string;
  valueKey: string;
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}

const FilterColor = ({
  sizes,
  name,
  valueKey,
  selectedSize,
  setSelectedSize,
}: FilterProps) => {
  // const [selectedSize, setSelectedSize] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );
    router.push(url);
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <div className="flex justify-start text-lg text-slate-800">SIZES</div>

        {sizes?.map((filter) => (
          <Button
            variant={`${selectedSize === filter.id ? "default" : "outline"}`}
            key={filter.id}
            className="w-full min-w-50px"
            onClick={() => {
              selectedSize === "" || selectedSize !== filter.id
                ? setSelectedSize(filter.id)
                : setSelectedSize("");
              onClick(filter.id);
            }}
          >
            <span className="hidden md:flex">{filter.name}</span>
            <span className="flex md:hidden">{filter.value}</span>
          </Button>
        ))}
      </div>
    </>
  );
};

export default FilterColor;
