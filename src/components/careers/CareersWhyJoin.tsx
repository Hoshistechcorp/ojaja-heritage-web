import { Rocket, BarChart3, DollarSign, GraduationCap, Award } from "lucide-react";

const benefits = [
  { icon: Rocket, title: "Industry Growth Exposure", desc: "Be part of a fast-expanding beverage brand." },
  { icon: BarChart3, title: "Structured Career Path", desc: "Clear performance metrics and promotion opportunities." },
  { icon: DollarSign, title: "Competitive Compensation", desc: "Performance-based incentives." },
  { icon: GraduationCap, title: "Skills Development", desc: "Continuous training and operational excellence programs." },
  { icon: Award, title: "Strong Brand Vision", desc: "Contribute to a legacy-driven African beverage company." },
];

const CareersWhyJoin = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">Why Work With Ojaja Drinks?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {benefits.map((b) => (
          <div key={b.title} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-gradient-ojaja flex items-center justify-center mb-4">
              <b.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CareersWhyJoin;
