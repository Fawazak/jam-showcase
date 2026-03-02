import logo from "@/assets/logo.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Martabanii logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-2xl font-bold text-foreground tracking-wide">Martabanii</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#products" className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Our Collection
          </a>
          <a href="#about" className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Our Story
          </a>
          <a href="#contact" className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
