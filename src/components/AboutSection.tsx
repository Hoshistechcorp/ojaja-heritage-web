import { Card } from "@/components/ui/card";
import { MapPin, Mail, Building } from "lucide-react";
import productsLineupImage from "@/assets/ojaja-products-lineup.png";
import heritageImage from "@/assets/african-heritage.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-ojaja-light relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heritageImage} 
          alt="African Heritage Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Family Lifestyle Image */}
        <div className="mb-16">
          <img 
            src={productsLineupImage} 
            alt="Ojaja Orange and Cola - Don't Blink, You Just Might Miss The Launch"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-ojaja"
          />
        </div>
        
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-ojaja-pink mb-6">
            Rooted in Royalty, Crafted for Wellness
          </h2>
          <div className="w-24 h-1 bg-ojaja-orange mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
            Ojaja Drinks is a proudly Nigerian beverage company committed to revitalizing families 
            through distinctly African, health-enhancing drink experiences. Born from the heritage 
            of His Imperial Majesty Oba Adeyeye Enitan Ogunwusi, the Ooni of Ife (Ojaja II).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 shadow-soft hover:shadow-ojaja transition-all duration-300 group bg-white">
            <Building className="h-12 w-12 text-ojaja-blue mb-4 group-hover:text-ojaja-pink transition-colors" />
            <h3 className="font-heading font-semibold text-xl text-ojaja-blue mb-3">Headquarters</h3>
            <p className="text-foreground">
              KM 10, Ife-Ibadan Expressway<br />
              Ile-Ife, Osun State, Nigeria
            </p>
          </Card>

          <Card className="p-8 shadow-soft hover:shadow-ojaja transition-all duration-300 group bg-white">
            <MapPin className="h-12 w-12 text-ojaja-blue mb-4 group-hover:text-ojaja-pink transition-colors" />
            <h3 className="font-heading font-semibold text-xl text-ojaja-blue mb-3">Lagos Office</h3>
            <p className="text-foreground">
              Ojaja Mall & Suites<br />
              Lekki-Ajah Expressway<br />
              Lagos, Nigeria
            </p>
          </Card>

          <Card className="p-8 shadow-soft hover:shadow-ojaja transition-all duration-300 group bg-white">
            <Mail className="h-12 w-12 text-ojaja-blue mb-4 group-hover:text-ojaja-pink transition-colors" />
            <h3 className="font-heading font-semibold text-xl text-ojaja-blue mb-3">Contact Us</h3>
            <p className="text-foreground">
              info@ojajadrinks.com<br />
              www.ojajadrinks.com
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;