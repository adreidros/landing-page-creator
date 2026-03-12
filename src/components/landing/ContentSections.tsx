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

const ContentSections = () => {
  return (
    <div className="container mx-auto px-6">

      {/* Vision text (left) + Demo video (right) */}
      <section className="pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Vision text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              We Catch Echoes of the Eternal
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground font-body leading-relaxed">
              <p>
                Transform an exhibition into the Macedonian court and have visitors be received by Alexander the Great himself. The conquerer grants you an audience and you can ask him everything you want. About his campaigns, his personal life – or maybe you are curious about his favorite breakfast beverage?
              </p>
              <p>
                Would you rather want to have a conversation with Gaius Caius, son of a freed slave, who made a living as baker in Ancient Rome?
              </p>
              <p>
                This is what we are providing. Interactive AI-powered avatars of historical personalities, both famous and unknown, equipped with the capacity to engage in conversation with museum guests.
              </p>
            </div>
          </motion.div>

          {/* Right: Demo video */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="demo"
            className="w-full rounded-2xl bg-secondary border border-border flex items-center justify-center"
          >
            <div className="text-center text-muted-foreground py-20">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm">Demo Video</p>
            </div>
          </motion.div>
        </div>

        {/* Subheader - full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-primary/10 border border-primary/20"
        >
          <p className="font-display text-xl md:text-2xl font-semibold text-foreground leading-snug text-center">
            Transform your exhibition into a stage for dialogue that transcends millenia
          </p>
        </motion.div>
      </section>

      {/* Product (left) + Motivation (right) */}
      <section id="product" className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-secondary/30 border border-border/50"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">The Product</span>
            <div className="mt-4 space-y-4 text-lg text-muted-foreground font-body leading-relaxed">
              <p>
                Great personalities have a lot to say – far more than can fit on an information board. Our AI-powered avatars follow our ethical guidelines and have access to historically curated databases chosen by you – and only those databases.
              </p>
              <p>
                They are always open to conversation and convey the information that visitors are really interested in. This means that both young history enthusiasts and experienced season ticket holders get their money's worth.
              </p>
              <p>
                The knowledge of an entire permanent exhibition gathered on the surface of a single screen.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="motivation"
            className="p-8 rounded-2xl bg-secondary/30 border border-border/50"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Motivation</span>
            <div className="mt-4 space-y-4 text-lg text-muted-foreground font-body leading-relaxed">
              <p>
                Reviving History began as a student project at the Hasso Plattner Institute's d-school in collaboration with the Egyptian exhibition at the Neues Museum Berlin. There, we succeeded in making the exciting stories and personal destinies hidden behind hieroglyphics accessible to a wide audience.
              </p>
              <p>
                Thanks to the support of Potsdam Transfer, we are now standing on our own two feet. Our goal: to fill more museums with the sound of intercultural and intergenerational dialogue!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">The Team</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
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
        </motion.div>
      </section>
    </div>
  );
};

export default ContentSections;