import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="relative py-32 overflow-hidden border-y border-border">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80")' }}
      />
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Build Your Legacy?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Partner with Vellore's most trusted construction company — 5 stars, 50+ projects, zero compromise.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto bg-primary text-background hover:bg-primary/90 rounded-none uppercase tracking-wider font-semibold h-14 px-8">
              Get a Free Consultation
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-background rounded-none uppercase tracking-wider font-semibold h-14 px-8">
              <a href="tel:+918525975688">Call Now</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
