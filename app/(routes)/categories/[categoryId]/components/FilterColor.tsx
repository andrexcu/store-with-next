"use client";

import { Button } from "@/components/ui/button";
import { Color, Size } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import React, { useState } from "react";

interface FilterProps {
  colors: Color[] | null;
  name: string;
  valueKey: string;
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}

const FilterSize = ({
  colors,
  name,
  valueKey,
  selectedColor,
  setSelectedColor,
}: FilterProps) => {
  // const [selectedColor, setSelectedColor] = useState("");
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
        <div className="flex justify-start text-lg text-slate-800">COLORS</div>

        {colors?.map((filter) => (
          <Button
            variant="default"
            key={filter.id}
            className={`h-8 w-8 rounded-full 
            
              `}
            // ${selectedColor === filter.id ? "border-4 border-slate-400" : ""}
            style={{ backgroundColor: filter.value }}
            onClick={() => {
              setSelectedColor(filter.id);
              onClick(filter.id);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default FilterSize;
