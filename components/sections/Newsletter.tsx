import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-[175px] mt-24 bg-black gap-4 py-2 sm:p-0">
      <div>
        <p className="font-thin text-xl text-slate-400">GET ON THE LIST</p>
      </div>
      <div className="flex flex-col grid-cols-3 sm:flex-row items-center justify-center gap-4 p-2 lg:p-0">
        <div className="flex flex-row items-center gap-4">
          <div>
            <Input
              type="text"
              placeholder="First Name.."
              className="rounded-none"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email Address.."
              className="rounded-none"
            />
          </div>
        </div>
        <div>
          <Button
            variant="default"
            size="lg"
            className="rounded-none bg-transparent border border-slate-200"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
