import { motion } from "framer-motion";
import teamImge from "@/assets/team-imge.png";
import teamMax from "@/assets/team-max.png";
import teamKlara from "@/assets/team-klara.jpg";
import teamSarah from "@/assets/team-sarah.png";
import teamEmre from "@/assets/team-emre.png";

const teamMembers = [
  { name: "Imge Yüzüncüoglu", role: "M.Sc. Cognitive Systems", image: teamImge },
  { name: "Max Rütz", role: "", image: teamMax },
  { name: "Klara Klostermann", role: "B.Sc. Politics and Economics", image: teamKlara },
  { name: "Sarah-Lea Langner", role: "", image: teamSarah },
  { name: "Emre Yüzüncüoglu", role: "M.A. Ancient Cultures of the Eastern Mediterranean", image: teamEmre },
];

const sections = [
  { id: "product", label: "The Product" },
  { id: "story", label: "How It Became" },
  { id: "mission", label: "Our Mission" },
  { id: "team", label: "The Team" },
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

              {section.id === "story" ? (
                <div className="mt-8">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                    Contextless exhibition items in museums
                  </h2>
                  <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
                    <p>
                      We want to give them life and make their relevance accessible.
                    </p>
                    <ul className="space-y-4 list-none">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                        <span>Enable people to interact with historical personalities in real time.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                        <span>Enhance the learning experience.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : section.id === "team" ? (
                <div className="mt-8">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
                    Team Pilav
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {teamMembers.map((member) => (
                      <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center"
                      >
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-primary/30 mb-4 bg-secondary">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-2xl font-display font-bold text-primary">
                              {member.name.split(" ").map(n => n[0]).join("")}
                            </div>
                          )}
                        </div>
                        <h3 className="font-display text-sm font-semibold text-foreground">
                          {member.name}
                        </h3>
                        {member.role && (
                          <p className="text-xs text-muted-foreground mt-1 leading-snug">
                            {member.role}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-8 min-h-[200px] rounded-2xl border-2 border-dashed border-border/50 flex items-center justify-center">
                  <p className="text-muted-foreground/50 text-lg">
                    Content for "{section.label}" goes here
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ContentSections;
