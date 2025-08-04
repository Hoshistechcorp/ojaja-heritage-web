import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import ProductsSection from "@/components/ProductsSection";
import IngredientsSection from "@/components/IngredientsSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <ProductsSection />
      <IngredientsSection />
      <DifferentiatorsSection />
      <Footer />
    </div>
  );
};

export default Index;
