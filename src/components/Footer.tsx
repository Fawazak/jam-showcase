const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Meadow & Berry</h2>
          <p className="font-body text-primary-foreground/70 mb-8">
            Handcrafted jams from our kitchen to your table.
            <br />
            Available at local farmers markets and by order.
          </p>
          <div className="flex justify-center gap-8 mb-8 font-body text-sm text-primary-foreground/60">
            <a href="mailto:hello@meadowandberry.com" className="hover:text-primary-foreground transition-colors">
              hello@meadowandberry.com
            </a>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8">
            <p className="font-body text-xs text-primary-foreground/40">
              © 2026 Meadow & Berry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
