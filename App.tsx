import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Portfolio } from "./components/sections/Portfolio";
import { Gallery } from "./components/sections/Gallery";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { Process } from "./components/sections/Process";
import { Testimonials } from "./components/sections/Testimonials";
import { CtaBanner } from "./components/sections/CtaBanner";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

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
