import { motion } from "framer-motion";
import { MessageSquare, Brain, Users, Sparkles, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description:
      "Engage in authentic dialogue with historical figures. Ask questions and receive responses based on their documented knowledge and personality.",
  },
  {
    icon: Brain,
    title: "Historically Accurate",
    description:
      "Each avatar is meticulously researched and modeled to reflect accurate historical knowledge, speech patterns, and mannerisms.",
  },
  {
    icon: Users,
    title: "Multi-Language Support",
    description:
      "Break language barriers. Our avatars communicate in 50+ languages, making history accessible to all visitors.",
  },
  {
    icon: Sparkles,
    title: "Photorealistic Visuals",
    description:
      "State-of-the-art rendering creates lifelike avatars that capture the essence and appearance of historical personalities.",
  },
  {
    icon: Globe,
    title: "Any Era, Any Figure",
    description:
      "From ancient philosophers to modern pioneers. We can recreate any historical personality for your exhibition.",
  },
  {
    icon: Shield,
    title: "Museum-Grade Reliability",
    description:
      "Enterprise-level uptime and support. Designed for 24/7 museum operations with offline fallback capabilities.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Technology That{" "}
            <span className="gradient-text">Transcends Time</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI avatars combine cutting-edge technology with deep historical
            research to create immersive, educational experiences.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-8 rounded-2xl glass-card hover:bg-card/90 transition-all duration-300 hover:glow-subtle"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
