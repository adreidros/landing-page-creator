import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-primary/5" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center">
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light mb-4 uppercase tracking-[0.1em]">
            Ready to Transform Your{" "}
            <span className="gradient-text">Museum Experience?</span>
          </h2>

          <div className="w-16 h-px bg-primary/30 mx-auto my-8" />

          

          

          <div className="flex items-center justify-center">
            <Button variant="hero" size="xl" className="group">
              Schedule a demo to see our AI avatars in action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default CTA;