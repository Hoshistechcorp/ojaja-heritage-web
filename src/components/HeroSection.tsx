import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, ShoppingCart, Star, ArrowDown, X } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import productsHero from "@/assets/ojaja-products-hero.jpeg";
import DistributorForm from "@/components/DistributorForm";

const HeroSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Ojaja Drinks Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-ojaja-orange/10 animate-pulse"></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 rounded-full bg-ojaja-blue/15 animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-ojaja-green/30 rounded-full animate-ping"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-ojaja-blue/10 text-ojaja-blue px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              Premium African Beverages
            </div>
            
            {/* Main Heading */}
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[0.9]">
              Taste the
              <span className="block text-transparent bg-gradient-to-r from-ojaja-orange to-ojaja-pink bg-clip-text">
                Authentic
              </span>
              <span className="block">Africa</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              Experience the rich flavors and wellness benefits of traditional African beverages, 
              crafted with pure ingredients and centuries-old recipes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <DistributorForm>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-ojaja-orange to-ojaja-pink hover:shadow-elegant text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full group"
                >
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                  Become a Distributor
                </Button>
              </DistributorForm>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-ojaja-blue text-ojaja-blue hover:bg-ojaja-blue hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full group"
                onClick={() => setVideoOpen(true)}
              >
                <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-ojaja-orange">50K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-ojaja-blue">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Natural Ingredients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-ojaja-green">25+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Premium Flavors</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dynamic Product Showcase */}
          <div className="relative animate-scale-in -mt-8 lg:-mt-16">
            <div className="relative">
              {/* Hero product image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={productsHero}
                  alt="Ojaja Drinks Product Lineup"
                  className="w-full max-w-xl h-auto object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-ojaja-blue to-ojaja-green rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-ojaja-orange to-ojaja-pink rounded-full opacity-60 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Discover More</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>
      {/* Video Modal */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
          <div className="relative aspect-video w-full">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {videoOpen && (
              <video
                src="/videos/ojaja-story.mp4"
                controls
                autoPlay
                className="w-full h-full rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;