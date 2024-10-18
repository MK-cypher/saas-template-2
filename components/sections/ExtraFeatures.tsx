import {MapPinIcon, MessageSquareDotIcon, ShieldCheckIcon, Star, User, Zap} from "lucide-react";

export default function ExtraFeatures() {
  return (
    <section>
      <div className="container">
        <div>
          <div className="flex gap-3 max-lg:flex-col max-lg:gap-20">
            <div className="w-1/2 max-lg:w-full">
              <h2 className="text-4xl font-bold">Just focus on your business startegy</h2>
              <div className="my-10">
                <p className="mb-5">
                  Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo
                  possimus nesciunt dicta veniam aspernatur quam mollitia.
                </p>
                <p>
                  Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur impedit, at reprehenderit
                  aliquam a ipsum quas voluptatem. Quo pariatur asperiores eum amet.
                </p>
              </div>
              <div className="flex items-center gap-3 mb-5 border-b pb-5">
                <MessageSquareDotIcon />
                <div>
                  <div className="font-bold text-lg">Chat Anytime</div>
                  <p className="text-muted-foreground">Asperiores nemo possimus nesciunt quam mollitia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquareDotIcon />
                <div>
                  <div className="font-bold text-lg">Chat Anytime</div>
                  <p className="text-muted-foreground">Asperiores nemo possimus nesciunt quam mollitia</p>
                </div>
              </div>
            </div>
            <div className=" flex gap-10 w-1/2 max-lg:w-full">
              <div className="relative">
                <div className="w-[2px] bg-gradient-to-b from-muted-foreground relative h-full"></div>
                <div className="w-5 h-5 rounded-full bg-blue-600 absolute top-5 -left-2.5 before:absolute before:w-2.5 before:h-2.5 before:bg-foreground before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2"></div>
                <div className="w-5 h-5 rounded-full bg-slate-600 absolute top-32 -left-2.5 before:absolute before:w-2.5 before:h-2.5 before:bg-foreground before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2"></div>
                <div className="w-5 h-5 rounded-full bg-purple-600 absolute top-80 -left-2.5 before:absolute before:w-2.5 before:h-2.5 before:bg-foreground before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2"></div>
              </div>
              <div className="">
                <div className="mb-10 border p-3 rounded-lg bg-secondary w-fit flex items-center gap-3">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <MapPinIcon />
                  </div>
                  <div>Real Time Location</div>
                </div>
                <div className="mb-20 border p-3 rounded-lg bg-secondary w-fit flex items-center gap-3">
                  <div className="bg-slate-600 p-2 rounded-lg">
                    <Zap />
                  </div>
                  <div>The faster on the market</div>
                </div>
                <div className="mb-20 border p-3 rounded-lg bg-secondary w-fit">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="bg-purple-600 p-2 rounded-lg">
                      <ShieldCheckIcon />
                    </div>
                    <div>Safe and private</div>
                  </div>
                  <div>
                    <img src="/hero.jpg" className="rounded-lg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
