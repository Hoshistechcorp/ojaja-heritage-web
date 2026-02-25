import { useState } from "react";
import { MapPin, Building2, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  reportsTo: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

const jobs: Job[] = [
  {
    title: "Production Supervisor",
    department: "Manufacturing & Production",
    location: "Lagos State",
    type: "Full-Time",
    reportsTo: "Plant Manager",
    overview: "Oversee daily production activities across bottling, PET and Cans lines to ensure efficiency, quality compliance, and minimal downtime.",
    responsibilities: ["Supervise machine operators and line staff", "Monitor daily production targets and output", "Ensure GMP and safety compliance", "Coordinate preventive maintenance", "Minimize wastage and downtime"],
    requirements: ["B.Sc./HND in Engineering or related discipline", "3–5 years FMCG production experience", "Strong leadership and reporting skills"],
  },
  {
    title: "Quality Assurance Officer",
    department: "Quality Assurance & Compliance",
    location: "Lagos State",
    type: "Full-Time",
    reportsTo: "QA Manager",
    overview: "Ensure product safety, quality consistency, and regulatory compliance.",
    responsibilities: ["Conduct lab tests and quality checks", "Maintain production quality documentation", "Ensure regulatory standards compliance", "Conduct internal quality audits"],
    requirements: ["Degree in Food Science, Microbiology, or Chemistry", "2–4 years in beverage or FMCG QA", "Strong analytical skills"],
  },
  {
    title: "Regional Sales Manager",
    department: "Sales & Trade Marketing",
    location: "South West, South East, South South, North West, North East & North Central",
    type: "Full-Time",
    reportsTo: "National Sales Manager",
    overview: "Drive revenue growth and distributor network expansion across the region of application.",
    responsibilities: ["Develop and manage distributor channels", "Achieve monthly and quarterly sales targets", "Execute trade marketing initiatives", "Monitor competitor activities", "Manage territory development officers"],
    requirements: ["5+ years FMCG sales experience", "Proven distributor management record", "Strong negotiation skills"],
  },
  {
    title: "Trade Marketing Executive",
    department: "Sales & Marketing",
    location: "Lagos",
    type: "Full-Time",
    reportsTo: "Marketing Manager",
    overview: "Support in-store visibility, promotions, and retail activation programs.",
    responsibilities: ["Execute BTL campaigns", "Coordinate POS materials", "Monitor retail visibility standards", "Report ROI on trade promotions"],
    requirements: ["Degree in Marketing or Business", "2–3 years FMCG trade marketing experience"],
  },
  {
    title: "Procurement & Supply Chain Officer",
    department: "Supply Chain & Logistics",
    location: "Lagos State",
    type: "Full-Time",
    reportsTo: "Supply Chain Manager",
    overview: "Manage sourcing of raw materials, packaging, and logistics coordination.",
    responsibilities: ["Vendor sourcing and negotiation", "Monitor stock levels and reorder points", "Coordinate inbound and outbound logistics", "Ensure cost optimization"],
    requirements: ["Degree in Supply Chain, Business, or related field", "3–5 years procurement experience"],
  },
  {
    title: "Brand & Digital Marketing Executive",
    department: "Brand & Communications",
    location: "Lagos",
    type: "Full-Time",
    reportsTo: "Brand Manager",
    overview: "Develop and execute digital campaigns to increase brand awareness and engagement.",
    responsibilities: ["Manage social media channels", "Coordinate influencer partnerships", "Create campaign performance reports", "Support product launch activations"],
    requirements: ["Degree in Marketing, Media, or Communications", "2–4 years digital marketing experience", "Strong content and analytics skills"],
  },
  {
    title: "Accountant",
    department: "Finance & Accounts",
    location: "Lagos State",
    type: "Full-Time",
    reportsTo: "Group Finance Manager",
    overview: "Handle financial reporting, reconciliations, and cost monitoring.",
    responsibilities: ["Prepare financial statements", "Monitor production costs", "Manage payables and receivables", "Assist in budgeting"],
    requirements: ["B.Sc. in Accounting", "ICAN/ACCA (added advantage)", "3+ years accounting experience"],
  },
  {
    title: "HR & Talent Acquisition Officer",
    department: "Human Resources",
    location: "Lagos",
    type: "Full-Time",
    reportsTo: "Group HR Manager",
    overview: "Manage recruitment, onboarding, and performance tracking.",
    responsibilities: ["Coordinate hiring processes", "Conduct interviews and screenings", "Manage employee documentation", "Support performance evaluation cycles"],
    requirements: ["Degree in HR or related field", "2–4 years HR experience"],
  },
  {
    title: "IT Support Officer",
    department: "IT & Digital Systems",
    location: "Lagos State",
    type: "Full-Time",
    reportsTo: "IT Manager",
    overview: "Provide technical support across plant and office operations.",
    responsibilities: ["Maintain ERP systems", "Troubleshoot hardware/software issues", "Ensure data security compliance", "Manage internal network systems"],
    requirements: ["Degree in Computer Science or IT", "2–4 years IT support experience"],
  },
  {
    title: "Customer Service Representative",
    department: "Customer Experience",
    location: "Lagos",
    type: "Full-Time",
    reportsTo: "Customer Experience Manager",
    overview: "Handle customer inquiries and distributor support services.",
    responsibilities: ["Manage inbound calls and emails", "Resolve complaints professionally", "Maintain CRM records", "Support distributor communication"],
    requirements: ["OND/HND/B.Sc.", "Strong communication skills", "1–3 years customer service experience"],
  },
];

const allDepartments = ["All", ...Array.from(new Set(jobs.map((j) => j.department)))];

const CareersOpenings = () => {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "All" ? jobs : jobs.filter((j) => j.department === filter);

  return (
    <section id="openings" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">Current Openings</h2>
        <p className="text-muted-foreground text-center mb-8">Find the role that fits your expertise</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {allDepartments.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filter === d
                  ? "bg-ojaja-pink text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:border-ojaja-pink/50"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filtered.map((job) => {
            const isOpen = expanded === job.title;
            return (
              <div key={job.title} className="bg-card rounded-xl border border-border overflow-hidden shadow-soft">
                <button
                  onClick={() => setExpanded(isOpen ? null : job.title)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Building2 className="w-3 h-3" />{job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{job.type}</span>
                    </div>
                  </div>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 border-t border-border pt-4 space-y-4 animate-fade-in">
                    <p className="text-muted-foreground text-sm"><strong className="text-foreground">Reports To:</strong> {job.reportsTo}</p>
                    <p className="text-muted-foreground text-sm">{job.overview}</p>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">Key Responsibilities</h4>
                      <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                        {job.responsibilities.map((r) => <li key={r}>{r}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">Requirements</h4>
                      <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                        {job.requirements.map((r) => <li key={r}>{r}</li>)}
                      </ul>
                    </div>
                    <a href="#submit-cv">
                      <Button className="bg-gradient-ojaja text-primary-foreground rounded-full mt-2">Apply Now</Button>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareersOpenings;
