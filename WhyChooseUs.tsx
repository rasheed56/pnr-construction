import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Premium Quality",
    description: "Only certified, Grade-A materials used on every project — zero compromise.",
  },
  {
    num: "02",
    title: "On-Time Delivery",
    description: "Milestone-tracked projects with transparent timelines you can count on.",
  },
  {
    num: "03",
    title: "Transparent Pricing",
    description: "Full cost breakdown before work begins. No hidden charges, ever.",
  },
  {
    num: "04",
    title: "Expert Team",
    description: "Certified engineers, experienced architects & skilled craftsmen on every site.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center">
              <span className="w-8 h-px bg-primary inline-block mr-4"></span>
              <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase">
                Why Choose PNR
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-12">
              The PNR Difference
            </h2>

            <div className="space-y-10">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="font-serif text-4xl md:text-5xl font-bold text-primary opacity-50 select-none">
                    {pillar.num}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative h-full min-h-[600px] border border-border p-4 bg-card"
          >
            <div 
              className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
              style={{ backgroundImage: 'url("/process-1.png")' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
