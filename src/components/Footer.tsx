import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground" fill="currentColor">
                  <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.18l5.5 3.44v6.76L12 17.82l-5.5-3.44V7.62L12 4.18z"/>
                  <path d="M12 8l-4 2.5v5L12 18l4-2.5v-5L12 8z"/>
                </svg>
              </div>
              <span className="font-heading text-xl font-bold">Norseman</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Building excellence and transforming spaces across Toronto and the GTA for over 20 years.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/norsemanconstructionanddevelopment/" className="text-background/70 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="http://instagram.com/norsemanconstruction" className="text-background/70 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/norseman-construction-development-ltd/" className="text-background/70 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCedVpjGaMR3g0pYJEcW0C6g" className="text-background/70 hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Services", "About", "Projects", "Process", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Architecture & Floor Plans",
                "Interior Design",
                "Renovations & Additions",
                "Laneway Homes",
                "Custom Homes",
              ].map((service) => (
                <li key={service}>
                  <span className="text-background/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="mailto:info@norsemanconstruction.ca" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@norsemanconstruction.ca
              </a>
              <a href="tel:6474355433" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4" />
                (647) 435-5433
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-background/50 text-sm">
            © {new Date().getFullYear()} Norseman Construction & Development Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
