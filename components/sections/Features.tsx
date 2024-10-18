import {features, mainFeature} from "@/lib/consts";
import {MapPinIcon, MessageSquareDotIcon, ShieldCheckIcon, Star, User, Zap} from "lucide-react";

export default function Features() {
  return (
    <section>
      <div className="container">
        <h1 className="font-bold text-5xl text-center mb-4">Shaped to meet your needs</h1>
        <p className="mb-10 text-center max-w-2xl mx-auto">
          apiente optio repellendus atque illum odio! Fugiat at expedita deserunt dolorum molestias.
        </p>
        <div className="relative">
          <div className="absolute w-full top-1/2 -translate-y-1/2 h-1/2 flex gap-10 blur-3xl opacity-45 z-0">
            <div className="bg-gradient-to-r from-primary to-blue-400 w-1/5 h-full -top-10 absolute left-0"></div>
            <div className="bg-gradient-to-r from-primary to-blue-400 w-1/5 h-full top-20 absolute left-1/4"></div>
            <div className="bg-gradient-to-r from-primary to-blue-400 w-1/5 h-full -top-10 absolute left-1/2"></div>
            <div className="bg-gradient-to-r from-primary to-blue-400 w-1/5 h-full top-12 absolute right-0"></div>
          </div>
          <div className="relative border p-2 flex items-center rounded-lg z-10 max-lg:flex-col max-lg:gap-20">
            <div className="basis-1/2 flex justify-center items-center max-lg:mt-10">
              {mainFeature.map((item, i) => (
                <div key={i} className="space-y-2 mx-auto text-center max-sm:w-4/5 w-2/5">
                  <item.Icon className="mx-auto" />
                  <div className="font-bold text-xl">{item.title}</div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="basis-1/2 relative grid overflow-hidden rounded-lg bg-gray-100 p-1 dark:bg-gray-800/50 sm:grid-cols-2">
              {features.map((item, i) => (
                <div key={i} className="p-8 rounded-lg transition-all duration-300 hover:bg-secondary space-y-2">
                  <item.Icon />
                  <div className="font-bold text-lg">{item.title}</div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
