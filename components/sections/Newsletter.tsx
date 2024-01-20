"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const clearFormData = () => {
    setFormData({
      name: "",
      email: "",
    });
  };
  const onSubscribe = (e: any) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter.");
    clearFormData();
  };

  return (
    <section className="flex flex-col items-center justify-center w-full h-[175px] mt-24 bg-black gap-4 py-2 sm:p-0">
      <div>
        <p className="font-thin text-xl text-slate-400">GET ON THE LIST</p>
      </div>
      <form onSubmit={onSubscribe}>
        <div className="flex flex-col grid-cols-3 sm:flex-row items-center justify-center gap-4 p-2 lg:p-0">
          <div className="flex flex-row items-center gap-4">
            <div>
              <Input
                type="text"
                placeholder="First Name.."
                className="rounded-none"
                required
                value={name}
                onChange={handleChange}
                name="name"
              />
            </div>
            <div>
              <Input
                type="email"
                value={email}
                placeholder="Email Address.."
                className="rounded-none"
                required
                onChange={handleChange}
                name="email"
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
      </form>
    </section>
  );
};

export default Newsletter;
