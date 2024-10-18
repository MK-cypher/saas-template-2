import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ExtraFeatures from "@/components/sections/ExtraFeatures";
import ExtraPricing from "@/components/sections/ExtraPricing";
import Faq from "@/components/sections/Faq";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import OtherProducts from "@/components/sections/OtherProducts";
import Testimonials from "@/components/sections/Testimonials";
import TopProducts from "@/components/sections/TopProducts";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <ExtraFeatures />
      <OtherProducts />
      <TopProducts />
      <Testimonials />
      <ExtraPricing />
      <Faq />
      <Footer />
    </main>
  );
}
