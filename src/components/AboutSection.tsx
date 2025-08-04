import { Card } from "@/components/ui/card";
import { MapPin, Mail, Building } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-ojaja-light">
      <div className="max-w-6xl mx-auto">
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