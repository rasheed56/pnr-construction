import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center"
          >
            <span className="w-8 h-px bg-primary inline-block mr-4"></span>
            <span className="text-primary tracking-[0.2em] text-sm md:text-base font-medium uppercase">
              VELLORE'S PREMIUM BUILDER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-8 text-white max-w-4xl"
          >
            We Build <em className="text-primary italic">What You</em><br />Imagine.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-[420px] text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
          >
            Your dream home or commercial space starts here. PNR Construction turns bold ideas into lasting structures — built with precision, passion, and pride across Vellore and Bangalore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-primary text-background hover:bg-primary/90 rounded-none uppercase tracking-wider font-semibold group h-14 px-8">
              START YOUR PROJECT <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-background rounded-none uppercase tracking-wider font-semibold h-14 px-8">
              VIEW OUR WORK
            </Button>
          </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-8 flex items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground rotate-[-90deg] origin-left translate-y-8">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-primary mt-12 ml-[-1rem]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
