import { Card } from "@/components/ui/card";
import { Heart, Leaf, Lightbulb, Crown } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: Crown,
      title: "Heritage",
      description: "Celebrating African traditions in every bottle",
      color: "text-ojaja-pink"
    },
    {
      icon: Heart,
      title: "Wellness",
      description: "Functional drinks for body and mind",
      color: "text-ojaja-orange"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Ethical sourcing, eco-friendly packaging",
      color: "text-ojaja-green"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Tradition meets modern beverage science",
      color: "text-ojaja-blue"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-ojaja-pink mb-6">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-ojaja-orange mx-auto mb-8"></div>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Every bottle of Ojaja Drinks embodies our commitment to excellence, 
            heritage, and the well-being of African families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-8 bg-white shadow-soft hover:shadow-ojaja transition-all duration-300 group border">
              <value.icon className={`h-16 w-16 ${value.color} mb-6 group-hover:scale-110 transition-transform`} />
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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