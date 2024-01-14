import { PackageCheck, ShieldCheck, Truck } from "lucide-react";
import React from "react";

const OrderInfo = () => {
  return (
    <section className="relative grid grid-cols-1 sm:grid-cols-3 h-[420px] sm:h-[200px] mt-24 gap-4">
      <div className="sm:col-span-3">
        <p className="text-2xl">Seamless Shopping Experience</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Truck size={48} className="mb-4" />
        <p className="text-xl">Free Shipping</p>
        <p className="text-medium">From orders above 250$</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <PackageCheck size={48} className="mb-4" />
        <p className="text-xl">30-DAY RETURNS</p>
        <p className="text-medium">No questions asked</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <ShieldCheck size={48} className="mb-4" />
        <p className="text-xl">1-YEAR WARRANTY</p>
        <p className="text-medium">Dedicated support</p>
      </div>
    </section>
  );
};

export default OrderInfo;
