import {Button} from "@/components/ui/button";
export default function Hero() {
  return (
    <section id="hero" className="py-40">
      <div className="mb-32">
        <div className="container flex justify-between items-center max-lg:flex-col max-lg:gap-20 max-lg:text-center">
          <div className="hero-text lg:w-1/2">
            <h1 className="text-6xl font-bold mb-10">Hero header text</h1>
            <p className="text-lg mb-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit error totam eaque culpa est
              necessitatibus maxime illum modi, unde distinctio!
            </p>
            <Button className="">Explore more</Button>
            <Button className="ml-5" variant={"secondary"}>
              Get Started
            </Button>
          </div>
          <div className="lg:w-2/5 h-96 relative before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:bg-gradient-to-r before:from-blue-600 before:to-pink-500 before:z-10 before:blur-3xl before:opacity-45">
            <img src="/hero.jpg" alt="" className="rounded-lg h-full object-cover relative z-20" />
          </div>
        </div>
      </div>
      <div className="text-center font-semibold">TRUSTED BY YOUR FAVORED TOP TECHS COMPANIES</div>
      <div className="mt-20 flex flex-wrap items-center justify-center gap-10">
        <div>
          <img src="/google.png" className="h-20" alt="" />
        </div>
        <div>
          <img src="/amazon.png" className="h-20" alt="" />
        </div>
        <div>
          <img src="/microsoft.png" className="h-20" alt="" />
        </div>
      </div>
    </section>
  );
}
