import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Consultation & Vision",
    description: "We listen deeply to understand your goals, budget, site constraints, and aesthetic preferences.",
  },
  {
    num: "02",
    title: "Architectural Design",
    description: "Expert architects draft beautiful, functional plans with 3D walkthroughs for your approval.",
  },
  {
    num: "03",
    title: "Construction",
    description: "Rigorous execution with premium materials and daily quality checks at every milestone.",
  },
  {
    num: "04",
    title: "Handover & Support",
    description: "Meticulous final inspection followed by a dedicated post-completion support period.",
  },
];

export function Process() {
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
              How We Work
            </span>
            <span className="w-8 h-px bg-primary inline-block ml-4"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            The PNR Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border p-8 relative overflow-hidden group"
            >
              <div className="font-serif text-7xl font-bold text-primary/10 absolute -top-4 -right-4 group-hover:text-primary/20 transition-colors duration-300">
                {step.num}
              </div>
              
              <div className="relative z-10">
                <div className="text-primary font-serif font-bold text-xl mb-4">Step {step.num}</div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
