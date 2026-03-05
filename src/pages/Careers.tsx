import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import CareersHero from "@/components/careers/CareersHero";
import CareersMission from "@/components/careers/CareersMission";
import CareersWhyJoin from "@/components/careers/CareersWhyJoin";
import CareersDepartments from "@/components/careers/CareersDepartments";
import CareersOpenings from "@/components/careers/CareersOpenings";
import CareersProcess from "@/components/careers/CareersProcess";
import CareersGraduate from "@/components/careers/CareersGraduate";
const TALENT_POOL_URL = "https://forms.gle/UPFcVZdecBLqWELKA";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CareersHero />
      <CareersMission />
      <CareersWhyJoin />
      <CareersDepartments />
      <CareersOpenings />
      <CareersProcess />
      <CareersGraduate />
      <div id="submit-cv" className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Submit Your CV</h2>
          <p className="text-muted-foreground mb-10">If no current role matches your profile, submit your CV for future consideration.</p>
          <a href={TALENT_POOL_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-ojaja text-primary-foreground rounded-full py-6 px-8 text-base font-semibold">
              Join Ojaja Talent Pool
            </Button>
          </a>
        </div>
      </div>
      <div className="bg-gradient-ojaja py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Ready to Grow With Us?</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">Join a company where culture meets quality and ambition meets opportunity.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#openings" className="bg-background text-foreground font-semibold px-8 py-3 rounded-full hover:shadow-elegant transition-all">View Open Positions</a>
            <a href="#submit-cv" className="border-2 border-primary-foreground text-primary-foreground font-semibold px-8 py-3 rounded-full hover:bg-primary-foreground/10 transition-all">Submit Your CV</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
