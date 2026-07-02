import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center">
              <span className="w-8 h-px bg-primary inline-block mr-4"></span>
              <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase">
                Who We Are
              </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Built on a Foundation of Absolute Trust.
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              At PNR Construction, we don't just build structures — we build legacies. With an unwavering commitment to precision and a portfolio of Tamil Nadu's most prestigious projects, we turn bold architectural visions into concrete reality across Vellore and Bangalore.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-10">
              <div>
                <span className="block text-3xl font-serif font-bold text-white mb-1">5+</span>
                <span className="text-sm text-primary uppercase tracking-wider">Years of Excellence</span>
              </div>
              <div className="w-px bg-border hidden sm:block"></div>
              <div>
                <span className="block text-3xl font-serif font-bold text-white mb-1">50+</span>
                <span className="text-sm text-primary uppercase tracking-wider">Projects Delivered</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Badge variant="outline" className="rounded-none border-primary/50 text-white bg-primary/10 px-4 py-2 text-sm font-normal">
                5-Star Rated Builder
              </Badge>
              <Badge variant="outline" className="rounded-none border-border text-white bg-card px-4 py-2 text-sm font-normal">
                Vellore · Bangalore
              </Badge>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground border border-border px-4 py-2 bg-card">
                <span className="text-primary">★</span> 5.0 Google Rating
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground border border-border px-4 py-2 bg-card">
                <span className="text-primary">⏱</span> Open 24 Hours · Katpadi, Vellore
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] bg-card border border-border"
          >
            <div 
              className="absolute inset-2 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80")' }}
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
