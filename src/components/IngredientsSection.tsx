import { Card } from "@/components/ui/card";
import { Zap, Shield, Heart, Sun } from "lucide-react";

const IngredientsSection = () => {
  const ingredients = [
    {
      icon: Zap,
      name: "Ginger",
      benefit: "Anti-inflammatory",
      description: "Natural pain relief and digestive support",
      color: "text-terracotta"
    },
    {
      icon: Shield,
      name: "Honey",
      benefit: "Antioxidant",
      description: "Natural sweetener with antimicrobial properties",
      color: "text-royal-gold"
    },
    {
      icon: Heart,
      name: "Bitters",
      benefit: "Digestion Aid",
      description: "Traditional herbs for stomach health",
      color: "text-african-green"
    },
    {
      icon: Sun,
      name: "Lemon",
      benefit: "Vitamin C Boost",
      description: "Immune system support and natural energy",
      color: "text-terracotta"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-heritage text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Ingredients & Benefits
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-8"></div>
          <p className="text-xl text-cream max-w-3xl mx-auto">
            Discover the powerful African ingredients that make our beverages both delicious and beneficial for your health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((ingredient, index) => (
            <Card key={index} className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group text-center">
              <ingredient.icon className={`h-16 w-16 ${ingredient.color} mx-auto mb-6 group-hover:scale-110 transition-transform`} />
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                {ingredient.name}
              </h3>
              <div className="text-royal-gold font-semibold mb-4 text-lg">
                {ingredient.benefit}
              </div>
              <p className="text-cream text-sm leading-relaxed">
                {ingredient.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Scientific Backing */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10">
            <h3 className="font-heading font-bold text-2xl text-royal-gold mb-4">
              Science Meets Tradition
            </h3>
            <p className="text-cream text-lg leading-relaxed max-w-4xl mx-auto">
              Every Ojaja Drinks ingredient is selected based on centuries of traditional African knowledge, 
              validated by modern nutritional science. Our formulations combine the wisdom of our ancestors 
              with contemporary health standards.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;