import { Button } from "@/components/ui/button";
import { Crown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-african-green/90 via-african-green/70 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6 animate-fade-in">
          <Crown className="h-8 w-8 text-royal-gold mr-3" />
          <span className="text-royal-gold font-heading font-semibold text-lg tracking-wide">
            OJAJA DRINKS
          </span>
        </div>
        
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight animate-fade-in">
          Revitalizing Families Through
          <span className="block text-royal-gold mt-2">African Beverages</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-cream mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Rooted in royal heritage, crafted for wellness. Experience the authentic taste of Africa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button 
            size="lg" 
            className="bg-royal-gold hover:bg-royal-gold/90 text-earth-brown font-heading font-semibold px-8 py-4 rounded-full shadow-gold transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Explore Our Drinks
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-african-green font-heading font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            Our Heritage
          </Button>
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-cream/90">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-royal-gold rounded-full mr-2"></div>
            <span className="text-sm font-medium">100% Nigerian Owned</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-royal-gold rounded-full mr-2"></div>
            <span className="text-sm font-medium">Sustainable Sourcing</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-royal-gold rounded-full mr-2"></div>
            <span className="text-sm font-medium">Cultural Pride</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;