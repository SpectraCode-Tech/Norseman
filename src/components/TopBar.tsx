import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-foreground text-background py-2 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-6 text-sm">
          <a
            href="mailto:info@norsemanconstruction.ca"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">info@norsemanconstruction.ca</span>
          </a>
          <a
            href="tel:6474355433"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>(647) 435-5433</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/norsemanconstructionanddevelopment/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="http://instagram.com/norsemanconstruction"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/norseman-construction-development-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCedVpjGaMR3g0pYJEcW0C6g"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
