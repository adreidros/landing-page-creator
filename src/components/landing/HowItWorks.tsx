import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Choose Your Figure",
    description:
      "Select from our catalog of historical personalities or request a custom avatar based on your exhibition needs.",
  },
  {
    number: "02",
    title: "We Build & Research",
    description:
      "Our historians and AI engineers collaborate to create an accurate, engaging digital representation.",
  },
  {
    number: "03",
    title: "Seamless Integration",
    description:
      "We deploy the avatar to your preferred display—touchscreens, holograms, or mobile devices—with full support.",
  },
  {
    number: "04",
    title: "Engage & Educate",
    description:
      "Visitors interact naturally with history. We provide analytics and continuous improvements based on engagement data.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

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
            Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            From Concept to{" "}
            <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A streamlined process that brings historical figures to life in your museum.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-8 mb-12 last:mb-0"
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-4" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-3">
                <h3 className="font-display text-2xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
