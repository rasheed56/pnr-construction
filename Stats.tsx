import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(end: number, duration = 1800, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);
  return count;
}

const statsData = [
  { end: 5, suffix: "+", label: "YEARS" },
  { end: 50, suffix: "+", label: "PROJECTS" },
  { end: 100, suffix: "%", label: "ON-TIME" },
  { end: 5, suffix: "★", label: "RATING" },
];

function StatItem({ stat, started }: { stat: typeof statsData[0]; started: boolean }) {
  const count = useCountUp(stat.end, 1800, started);
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-8">
      <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
        {count}{stat.suffix}
      </span>
      <span className="text-xs md:text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
        {stat.label}
      </span>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-border">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatItem stat={stat} started={isInView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
