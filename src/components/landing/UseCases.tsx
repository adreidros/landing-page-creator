import { motion } from "framer-motion";
import { Building2, GraduationCap, Landmark, BookOpen } from "lucide-react";

const useCases = [
  {
    icon: Landmark,
    title: "History Museums",
    description:
      "Transform exhibits with interactive conversations. Let visitors ask Napoleon about Waterloo or Einstein about relativity.",
    stat: "3x",
    statLabel: "visitor engagement",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description:
      "Bring textbooks to life. Students learn more effectively when they can interact directly with historical figures.",
    stat: "85%",
    statLabel: "improved retention",
  },
  {
    icon: Building2,
    title: "Corporate Heritage Centers",
    description:
      "Showcase your company's history through the founders themselves. Perfect for brand storytelling.",
    stat: "40%",
    statLabel: "longer visit time",
  },
  {
    icon: BookOpen,
    title: "Libraries & Archives",
    description:
      "Make rare collections accessible. Authors discuss their works, scientists explain their discoveries.",
    stat: "2x",
    statLabel: "return visitors",
  },
];

const UseCases = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Use Cases
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Where History{" "}
            <span className="gradient-text">Comes Alive</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI avatars enhance visitor experiences across diverse cultural and educational institutions.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-display font-bold text-primary">
                      {useCase.stat}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {useCase.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
