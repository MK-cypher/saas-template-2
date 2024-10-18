import {Button} from "@/components/ui/button";

export default function TopProducts() {
  return (
    <section>
      <div className="container">
        <div className="my-20 flex items-center justify-center gap-10 max-lg:flex-col-reverse text-center">
          <div className="w-1/2 relative max-lg:w-full">
            <div className="absolute bg-gradient-to-r from-primary to-blue-500 blur-3xl w-full h-full "></div>
            <img src="/hero.jpg" alt="" className="relative z-10 rounded-lg mx-auto" />
          </div>
          <div className="w-1/2 relative z-10 max-lg:w-full">
            <h2 className="text-4xl font-bold">Go beyond with our top products</h2>
            <div className="my-12">
              <p className="mb-5">
                Nobis minus voluptatibus pariatur dignissimos libero quaerat ? Asperiores nemo possimus nesciunt dicta
                veniam aspernatur quam mollitia
              </p>
              <p>
                Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur impedit, at reprehenderit
                aliquam a ipsum quas voluptatem. Quo pariatur asperiores eum amet.
              </p>
            </div>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
