import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareersHero from "@/components/careers/CareersHero";
import CareersMission from "@/components/careers/CareersMission";
import CareersWhyJoin from "@/components/careers/CareersWhyJoin";
import CareersDepartments from "@/components/careers/CareersDepartments";
import CareersOpenings from "@/components/careers/CareersOpenings";
import CareersProcess from "@/components/careers/CareersProcess";
import CareersGraduate from "@/components/careers/CareersGraduate";
import CareersCVForm from "@/components/careers/CareersCVForm";

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
      <div id="submit-cv">
        <CareersCVForm />
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
