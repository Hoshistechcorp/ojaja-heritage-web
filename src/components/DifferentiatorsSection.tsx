import { Card } from "@/components/ui/card";
import { CheckCircle, Globe, Leaf, Star, Award, Heart } from "lucide-react";

const DifferentiatorsSection = () => {
  const differentiators = [
    {
      icon: Globe,
      title: "100% African-Sourced Ingredients",
      description: "Every ingredient sourced directly from African farms and suppliers, supporting local communities."
    },
    {
      icon: Heart,
      title: "Health Benefits + Tradition",
      description: "Ancient African remedies backed by modern nutritional science for proven health benefits."
    },
    {
      icon: Leaf,
      title: "Carbon Footprint Reduction",
      description: "Sustainable packaging and local sourcing minimize environmental impact."
    },
    {
      icon: Star,
      title: "Culturally Authentic Branding",
      description: "Proudly representing African heritage through authentic design and royal legacy."
    },
    {
      icon: Award,
      title: "Royal Heritage Quality",
      description: "Born from the legacy of the Ooni of Ife, ensuring premium quality standards."
    },
    {
      icon: CheckCircle,
      title: "Community Impact",
      description: "Every purchase supports African farmers and strengthens local economies."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-ojaja-pink mb-6">
            What Makes Us Unique
          </h2>
          <div className="w-24 h-1 bg-ojaja-orange mx-auto mb-8"></div>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Ojaja Drinks stands apart in the beverage industry through our unwavering commitment 
            to African heritage, sustainability, and community empowerment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <Card key={index} className="p-8 shadow-soft hover:shadow-ojaja transition-all duration-300 group border-l-4 border-l-ojaja-blue bg-white">
              <item.icon className="h-12 w-12 text-ojaja-blue mb-6 group-hover:text-ojaja-pink transition-colors" />
              <h3 className="font-heading font-semibold text-xl text-ojaja-blue mb-4 group-hover:text-ojaja-pink transition-colors">
                {item.title}
              </h3>
              <p className="text-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="p-12 bg-gradient-ojaja text-white">
            <h3 className="font-heading font-bold text-3xl mb-6">
              Experience the Ojaja Difference
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of families who have discovered the perfect blend of tradition, 
              taste, and wellness in every bottle of Ojaja Drinks.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-white/80">Premium Ingredients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white/80">Natural Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-white/80">Happy Families</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;