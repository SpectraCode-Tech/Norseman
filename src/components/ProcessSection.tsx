import { ClipboardList, PenTool, HardHat, Key } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Planning",
    description: "We work with you to discover your needs as a homeowner to create your ideal living space.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "We complete the engineer assessment, architectural drawings, heat loss calculation, zoning bylaw review, and permit submissions.",
  },
  {
    icon: HardHat,
    title: "Build",
    description: "Through every step of your build, our team communicates with you and provides live updates, photos, and videos so you can follow the progress.",
  },
  {
    icon: Key,
    title: "Delivery",
    description: "Time to move in! Settle into your new space and fall back in love with your home.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Simplified Process
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
            Our streamlined approach ensures your project runs smoothly from start to finish
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center group">
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <step.icon className="w-12 h-12 text-primary group-hover:text-background transition-colors" strokeWidth={1.5} />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-background">
                  {index + 1}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-background/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
