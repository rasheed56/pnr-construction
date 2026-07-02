import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const projects = [
  {
    title: "Premium Villa — Katpadi",
    type: "Residential",
    location: "Katpadi, Vellore",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Corporate Office Build",
    type: "Commercial",
    location: "Vellore, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Luxury Living Room Design",
    type: "Interior",
    location: "Vellore, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Premium Kitchen Interior",
    type: "Interior",
    location: "Bangalore, Karnataka",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=900&q=80",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background">
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
                Our Work
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              A selection of our finest residential, commercial & interior builds.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button className="bg-primary text-background hover:bg-primary/90 rounded-none uppercase tracking-wider font-semibold group h-12 px-6">
              Start Your Project <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden aspect-[4/3] bg-card border border-border cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 transition-opacity duration-300" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/40 backdrop-blur-[2px] z-10">
                <span className="border border-white text-white px-6 py-3 tracking-widest uppercase text-sm font-medium hover:bg-white hover:text-black transition-colors">
                  View Full
                </span>
              </div>

              <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                <Badge className="bg-primary text-background hover:bg-primary rounded-none mb-4 tracking-widest font-bold uppercase text-xs">
                  {project.type}
                </Badge>
                <h3 className="font-serif text-3xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
