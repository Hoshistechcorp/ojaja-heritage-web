import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import productsImage from "@/assets/products-showcase.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-water overflow-hidden">
      {/* Navigation Arrows */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10">
        <Button 
          variant="outline" 
          size="icon"
          className="w-12 h-12 rounded-full bg-ojaja-orange/80 border-ojaja-orange text-white hover:bg-ojaja-orange"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10">
        <Button 
          variant="outline" 
          size="icon"
          className="w-12 h-12 rounded-full bg-ojaja-orange/80 border-ojaja-orange text-white hover:bg-ojaja-orange"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="text-ojaja-blue font-medium text-lg tracking-wide">
              ~ Understand the importance of wellness
            </div>
            
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
              Pure <span className="italic">&</span> Healthy
              <span className="block">African Beverages</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button 
                size="lg" 
                className="bg-ojaja-blue hover:bg-ojaja-blue/90 text-white font-semibold px-8 py-4 text-lg"
              >
                ORDER TODAY!
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-ojaja-orange text-ojaja-orange hover:bg-ojaja-orange hover:text-white px-8 py-4 text-lg"
              >
                FREE ESTIMATE
              </Button>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative animate-scale-in">
            <div className="relative flex justify-center">
              <img 
                src={productsImage}
                alt="Ojaja Drinks product lineup"
                className="w-full max-w-lg h-auto object-contain"
              />
              
              {/* Floating water drops effect */}
              <div className="absolute top-10 left-10 w-4 h-4 bg-ojaja-blue/30 rounded-full animate-bounce"></div>
              <div className="absolute top-20 right-20 w-3 h-3 bg-ojaja-blue/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-32 left-16 w-5 h-5 bg-ojaja-blue/25 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-40 right-10 w-2 h-2 bg-ojaja-blue/30 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;