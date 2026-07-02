import logoPath from "@assets/pnr-logo.png";

export function Footer() {
  const currentYear = 2025;

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="flex items-center gap-3 mb-4">
              <img src={logoPath} alt="PNR Construction Logo" className="h-12 w-12 object-contain grayscale brightness-200" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">PNR</span>
                <span className="text-[0.7rem] tracking-[0.2em] text-primary leading-none mt-1">CONSTRUCTION</span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs text-center md:text-left">
              Turning bold ideas into lasting structures — built with precision, passion, and pride.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#services" className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase">
              Services
            </a>
            <a href="#portfolio" className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase">
              Portfolio
            </a>
            <a href="#about" className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase">
              About
            </a>
            <a href="#contact" className="text-sm font-medium tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase">
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} PNR Construction. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built with <span className="text-primary px-1 font-serif italic">precision</span> in Vellore
          </p>
        </div>
      </div>
    </footer>
  );
}
