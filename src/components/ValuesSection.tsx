import { Card } from "@/components/ui/card";
import { Heart, Leaf, Lightbulb, Crown } from "lucide-react";
import wellnessImage from "@/assets/wellness-hands.jpg";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-ojaja-pink mb-6">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-ojaja-orange mb-8"></div>
            <p className="text-xl text-foreground">
              Every bottle of Ojaja Drinks embodies our commitment to excellence, 
              heritage, and the well-being of African families.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="animate-fade-in">
            <img 
              src={wellnessImage} 
              alt="Wellness and healthy lifestyle" 
              className="w-full h-[400px] object-cover rounded-2xl shadow-soft"
            />
          </div>
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

        {/* Vision & Mission Statement */}
        <div className="mt-20 bg-gradient-to-br from-ojaja-light via-white to-ojaja-light rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-ojaja-pink mb-6">
              Vision & Mission Statement
            </h2>
            <div className="w-24 h-1 bg-ojaja-orange mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="text-center lg:text-left">
              <h3 className="font-heading font-bold text-2xl text-ojaja-blue mb-6 flex items-center justify-center lg:justify-start">
                <Crown className="w-8 h-8 mr-3 text-ojaja-pink" />
                Our Vision
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                To become the leading Pan African brand promoting health, tradition, and 
                innovation on a global scale.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center lg:text-left">
              <h3 className="font-heading font-bold text-2xl text-ojaja-blue mb-6 flex items-center justify-center lg:justify-start">
                <Heart className="w-8 h-8 mr-3 text-ojaja-orange" />
                Our Mission
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                To revitalize families and communities worldwide by offering beverages 
                made from high-quality, locally sourced African ingredients — using 
                sustainable methods and innovative formulations that promote wellness 
                and cultural pride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;