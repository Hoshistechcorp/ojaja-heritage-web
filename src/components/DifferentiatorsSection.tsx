import { Card } from "@/components/ui/card";
import { CheckCircle, Globe, Leaf, Star, Award, Heart } from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";
import peopleImage from "@/assets/people-enjoying.jpg";

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
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={patternBg} 
          alt="African pattern background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
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

        {/* Call to Action with Image */}
        <div className="mt-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Fun Image */}
            <div className="animate-fade-in">
              <img 
                src={peopleImage} 
                alt="People enjoying Ojaja drinks" 
                className="w-full h-[300px] object-cover rounded-2xl shadow-ojaja"
              />
            </div>
            
            {/* Right - Call to Action */}
            <Card className="p-8 bg-gradient-ojaja text-white">
              <h3 className="font-heading font-bold text-3xl mb-6">
                Experience the Ojaja Difference
              </h3>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of families who have discovered the perfect blend of tradition, 
                taste, and wellness in every bottle of Ojaja Drinks.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-white/80 text-sm">Premium Ingredients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-white/80 text-sm">Natural Products</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-white/80 text-sm">Happy Families</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;