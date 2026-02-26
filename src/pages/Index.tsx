import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BannerAd from "@/components/BannerAd";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import ProductsSection from "@/components/ProductsSection";
import IngredientsSection from "@/components/IngredientsSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingElements />
      <Header />
      <HeroSection />
      <BannerAd />
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
