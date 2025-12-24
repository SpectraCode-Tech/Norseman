import { Building2, Palette, Hammer, Home, Castle } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Architecture & Floor Plans",
    description: "Custom architectural designs tailored to your vision, from concept sketches to detailed floor plans.",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Transform your spaces with our expert interior design services that blend aesthetics with functionality.",
  },
  {
    icon: Hammer,
    title: "Renovations & Additions",
    description: "Breathe new life into your home with our comprehensive renovation and addition services.",
  },
  {
    icon: Home,
    title: "Laneway Homes & Garden Suites",
    description: "Maximize your property with beautifully designed laneway homes and garden suites.",
  },
  {
    icon: Castle,
    title: "Custom Homes",
    description: "Build your dream home from the ground up with our full-service custom home construction.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to completion, we offer comprehensive construction and design services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card bg-card rounded-lg p-8 text-center shadow-md hover:shadow-xl border border-border group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                <service.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
