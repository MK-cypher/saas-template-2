import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ArrowLeft} from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <main className="h-lvh ">
      <div className="container flex flex-col h-full">
        <Link href={"/"} className="py-10">
          Logo
        </Link>

        <div className="flex-grow flex justify-center items-center">
          <div className="text-center w-[500px]">
            <Link
              href={"/login"}
              className="mr-auto flex mb-10 items-center gap-3"
            >
              <ArrowLeft />
              <div>back</div>
            </Link>
            <h1 className="text-3xl font-bold mb-5">Reset password</h1>
            <form action="#" className="w-full space-y-5">
              <Input type="email" placeholder="Email"></Input>
              <Button className="w-full">Send</Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
