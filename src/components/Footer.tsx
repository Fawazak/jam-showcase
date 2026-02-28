const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Martabanii</h2>
          <p className="font-body text-primary-foreground/70 mb-8">
            Homemade jams made with love.
            <br />
            Available at local markets and by order.
          </p>
          <div className="flex justify-center gap-8 mb-8 font-body text-sm text-primary-foreground/60">
            <a href="mailto:hello@martabanii.com" className="hover:text-primary-foreground transition-colors">
              hello@martabanii.com
            </a>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8">
            <p className="font-body text-xs text-primary-foreground/40">
              © 2026 Martabanii. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
