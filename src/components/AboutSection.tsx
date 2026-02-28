const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-3">
          Our Story
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
          Made with Care,
          <br />
          <span className="italic font-normal">Shared with Joy</span>
        </h2>
        <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
          <p>
            Meadow & Berry began in a small farmhouse kitchen, where generations of family 
            recipes met fresh, locally-sourced fruits. Every jar is made by hand in small 
            batches, ensuring the quality and flavor that only patience and love can bring.
          </p>
          <p>
            We use only seasonal fruits at their peak ripeness, pure cane sugar, and a touch 
            of lemon. No artificial preservatives, no shortcuts — just honest, beautiful jam 
            the way it was meant to be.
          </p>
        </div>
        <div className="mt-12 flex justify-center gap-12 text-center">
          <div>
            <p className="font-display text-3xl font-bold text-primary">100%</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Natural</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-primary">Small</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Batch</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-primary">Local</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Fruits</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
