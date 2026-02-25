import { GraduationCap } from "lucide-react";

const tracks = ["Engineering Graduates", "Food Science Students", "Marketing Interns", "Accounting Trainees"];

const CareersGraduate = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft border border-border">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-8 h-8 text-ojaja-orange" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Graduate & Internship Program</h2>
        </div>
        <p className="text-muted-foreground mb-6">We offer structured internship and entry-level opportunities for:</p>
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {tracks.map((t) => (
            <div key={t} className="flex items-center gap-2 text-foreground text-sm">
              <div className="w-2 h-2 rounded-full bg-ojaja-pink" />
              {t}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          <div><span className="font-semibold text-foreground">Duration:</span> <span className="text-muted-foreground">3–12 months</span></div>
          <div><span className="font-semibold text-foreground">Objective:</span> <span className="text-muted-foreground">Build industry-ready professionals through practical exposure.</span></div>
        </div>
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">Ojaja Drinks is an equal opportunity employer. Employment decisions are based on merit, competence, and performance capability.</p>
        </div>
      </div>
    </div>
  </section>
);

export default CareersGraduate;
