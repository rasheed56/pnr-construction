import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you shortly.",
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 flex items-center">
              <span className="w-8 h-px bg-primary inline-block mr-4"></span>
              <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase">
                Contact Us
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-md">
              Our team is available 24/7 to provide consultations and estimates for your next project.
            </p>

            <div className="space-y-8">
              <div className="flex flex-col border border-border bg-card p-6">
                <h4 className="text-sm font-medium tracking-widest text-primary uppercase mb-2">Phone (24/7)</h4>
                <a href="tel:+918525975688" className="font-serif text-3xl font-bold text-white hover:text-primary transition-colors flex items-center gap-3">
                  <Phone className="w-6 h-6" /> +91 85259 75688
                </a>
              </div>

              <div className="border border-border bg-card">
                <div className="flex border-b border-border">
                  <div className="px-6 py-3 font-semibold text-white border-b-2 border-primary bg-background">Vellore (HQ)</div>
                  <div className="px-6 py-3 font-medium text-muted-foreground hover:text-white cursor-pointer transition-colors">Bangalore</div>
                </div>
                <div className="p-6">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" /> Address
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    No.15, Bernicepuram, Katpadi,<br />
                    Vellore, Tamil Nadu 632007
                  </p>
                  <a href="https://www.google.com/maps/place/PNR+CONSTRUCTION/@12.967585,79.1354067,17z" target="_blank" rel="noopener noreferrer" className="text-primary uppercase text-sm font-bold tracking-wider hover:underline flex items-center gap-1">
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border p-8 lg:p-12 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">Send us a message</h3>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Full Name</label>
                <Input required placeholder="John Doe" className="bg-background border-border rounded-none h-12 focus-visible:ring-primary" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Phone Number</label>
                <Input required type="tel" placeholder="+91 00000 00000" className="bg-background border-border rounded-none h-12 focus-visible:ring-primary" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Project Type</label>
                <Select required>
                  <SelectTrigger className="bg-background border-border rounded-none h-12 focus:ring-primary">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border rounded-none">
                    <SelectItem value="residential">Residential Construction</SelectItem>
                    <SelectItem value="commercial">Commercial Build</SelectItem>
                    <SelectItem value="interior">Interior Design</SelectItem>
                    <SelectItem value="renovation">Renovation</SelectItem>
                    <SelectItem value="turnkey">Turnkey Project</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Message</label>
                <Textarea required placeholder="Tell us about your project..." className="bg-background border-border rounded-none min-h-[120px] focus-visible:ring-primary resize-none" />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-background hover:bg-primary/90 rounded-none uppercase tracking-wider font-semibold h-14">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
