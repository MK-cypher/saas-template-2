"use client";

import {CSSProperties, useRef} from "react";

type props = {
  item: any;
  mouse: {x: number; y: number};
};

export default function TestimonialBox({item, mouse}: props) {
  const element = useRef<HTMLDivElement>(null);
  return (
    <div
      className="bg-secondary/80 border p-0.5 relative rounded-lg border-glow overflow-hidden"
      style={
        {
          "--x": `${mouse.x - (element.current?.offsetLeft || 0)}px`,
          "--y": `${mouse.y - (element.current?.offsetTop || 0)}px`,
        } as CSSProperties
      }
      ref={element}
    >
      <div className="p-3 bg-background h-full rounded-lg relative">
        <div className="flex mb-10 items-center gap-3 ">
          <div>
            <img src={item.img} className="w-12 h-12 rounded-full" alt="" />
          </div>
          <div>
            <div className="font-semibold text-lg">{item.name}</div>
            <div>{item.title}</div>
          </div>
        </div>
        {item.text}
      </div>
    </div>
  );
}
