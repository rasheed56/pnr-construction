import { motion } from "framer-motion";
import { Building2, Home, PaintBucket, Hammer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Residential",
    description: "Bespoke luxury homes and premium villas built to your exact specifications and budget.",
    icon: Home,
  },
  {
    title: "Commercial",
    description: "Commanding office spaces and retail structures designed for business success.",
    icon: Building2,
  },
  {
    title: "Interior Design",
    description: "Striking, sophisticated interiors that marry form, function, and feeling perfectly.",
    icon: PaintBucket,
  },
  {
    title: "Renovation",
    description: "Complete architectural transformations and premium remodeling across every room.",
    icon: Hammer,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center">
            <span className="w-8 h-px bg-primary inline-block mr-4"></span>
            <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase">
              What We Build
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Our Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Comprehensive construction and design services executed with masterful precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-background border-border hover:border-primary/50 transition-colors duration-300 h-full rounded-none">
                  <CardHeader className="p-8">
                    <div className="w-14 h-14 bg-card border border-border flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-2xl text-white mb-4">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
