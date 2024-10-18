"use client";

import Link from "next/link";
import {buttonVariants} from "./ui/button";
import {useState} from "react";
import {navLinks} from "@/lib/consts";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="max-sm:h-[100px] bg-background max-sm:fixed max-sm:w-full max-sm:z-50">
      <div className={`${navOpen ? "" : ""} container flex items-center py-5 max-sm:justify-between`}>
        <div className="logo max-sm:z-50">
          <Link href="/">Logo</Link>
        </div>
        <div
          className="sm:hidden max-sm:z-50 space-y-2 cursor-pointer transition-all duration-300"
          onClick={() => {
            setNavOpen(!navOpen);
            console.log(navOpen);
          }}
        >
          <div
            className={`${
              navOpen ? "rotate-45 translate-y-[5px]" : ""
            } w-5 h-0.5 bg-foreground transition-all duration-300`}
          ></div>
          <div className={`${navOpen ? "hidden" : ""} w-7 h-0.5 bg-foreground transition-all duration-300`}></div>
          <div
            className={`${
              navOpen ? "-rotate-45 -translate-y-[5px]" : ""
            } w-5 h-0.5 bg-foreground transition-all duration-300`}
          ></div>
        </div>
        <div
          className={`${
            navOpen ? " max-sm:top-0" : " max-sm:-top-full"
          } max-sm:transition-all max-sm:right-0 max-sm:duration-300 max-sm:fixed max-sm:flex-col max-sm:z-40 max-sm:h-full max-sm:justify-start max-sm:p-10 max-sm:pt-20 max-sm:gap-5 max-sm:bg-background/90 w-full flex justify-between items-center`}
        >
          <div className="flex justify-center w-full">
            <ul className="flex items-center gap-3 max-sm:flex-col max-sm:w-full max-sm:text-center max-sm:gap-5">
              {navLinks.map((item, i) => (
                <li key={i} className="max-sm:w-full">
                  <Link href={item.href}>{item.link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2 max-sm:flex-col max-sm:gap-5 max-sm: max-sm:w-full">
            <Link
              href="/login"
              className={`${buttonVariants({variant: "secondary"})} max-sm:w-full max-sm:block max-sm:text-center`}
            >
              Login
            </Link>
            <Link href="signup" className={`${buttonVariants()} max-sm:w-full max-sm:block max-sm:text-center`}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
