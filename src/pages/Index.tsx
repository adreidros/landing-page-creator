import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ContentSections from "@/components/landing/ContentSections";
import CTA from "@/components/landing/CTA";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ContentSections />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
