import { Card } from "@/components/ui/card";
import { Heart, Leaf, Lightbulb, Crown } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: Crown,
      title: "Heritage",
      description: "Celebrating African traditions in every bottle",
      color: "text-royal-gold"
    },
    {
      icon: Heart,
      title: "Wellness",
      description: "Functional drinks for body and mind",
      color: "text-terracotta"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Ethical sourcing, eco-friendly packaging",
      color: "text-african-green"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Tradition meets modern beverage science",
      color: "text-royal-gold"
    }
  ];

  return (
    <section className="py-20 px-6 bg-african-green">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-8"></div>
          <p className="text-xl text-cream max-w-3xl mx-auto">
            Every bottle of Ojaja Drinks embodies our commitment to excellence, 
            heritage, and the well-being of African families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <value.icon className={`h-16 w-16 ${value.color} mb-6 group-hover:scale-110 transition-transform`} />
              <h3 className="font-heading font-semibold text-2xl text-white mb-4">
                {value.title}
              </h3>
              <p className="text-cream leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;