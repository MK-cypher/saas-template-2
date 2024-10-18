"use client";
import {Check} from "lucide-react";
import {Button} from "../ui/button";
import {useEffect, useState} from "react";

type feature = {
  type: string;
  price: {monthly: number; annual: number};
  description: string;
  features: string[];
};
type props = {
  item: feature;
  type: "monthly" | "annual";
  i: number;
};

export default function PricingCard({item, type, i}: props) {
  const [price, setPrice] = useState(item.price.monthly);

  useEffect(() => {
    let interval: any;
    let counter = price;
    if (type == "annual") {
      interval = setInterval(() => {
        counter--;
        if (counter <= item.price.annual) {
          setPrice(item.price.annual);
          clearInterval(interval);
          return;
        }
        setPrice(counter);
      }, 50 / (i + 1));
    }

    if (type == "monthly") {
      interval = setInterval(() => {
        counter++;
        if (counter >= item.price.monthly) {
          setPrice(item.price.monthly);
          clearInterval(interval);
          return;
        }
        setPrice(counter);
      }, 50 / (i + 1));
    }

    return () => {
      clearInterval(interval);
    };
  }, [type]);
  return (
    <div
      className={`max-md:px-5 px-8 max-sm:w-full border rounded-2xl relative ${
        i == 1 && "sm:scale-[1.15] border-primary z-[1] md:px-10 sm:px-7"
      }
      ${i == 0 && "sm:rounded-r-none"}
      ${i == 2 && "sm:rounded-l-none"}
      bg-background/30 backdrop-blur sm:hover:-translate-y-2 transition-all duration-300`}
    >
      <div className="py-8 px-5 sm:text-center">
        <div className="sm:text-center text-xs px-6 py-0.5 rounded-full border w-fit sm:mx-auto">{item.type}</div>
        <div className="flex sm:justify-center items-end my-3">
          <div className={`font-bold text-5xl ${i == 1 && "text-primary"} `}>{price}</div>
          <div className="text-xs text-muted-foreground">/MO</div>
        </div>
        <div className="text-muted-foreground">{item.description}</div>
      </div>
      <div className={`py-2 max-sm:px-5  my-2 border-t sm:text-center ${i == 1 && "sm:px-9"}`}>
        {item.features.map((feature, i2) => (
          <div key={i2} className="my-2 sm:justify-center flex items-center gap-3">
            <div className={`${i == 1 ? "bg-primary" : "bg-secondary"} rounded-full p-1`}>
              <Check size={14} />
            </div>
            <div className="text-nowrap">{feature}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center sm:justify-center my-5">
        <Button className="max-sm:w-full">Get Started</Button>
      </div>
    </div>
  );
}
