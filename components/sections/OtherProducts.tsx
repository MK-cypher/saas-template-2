import {otherProducts} from "@/lib/consts";
import {User} from "lucide-react";

export default function OtherProducts() {
  return (
    <section>
      <div className="container">
        <h2 className="text-4xl font-bold w-2/3 mb-12 max-lg:mx-auto max-lg:text-center">
          Customize your customer experience, Go beyond with our top products
        </h2>
        <div className="flex items-center gap-5 max-lg:flex-col">
          {otherProducts.map((item, i) => (
            <div key={i} className="border rounded-lg p-8 space-y-4 bg-secondary/70">
              <item.Icon />
              <div className="font-bold text-lg">{item.title}</div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
