import { motion } from "framer-motion";

const sections = [
  {
    id: "product",
    label: "The Product",
  },
  {
    id: "story",
    label: "How It Became",
  },
  {
    id: "mission",
    label: "Our Mission",
  },
  {
    id: "team",
    label: "Who Are We",
  },
];

const ContentSections = () => {
  return (
    <>
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-24 ${index % 2 === 1 ? "bg-secondary/30" : ""}`}
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                {section.label}
              </span>
              
              {/* Placeholder content area */}
              <div className="mt-8 min-h-[200px] rounded-2xl border-2 border-dashed border-border/50 flex items-center justify-center">
                <p className="text-muted-foreground/50 text-lg">
                  Content for "{section.label}" goes here
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ContentSections;
