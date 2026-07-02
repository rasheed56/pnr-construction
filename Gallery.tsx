import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const images = [
  { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=90", title: "Warm Gold Living Room", category: "Interior" },
  { url: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=900&q=90", title: "Luxury Master Bedroom", category: "Interior" },
  { url: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=900&q=90", title: "Premium Modular Kitchen", category: "Interior" },
  { url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=90", title: "Modern Villa Exterior", category: "Exterior" },
  { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=90", title: "Elegant Open Living Space", category: "Interior" },
  { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=90", title: "Slab & Steelwork", category: "Build" },
  { url: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=900&q=90", title: "Designer Bedroom Suite", category: "Interior" },
  { url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=90", title: "Luxury Bathroom Finish", category: "Interior" },
  { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=90", title: "Contemporary Home Elevation", category: "Exterior" },
  { url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=90", title: "Expert Site Team", category: "Build" },
  { url: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=900&q=90", title: "Sleek White Kitchen", category: "Interior" },
  { url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=90", title: "Cosy Lounge & Reading Corner", category: "Interior" }
];

export function Gallery() {
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="mb-4 flex items-center justify-center">
            <span className="w-8 h-px bg-primary inline-block mr-4"></span>
            <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase">
              Our Work in Pictures
            </span>
            <span className="w-8 h-px bg-primary inline-block ml-4"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Construction, Interiors & Design
          </h2>
          <p className="text-muted-foreground text-lg">
            From raw concrete to refined living spaces — a glimpse of PNR craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="group relative aspect-square overflow-hidden bg-background border border-border"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.url})` }}
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <Badge className="bg-primary text-background hover:bg-primary rounded-none mb-3 tracking-widest uppercase text-[10px]">
                  {item.category}
                </Badge>
                <h3 className="font-serif text-lg font-bold text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="bg-primary text-background hover:bg-primary/90 rounded-none uppercase tracking-wider font-semibold h-14 px-10">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
