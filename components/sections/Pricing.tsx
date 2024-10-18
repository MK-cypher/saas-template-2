"use client";

import {pricing} from "@/lib/consts";
import {useState} from "react";
import PricingCard from "./PricingCard";

export default function Pricing() {
  const [type, setType] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="container">
      <div className="flex justify-center items-center">
        <div className="flex items-center py-2 px-4 border rounded-lg gap-1 relative">
          <div
            className={`absolute top-1/2 -translate-y-1/2 left-0 bg-secondary rounded-lg p-2 py-3 transition-all duration-300 
            ${type == "monthly" ? "translate-x-4" : "translate-x-[7.3rem]"} w-24 h-12`}
          ></div>
          <button
            className={` px-1.5 py-3 rounded-lg relative w-24`}
            onClick={() => {
              setType("monthly");
            }}
          >
            MONTHLY
          </button>
          <button
            className={`px-1.5 py-3 rounded-lg relative w-24`}
            onClick={() => {
              setType("annual");
            }}
          >
            ANNUAL
          </button>
        </div>
      </div>
      <div className="flex max-sm:flex-col max-sm: gap-3 justify-center items-center mt-20 relative">
        <div className="absolute w-full top-1/2 -translate-y-1/2 h-1/2 flex gap-10 blur-3xl opacity-45 z-0">
          <div className="bg-gradient-to-r from-primary to-blue-400 w-1/5 h-full -top-10 absolute left-0"></div>
          <div className="bg-gradient-to-r from-primary to-blue-400 w-1/5 h-full -top-10 absolute left-1/2"></div>
          <div className="bg-gradient-to-r from-primary to-blue-400 w-1/5 h-full top-20 absolute left-3/4"></div>
        </div>
        {pricing.map((item, i) => (
          <PricingCard i={i} key={i} item={item} type={type} />
        ))}
      </div>
    </section>
  );
}
