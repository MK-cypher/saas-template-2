import {Button} from "@/components/ui/button";

export default function ExtraPricing() {
  return (
    <section>
      <div className="container relative">
        <div className="absolute left-0 -bottom-5 blur-3xl opacity-40 w-full h-[calc(100%-150px)] z-10">
          <div className="absolute bg-gradient-to-r from-blue-500 to-red-300 w-1/2 h-full left-0 bottom-0"></div>
          <div className="absolute bg-gradient-to-r to-blue-500 from-red-300 w-1/2 h-full right-0 bottom-0"></div>
        </div>
        <div className="z-20 relative">
          <h2 className="my-28 text-5xl font-bold text-center max-w-2xl mx-auto">
            Start managing your company smarter today
          </h2>
          <div className="border rounded-lg p-12 bg-secondary/80 flex items-start gap-5 max-lg:flex-col">
            <div className="w-1/2 text-center lg:border-r max-lg:w-full max-lg:border-b pb-10">
              <h3 className="text-3xl font-bold mb-3">Suite Enterprise</h3>
              <p className="text-lg">For your company of any size</p>
              <div className="mb-6 mt-12 font-bold text-4xl">$100</div>
              <Button>Get Started</Button>
              <p className="mt-10">Includes : Security, Unlimited Storage, Payment, Search engine, and all features</p>
            </div>
            <div className="w-1/2 max-lg:w-full">
              <div className="mb-5">
                <span className="mr-2 ">✓</span> First premium advantage
              </div>
              <div className="mb-5">
                <span className="mr-2 ">✓</span> Second advantage weekly
              </div>
              <div className="mb-5">
                <span className="mr-2 ">✓</span> Third advantage donate to project
              </div>
              <div className="mb-5">
                <span className="mr-2 ">✓</span> Fourth, access to all components weekly
              </div>
              <div>
                Team can be any size, and you can add or switch members as needed. Companies using our platform include:
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
                <div>
                  <img src="/google.png" className="h-10" alt="" />
                </div>
                <div>
                  <img src="/amazon.png" className="h-10" alt="" />
                </div>
                <div>
                  <img src="/microsoft.png" className="h-10" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
