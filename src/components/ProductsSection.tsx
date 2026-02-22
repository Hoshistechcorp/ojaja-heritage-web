import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock, Crown, Heart } from "lucide-react";
import ProductModal from "@/components/ProductModal";
import productsImage from "@/assets/products-showcase.jpg";
import splashImage from "@/assets/splash-drinks.jpg";

// Individual product images
import colaImage from "@/assets/products/ojaja-cola.jpg";
import bittersImage from "@/assets/products/ojaja-bitters.jpg";
import gingerHoneyImage from "@/assets/products/ginger-lemon-honey.jpg";
import whiskyColaImage from "@/assets/products/whisky-cola.jpg";
import gingerVodkaImage from "@/assets/products/ginger-vodka.jpg";
import orangeImage from "@/assets/products/orange-drink.jpg";
import waterImage from "@/assets/products/ojaja-water.jpg";

const ProductsSection = () => {
  const products = [
    {
      name: "Ojaja Cola",
      description: "Classic fizz with kola nut twist",
      benefits: ["Antioxidants", "Natural Caffeine", "African Heritage"],
      comingSoon: false,
      image: colaImage,
      color: "bg-gradient-to-br from-amber-100 to-amber-200",
    },
    {
      name: "Ojaja Orange",
      description: "Vitamin-rich African citrus",
      benefits: ["Vitamin C", "Fresh Citrus", "Natural Fruit"],
      comingSoon: false,
      image: orangeImage,
      color: "bg-gradient-to-br from-orange-100 to-orange-300",
    },
    {
      name: "Ginger Lemon Honey",
      description: "Immune-boosting golden elixir",
      benefits: ["Anti-inflammatory", "Vitamin C", "Natural Honey"],
      comingSoon: false,
      image: gingerHoneyImage,
      color: "bg-gradient-to-br from-yellow-100 to-orange-200",
    },
    {
      name: "Whisky Cola",
      description: "Non-alcoholic sophistication",
      benefits: ["Rich Flavor", "Zero Alcohol", "Premium Taste"],
      comingSoon: false,
      image: "/lovable-uploads/742340d1-5ead-490f-bd42-cc55b77d0bfd.png",
      color: "bg-gradient-to-br from-amber-200 to-brown-200",
    },
    {
      name: "Ginger Vodka",
      description: "Spicy-smooth celebration",
      benefits: ["Ginger Heat", "Smooth Finish", "Social Drink"],
      comingSoon: false,
      image: "/lovable-uploads/5f0d4b5f-9de3-45c7-99c5-fb8b3c0c8f4b.png",
      color: "bg-gradient-to-br from-blue-100 to-blue-200",
    },
    {
      name: "Ojaja Bitters",
      description: "Herbal detox rooted in tradition",
      benefits: ["Digestive Aid", "Liver Support", "Herbal Blend"],
      comingSoon: false,
      image: "/lovable-uploads/af0ad8a4-66bb-45b1-97d4-46ec3cb6c4b5.png",
      color: "bg-gradient-to-br from-green-100 to-green-200",
    },
    {
      name: "Ojaja Water",
      description: "Pure African spring water",
      benefits: ["Pure H2O", "Mineral Rich", "Refreshing"],
      comingSoon: true,
      image: waterImage,
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
    }
  ];

  return (
    <section id="products" className="py-20 px-6 bg-ojaja-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-ojaja-pink mb-6">
            Our Premium Collection
          </h2>
          <div className="w-24 h-1 bg-ojaja-orange mx-auto mb-8"></div>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-12">
            Each drink in our collection is carefully crafted using authentic African ingredients, 
            combining traditional wisdom with modern nutritional science.
          </p>
          
          {/* Featured Products Images */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div>
              <img 
                src="/lovable-uploads/d19209c7-1b42-41ac-ba68-cb90eb379fe2.png" 
                alt="Ojaja Orange Drink Collection - Multiple Angles" 
                className="w-full h-[300px] object-cover rounded-2xl shadow-soft"
              />
            </div>
            <div>
              <img 
                src="/lovable-uploads/0896e38e-29ca-405b-b224-8ff397b7cdeb.png" 
                alt="Ojaja Whisky Cola Collection - Premium Packaging" 
                className="w-full h-[300px] object-cover rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </div>

        {/* Product Grid - Enhanced */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className={`group relative overflow-hidden border-0 shadow-soft hover:shadow-ojaja transition-all duration-500 transform hover:-translate-y-2 ${product.color}`}>
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-3 right-3">
                  <Badge className="bg-ojaja-pink text-white shadow-lg">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Cultural Pride
                  </Badge>
                </div>
                
                {product.comingSoon && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-ojaja-orange text-white shadow-lg">
                      <Clock className="w-3 h-3 mr-1" />
                      Coming Soon
                    </Badge>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-ojaja-blue mb-2 group-hover:text-ojaja-pink transition-colors">
                  {product.name}
                </h3>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                {/* Health Benefits */}
                <div className="space-y-3 mb-4">
                  <h4 className="font-semibold text-xs text-ojaja-blue uppercase tracking-wide flex items-center">
                    <Heart className="w-3 h-3 mr-1" />
                    Health Benefits:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {product.benefits.map((benefit, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-white/80 text-ojaja-blue px-2 py-1 rounded-full border border-ojaja-blue/20"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                {product.comingSoon ? (
                  <Button 
                    variant="outline"
                    className="w-full border-ojaja-blue text-ojaja-blue hover:bg-ojaja-blue hover:text-white transition-colors"
                    disabled
                  >
                    Notify Me
                  </Button>
                ) : (
                  <ProductModal product={product}>
                    <Button 
                      className="w-full bg-ojaja-blue hover:bg-ojaja-pink text-white transition-colors"
                    >
                      Learn More
                    </Button>
                  </ProductModal>
                )}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ojaja-pink/0 to-ojaja-pink/0 group-hover:from-ojaja-pink/10 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-20 text-center">
          <h3 className="font-heading font-bold text-2xl text-ojaja-pink mb-8">
            Why Choose Ojaja Drinks?
          </h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-2xl shadow-soft hover:shadow-ojaja transition-all duration-300 group">
              <div className="w-16 h-16 bg-ojaja-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">100%</span>
              </div>
              <p className="font-semibold text-ojaja-green text-sm">African-Sourced Ingredients</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-soft hover:shadow-ojaja transition-all duration-300 group">
              <div className="w-16 h-16 bg-ojaja-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">0</span>
              </div>
              <p className="font-semibold text-ojaja-orange text-sm">Artificial Preservatives</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-soft hover:shadow-ojaja transition-all duration-300 group">
              <div className="w-16 h-16 bg-ojaja-pink rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <p className="font-semibold text-ojaja-pink text-sm">Royal Heritage Quality</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-soft hover:shadow-ojaja transition-all duration-300 group">
              <div className="w-16 h-16 bg-ojaja-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <p className="font-semibold text-ojaja-blue text-sm">Family Wellness Focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;