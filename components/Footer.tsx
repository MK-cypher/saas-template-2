import {navLinks} from "@/lib/consts";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="space-y-4 text-center">
        <div className="logo">
          <Link href="/">Logo</Link>
        </div>
        <ul className="flex justify-center items-center gap-5 flex-wrap">
          {navLinks.map((item, i) => (
            <li key={i} className="">
              <Link href={item.href}>{item.link}</Link>
            </li>
          ))}
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Sign up</Link>
          </li>
        </ul>
        <div className="copy">&copy; All rights reserved</div>
      </div>
    </footer>
  );
}
