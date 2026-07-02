import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Rajesh Kumar",
    project: "Homeowner, Katpadi",
    quote: "PNR Construction turned our dream home into reality. Their attention to detail and material quality is unmatched in Vellore.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    project: "Business Owner, Vellore",
    quote: "We hired PNR for our commercial office space. They delivered on time, within budget, and the final result is absolutely stunning.",
    rating: 5,
  },
  {
    name: "Anand & Family",
    project: "Residential Client",
    quote: "The interior design team understood our vision perfectly. Our home feels like a luxury resort. Highly recommend their services.",
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-4 flex items-center">
              <span className="w-8 h-px bg-primary inline-block mr-4"></span>
              <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase">
                Client Love
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-muted-foreground text-lg">
              Hear from families and businesses we've built with across Tamil Nadu.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button variant="outline" className="border-border text-white hover:bg-card rounded-none uppercase tracking-wider font-semibold h-12 px-6">
              Write a Review
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card border border-border p-8 flex flex-col"
            >
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                "{t.quote}"
              </p>
              
              <div className="border-t border-border pt-6">
                <h4 className="font-bold text-white font-serif text-xl mb-1">{t.name}</h4>
                <span className="text-sm text-primary uppercase tracking-wider">{t.project}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
