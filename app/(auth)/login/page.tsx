import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Link from "next/link";

export default function page() {
  return (
    <div className="h-lvh flex">
      <div className="h-full basis-1/2 bg-[url('/hero.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="text-xl p-10">
          <Link href={"/"}>Logo</Link>
        </div>
      </div>
      <div className="basis-1/2 flex flex-col">
        <div className="text-xl p-10 self-end">
          <Link href={"/signup"}>Signup</Link>
        </div>
        <div className="basis-1/2 flex-grow flex justify-center items-center">
          <div className="text-center w-[80%]">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground my-2">
              Enter your email and password to continue
            </p>
            <form action="#" className="w-full">
              <Input type="text" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button className="w-full">Login</Button>
              <Link href={"/forget-password"} className="flex self-end my-4">
                Forgot Password?
              </Link>
              <div className="w-full flex-nowrap flex items-center gap-3">
                <div className="basis-1/3 h-[1px] bg-border"></div>
                <div className="whitespace-nowrap basis-1/3">
                  OR CONTINUE WITH
                </div>
                <div className="basis-1/3 h-[1px] bg-border"></div>
              </div>
              <Button variant={"secondary"} className="w-full">
                Google
              </Button>
              <Button variant={"secondary"} className="w-full">
                Github
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
