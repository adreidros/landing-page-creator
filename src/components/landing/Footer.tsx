import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-6 flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 EchoLore
        </p>
        <Link
          to="/impressum"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Impressum
        </Link>
      </div>
    </footer>
  );
};

export default Footer;