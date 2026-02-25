const steps = [
  { num: "01", title: "Online Application", desc: "Submit your CV and complete the digital application form." },
  { num: "02", title: "Initial Screening", desc: "HR reviews applications based on role requirements and performance alignment." },
  { num: "03", title: "Assessment / Interview", desc: "Shortlisted candidates undergo structured interviews and/or technical assessments." },
  { num: "04", title: "Final Selection", desc: "Top-performing candidates receive an offer letter." },
  { num: "05", title: "Onboarding", desc: "Comprehensive onboarding and departmental integration." },
];

const CareersProcess = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">Application Process</h2>
      <div className="max-w-3xl mx-auto space-y-0">
        {steps.map((s, i) => (
          <div key={s.num} className="flex gap-6 items-start">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-ojaja flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">{s.num}</div>
              {i < steps.length - 1 && <div className="w-0.5 h-16 bg-border" />}
            </div>
            <div className="pb-10">
              <h3 className="font-heading font-bold text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CareersProcess;
