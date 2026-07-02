import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Stats } from "./Stats";
import { About } from "./About";
import { Services } from "./Services";
import { Portfolio } from "./Portfolio";
import { Gallery } from "./Gallery";
import { WhyChooseUs } from "./WhyChooseUs";
import { Process } from "./Process";
import { Testimonials } from "./Testimonials";
import { CtaBanner } from "./CtaBanner";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { useEffect } from "react";
import { Toaster } from "./toaster";
import { TooltipProvider } from "./tooltip";

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-background">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Services />
          <Portfolio />
          <Gallery />
          <WhyChooseUs />
          <Process />
          <Testimonials />
          <CtaBanner />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <Toaster />
      </div>
    </TooltipProvider>
  );
}

export default App;
