import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().nonempty({ message: "Please enter your name" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  subject: z.string().trim().max(150).optional(),
  message: z.string().trim().nonempty({ message: "Please enter a message" }).max(2000),
});

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0]?.toString();
        if (key) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(form.subject || "Inquiry via echolore.de");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:info@echolore.de?subject=${subject}&body=${body}`;
    toast({ title: "Email client opened", description: "Please send the prepared message." });
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-light uppercase tracking-[0.1em] text-primary">
            Get in Touch
          </h2>
          <div className="w-16 h-px bg-primary/30 mx-auto my-6" />
          <p className="text-muted-foreground font-body">
            Send us a message – we'll get back to you shortly.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-8 md:p-10 rounded-xl bg-card/50 border border-primary/30 backdrop-blur-sm space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-body text-foreground/80">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                required
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-body text-foreground/80">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                required
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="font-body text-foreground/80">Subject</Label>
            <Input
              id="subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              maxLength={150}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="font-body text-foreground/80">Message</Label>
            <Textarea
              id="message"
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={2000}
              required
            />
            {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
          </div>
          <div className="flex justify-center pt-2">
            <Button type="submit" variant="hero" size="xl" className="group">
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;