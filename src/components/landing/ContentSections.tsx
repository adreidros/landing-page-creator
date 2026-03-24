import { motion } from "framer-motion";
import bgPrimaporta from "@/assets/bg-primaporta.jpg";
import bgHelmet from "@/assets/bg-corinthian-helmet.jpg";
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
{ name: "Emre Yüzüncüoglu", role: "M.A. Ancient Cultures of the Eastern Mediterranean", image: teamEmre }];


const ContentSections = () => {
  return (
    <div className="container mx-auto px-6">
      {/* Vision text (left) + Demo video (right) */}
      <section className="pt-16 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Left: Vision text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col justify-center overflow-hidden rounded-xl">
            
            {/* Background helmet image */}
            <div className="absolute inset-0">
              <img src={bgHelmet} alt="" className="w-full h-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/90" />
            </div>
            <div className="relative z-10 p-8">
            
            <h2 className="font-display text-lg md:text-xl lg:text-2xl font-light text-primary uppercase tracking-[0.15em] mb-8">
              We Catch Echoes of the Eternal
            </h2>
            <div className="space-y-5 text-base md:text-lg text-muted-foreground font-body leading-relaxed text-justify">
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
            </div>
          </motion.div>

          {/* Right: Demo video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            id="demo"
            className="w-full rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center min-h-[400px]">
            
            <div className="text-center text-muted-foreground">
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-primary/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-xs text-muted-foreground/50 uppercase tracking-wider">Demo Video</p>
            </div>
          </motion.div>
        </div>

        {/* Subheader - full width */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 py-8 px-8 rounded-xl border border-primary/30 bg-background max-w-2xl mx-auto">
          
          <p className="font-display text-xl md:text-2xl font-light text-black leading-relaxed text-center tracking-wide uppercase" style={{ textShadow: '0 0 10px hsl(43 74% 62% / 0.8), 0 0 20px hsl(43 74% 62% / 0.5), 0 0 30px hsl(43 74% 62% / 0.3)' }}>
            Transform your exhibition into a stage for dialogue<br />that transcends millenia
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-16 h-px bg-border/50 mx-auto my-16" />

      {/* Product (left) + Motivation (right) */}
      <section id="product" className="relative pb-0">
        {/* Background image */}
        <div className="absolute inset-0 -mx-[50vw] left-1/2 right-1/2 w-screen">
          <img src={bgPrimaporta} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 md:p-10 rounded-xl bg-card/50 border border-primary/30">
            
            <span className="text-primary/70 font-display uppercase tracking-[0.2em] text-xl">The Product</span>
            <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground font-body leading-relaxed text-justify">
              <p className="text-justify font-serif">
                Great personalities have a lot to say – far more than can fit on an information board. Our AI-powered avatars follow our ethical guidelines and have access to historically curated databases chosen by you – and only those databases.
              </p>
              <p className="text-justify font-serif">
                They are always open to conversation and convey the information that visitors are really interested in. This means that both young history enthusiasts and experienced season ticket holders get their money's worth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            id="motivation"
            className="p-8 md:p-10 rounded-xl bg-card/50 border border-primary/30">
            
            <span className="text-primary/70 font-display uppercase tracking-[0.2em] text-xl text-right">Our Motivation</span>
            <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed text-justify font-serif">
              <p className="text-justify">
                Reviving History began as a student project at the Hasso Plattner Institute's d-school in collaboration with the Ägyptisches Museum und Papyrussammlung in Berlin. There, we succeeded in making the exciting stories and personal destinies hidden behind hieroglyphics accessible to a wide audience.
              </p>
              <p className="text-justify">
                Thanks to the support of Potsdam Transfer, we are now standing on our own two feet. Our goal: to fill more museums with the sound of intercultural and intergenerational dialogue!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subheader - full width */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 py-8 px-8 rounded-xl border border-primary/30 bg-background max-w-2xl mx-auto">
        
        <p className="font-display text-xl md:text-2xl font-light text-black leading-relaxed text-center tracking-wide uppercase" style={{ textShadow: '0 0 10px hsl(43 74% 62% / 0.8), 0 0 20px hsl(43 74% 62% / 0.5), 0 0 30px hsl(43 74% 62% / 0.3)' }}>
          The knowledge of an entire exhibition<br />on the surface of a single screen.
        </p>
      </motion.div>

      {/* Divider */}
      <div className="w-16 h-px bg-border/50 mx-auto my-16" />

      {/* Team */}
      <section id="team" className="pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center">
          
          <span className="text-primary/70 font-display uppercase tracking-[0.2em] text-xl">The Team</span>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-4xl mx-auto">
            {teamMembers.map((member, i) =>
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center">
              
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-border/40 mb-4 bg-secondary/50">
                  {member.image ?
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover" /> :

                <div className="w-full h-full flex items-center justify-center text-2xl font-display font-light text-primary/60">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                }
                </div>
                <h3 className="font-display text-sm font-light text-foreground tracking-wide">
                  {member.name}
                </h3>
                {member.role &&
              <p className="text-xs text-muted-foreground/60 mt-1 leading-snug font-body">
                    {member.role}
                  </p>
              }
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>
    </div>);

};

export default ContentSections;