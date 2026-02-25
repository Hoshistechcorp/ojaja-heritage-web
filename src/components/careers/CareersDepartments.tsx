import { Factory, ShieldCheck, Truck, Megaphone, Palette, Calculator, UsersRound, FlaskConical, Briefcase, Monitor, Headphones } from "lucide-react";

const departments = [
  { icon: Factory, name: "Manufacturing & Production", desc: "Drive the core of our operations — from bottling lines to quality-controlled production systems." },
  { icon: ShieldCheck, name: "Quality Assurance & Compliance", desc: "Ensure product safety, regulatory compliance, and production standards." },
  { icon: Truck, name: "Supply Chain & Logistics", desc: "Manage procurement, warehousing, and nationwide distribution efficiency." },
  { icon: Megaphone, name: "Sales & Trade Marketing", desc: "Expand our market presence and strengthen distributor partnerships." },
  { icon: Palette, name: "Brand, Marketing & Communications", desc: "Shape the voice and visibility of Ojaja Drinks across media platforms." },
  { icon: Calculator, name: "Finance & Accounts", desc: "Maintain financial control, reporting, and cost optimization." },
  { icon: UsersRound, name: "Human Resources & Administration", desc: "Recruit, develop, and manage top-tier talent." },
  { icon: FlaskConical, name: "Research & Product Development", desc: "Innovate beverage formulations and packaging solutions." },
  { icon: Briefcase, name: "Corporate Strategy & Business Development", desc: "Drive expansion, partnerships, and long-term growth initiatives." },
  { icon: Monitor, name: "IT & Digital Systems", desc: "Support ERP systems, data management, and digital infrastructure." },
  { icon: Headphones, name: "Customer Experience & Support", desc: "Deliver excellence in customer and distributor relations." },
];

const CareersDepartments = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">Career Departments</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Explore opportunities across the following departments:</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((d) => (
          <div key={d.name} className="group border border-border rounded-xl p-5 hover:border-ojaja-pink/50 hover:shadow-soft transition-all">
            <d.icon className="w-8 h-8 text-ojaja-orange mb-3 group-hover:text-ojaja-pink transition-colors" />
            <h3 className="font-heading font-bold text-foreground mb-1 text-sm">{d.name}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CareersDepartments;
