import heroImage from "@/assets/hero-jams.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Artisanal homemade jams on a rustic wooden table"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-up">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-4">
          Homemade with Love
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Martabanii
          <br />
          <span className="italic font-normal text-4xl md:text-5xl">مرطباني</span>
        </h1>
        <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
          Small-batch, seasonal jams made from hand-picked fruits and simple, 
          natural ingredients. Every jar tells a story.
        </p>
        <a
          href="#products"
          className="inline-block bg-primary text-primary-foreground font-body font-medium px-8 py-3 rounded-sm hover:bg-primary/90 transition-colors tracking-wide text-sm uppercase"
        >
          Explore Our Jams
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
