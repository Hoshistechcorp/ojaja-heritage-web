import { Button } from "@/components/ui/button";
import { Play, ShoppingCart, Star, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import splashImage from "@/assets/splash-drinks.jpg";
import BackgroundRemovedImage from "@/components/BackgroundRemovedImage";

const HeroSection = () => {
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

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-ojaja-blue/10 text-ojaja-blue px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              Premium African Beverages
            </div>
            
            {/* Main Heading */}
            <h1 className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.9]">
              Taste the
              <span className="block text-transparent bg-gradient-to-r from-ojaja-orange to-ojaja-pink bg-clip-text">
                Authentic
              </span>
              <span className="block">Africa</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Experience the rich flavors and wellness benefits of traditional African beverages, 
              crafted with pure ingredients and centuries-old recipes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-ojaja-orange to-ojaja-pink hover:shadow-elegant text-white font-semibold px-8 py-6 text-lg rounded-full group"
              >
                <ShoppingCart className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Shop Collection
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-ojaja-blue text-ojaja-blue hover:bg-ojaja-blue hover:text-white px-8 py-6 text-lg rounded-full group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-ojaja-orange">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ojaja-blue">100%</div>
                <div className="text-sm text-muted-foreground">Natural Ingredients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ojaja-green">25+</div>
                <div className="text-sm text-muted-foreground">Premium Flavors</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dynamic Product Showcase */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Main product image with background removal */}
              <div className="relative z-10">
                <BackgroundRemovedImage
                  originalImageUrl="/lovable-uploads/59d04be7-f5aa-4c4f-b088-ab042f87de15.png"
                  alt="Ojaja Premium Product Collection"
                  className="w-full max-w-xl h-auto object-contain drop-shadow-2xl"
                  fallbackSrc={splashImage}
                />
              </div>
              
              {/* Floating product elements */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-ojaja-orange to-ojaja-pink rounded-full flex items-center justify-center animate-float">
                <span className="text-white font-bold text-sm">NEW</span>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-ojaja-blue to-ojaja-green rounded-full opacity-80 animate-pulse"></div>
              
              {/* Animated elements */}
              <div className="absolute top-1/4 -left-4 w-3 h-3 bg-ojaja-orange rounded-full animate-ping"></div>
              <div className="absolute bottom-1/3 -right-4 w-2 h-2 bg-ojaja-blue rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-ojaja-green/50 rounded-full animate-pulse"></div>
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
    </section>
  );
};

export default HeroSection;