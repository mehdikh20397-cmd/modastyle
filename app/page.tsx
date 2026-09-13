import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { PromoBanners } from "@/components/home/PromoBanners";
import { ServiceHighlights } from "@/components/home/ServiceHighlights";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fffaf5] text-[#17263a]">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <PromoBanners />
        <ServiceHighlights />
      </main>
      <Footer />
    </div>
  );
}
