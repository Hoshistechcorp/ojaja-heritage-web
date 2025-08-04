import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Crown } from "lucide-react";
import productsImage from "@/assets/products-showcase.jpg";

const ProductsSection = () => {
  const products = [
    {
      name: "Ojaja Cola",
      description: "Classic fizz with kola nut twist",
      benefits: ["Antioxidants", "Natural Caffeine", "African Heritage"],
      comingSoon: false
    },
    {
      name: "Ojaja Bitters",
      description: "Herbal detox rooted in tradition",
      benefits: ["Digestive Aid", "Liver Support", "Herbal Blend"],
      comingSoon: false
    },
    {
      name: "Ginger Lemon Honey",
      description: "Immune-boosting golden elixir",
      benefits: ["Anti-inflammatory", "Vitamin C", "Natural Honey"],
      comingSoon: false
    },
    {
      name: "Whisky Cola",
      description: "Non-alcoholic sophistication",
      benefits: ["Rich Flavor", "Zero Alcohol", "Premium Taste"],
      comingSoon: false
    },
    {
      name: "Ginger Vodka",
      description: "Spicy-smooth celebration",
      benefits: ["Ginger Heat", "Smooth Finish", "Social Drink"],
      comingSoon: false
    },
    {
      name: "Orange",
      description: "Vitamin-rich African citrus",
      benefits: ["Vitamin C", "Fresh Citrus", "Natural Fruit"],
      comingSoon: false
    },
    {
      name: "Ojaja Water",
      description: "Pure African spring water",
      benefits: ["Pure H2O", "Mineral Rich", "Refreshing"],
      comingSoon: true
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-african-green mb-6">
            Our Premium Collection
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-8"></div>
          <p className="text-xl text-earth-brown max-w-3xl mx-auto mb-12">
            Each drink in our collection is carefully crafted using authentic African ingredients, 
            combining traditional wisdom with modern nutritional science.
          </p>
          
          {/* Featured Products Image */}
          <div className="mb-16">
            <img 
              src={productsImage} 
              alt="Ojaja Drinks Product Collection" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-warm"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="p-6 shadow-warm hover:shadow-african transition-all duration-300 group relative overflow-hidden">
              {/* Cultural Pride Badge */}
              <Badge className="absolute top-4 right-4 bg-african-green text-white">
                <Sparkles className="w-3 h-3 mr-1" />
                Cultural Pride
              </Badge>
              
              {product.comingSoon && (
                <Badge className="absolute top-4 left-4 bg-royal-gold text-earth-brown">
                  <Clock className="w-3 h-3 mr-1" />
                  Coming Soon
                </Badge>
              )}

              <div className="mt-8">
                <h3 className="font-heading font-bold text-xl text-african-green mb-3 group-hover:text-royal-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-earth-brown mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-african-green uppercase tracking-wide">
                    Health Benefits:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.benefits.map((benefit, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-african-green/10 text-african-green px-2 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="w-12 h-12 bg-african-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">100%</span>
              </div>
              <p className="font-semibold text-african-green">African-Sourced Ingredients</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-earth-brown font-bold text-xl">0</span>
              </div>
              <p className="font-semibold text-african-green">Artificial Preservatives</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-african-green">Royal Heritage Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;