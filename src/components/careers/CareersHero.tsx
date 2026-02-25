const CareersHero = () => (
  <section className="relative bg-gradient-ojaja py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
    </div>
    <div className="container mx-auto px-6 relative z-10 text-center">
      <p className="text-primary-foreground/80 uppercase tracking-widest text-sm mb-4 font-semibold">Careers at Ojaja Drinks</p>
      <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">Join the Team Behind the Taste</h1>
      <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto mb-10">
        At Ojaja Drinks, we combine innovation, culture, and manufacturing excellence to create beverages that represent heritage and modern quality. If you are driven, disciplined, and growth-focused, we want you on our team.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#openings" className="bg-background text-foreground font-semibold px-8 py-3 rounded-full hover:shadow-elegant transition-all">View Open Roles</a>
        <a href="#submit-cv" className="border-2 border-primary-foreground text-primary-foreground font-semibold px-8 py-3 rounded-full hover:bg-primary-foreground/10 transition-all">Submit Your CV</a>
      </div>
    </div>
  </section>
);

export default CareersHero;
