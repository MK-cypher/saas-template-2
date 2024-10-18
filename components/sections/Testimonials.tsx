"use client";
import {testimonials} from "@/lib/consts";
import {useEffect, useState} from "react";
import TestimonialBox from "../testimonialBox";

export default function Testimonials() {
  const [mouse, setMouse] = useState({x: -1000, y: -1000});

  const getMousePosition = (e: MouseEvent) => {
    const x = e.pageX;
    const y = e.pageY;
    setMouse({x, y});
  };
  useEffect(() => {
    window.addEventListener("pointermove", getMousePosition);

    return () => {
      window.removeEventListener("pointermove", getMousePosition);
    };
  }, []);
  return (
    <section>
      <div className="container">
        <h2 className="text-4xl font-bold mb-5 text-center">Trusted by thousands</h2>
        <p className="text-muted-foreground mb-20 text-center mx-auto max-w-xl">
          Repellendus atque illum odio! Fugiat at expedita deserunt dolorum molestias.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <TestimonialBox key={i} item={item} mouse={mouse} />
          ))}
        </div>
      </div>
    </section>
  );
}
