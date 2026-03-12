import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Mail, href: "#", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Reviving History. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
