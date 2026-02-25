import { Target, Heart, TrendingUp, Users, Star } from "lucide-react";

const values = [
  { icon: TrendingUp, label: "Performance-driven" },
  { icon: Heart, label: "Integrity-centered" },
  { icon: Target, label: "Growth-oriented" },
  { icon: Star, label: "Customer-obsessed" },
  { icon: Users, label: "Team-focused" },
];

const CareersMission = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Mission</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            To produce world-class beverages that celebrate African identity while maintaining the highest standards in quality, safety, and innovation.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Work Culture</h2>
          <div className="space-y-4">
            {values.map((v) => (
              <div key={v.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ojaja-pink/10 flex items-center justify-center">
                  <v.icon className="w-5 h-5 text-ojaja-pink" />
                </div>
                <span className="font-medium text-foreground">{v.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground italic">We reward excellence, initiative, and measurable results.</p>
        </div>
      </div>
    </div>
  </section>
);

export default CareersMission;
