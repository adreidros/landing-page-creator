import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-temple.jpg";
import dschoolLogo from "@/assets/logo-hpi-d-school.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mystical sunken library with ancient manuscripts"
           className="w-full h-full object-cover opacity-60" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </div>

      {/* Single subtle glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto">
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display font-light leading-[1.3] mt-16 mb-8 uppercase tracking-[0.15em] text-foreground">
            
            <span className="text-3xl md:text-4xl lg:text-5xl block mb-3 text-foreground/70">
              <span className="text-primary">HISTORY</span> STANDS BEFORE YOU
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl block">
              Hear the <span className="text-primary">Voices of the Past</span>
            </span>
          </motion.h1>

          {/* Subtle divider */}
          <motion.div initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-px bg-primary/40 mx-auto mb-8" />
          

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-body leading-relaxed">
            
            Interactive AI avatars of historical personalities that engage in conversation with your museum guests.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <a href="mailto:info@reviving-history.de">
              <Button variant="hero" size="xl" className="group">
                Contact us to Schedule a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 pt-8 border-t border-border/20">
            
            <p className="text-xs text-muted-foreground/60 uppercase tracking-[0.2em] mb-5">
              Supported by
            </p>
            <div className="flex items-center justify-center gap-10 flex-wrap">
              <img
                src={dschoolLogo}
                alt="HPI D-School"
                className="h-7 opacity-60"
                style={{ filter: "brightness(0) invert(1) opacity(0.7)" }} />
              
              <span className="text-sm font-display font-light text-foreground/50 tracking-wider">
                Potsdam Transfer
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default Hero;