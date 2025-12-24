import { Button } from "@/components/ui/button";
import { Award, Shield, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Exceptional Toronto Homes, Built with Care and Innovation for 20 Years
            </h2>
            <p className="text-lg text-primary font-semibold mb-6">
              Building Excellence, Transforming Spaces
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With 20 years of experience, Norseman Construction & Development is a leader in custom home development and renovations across Toronto and the GTA. From concept to completion, every detail is executed with precision, professionalism, and expertise.
              </p>
              <p>
                Our streamlined process covers everything—consultation, design, permits, and construction—delivering innovative solutions that optimize functionality and aesthetics. Whether renovating a home or building a custom home, we focus on achieving your vision efficiently and without unnecessary costs.
              </p>
              <p>
                As trusted advisors in the construction industry, we deliver exceptional craftsmanship, sustainable solutions, and a seamless project experience. Our commitment to quality construction is backed by a comprehensive two-year warranty, including a one-year Tarion warranty.
              </p>
            </div>
            
            <Button variant="outline" size="lg" className="mt-8" asChild>
              <a href="#contact">View Our Values</a>
            </Button>
          </div>

          {/* Stats / Features */}
          <div className="space-y-6">
            <div className="bg-cream rounded-lg p-8 flex items-start gap-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">20+ Years Experience</h3>
                <p className="text-muted-foreground">Two decades of excellence in construction and design across Toronto and the GTA.</p>
              </div>
            </div>

            <div className="bg-cream rounded-lg p-8 flex items-start gap-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Quality Guaranteed</h3>
                <p className="text-muted-foreground">Comprehensive two-year warranty including one-year Tarion warranty on all projects.</p>
              </div>
            </div>

            <div className="bg-cream rounded-lg p-8 flex items-start gap-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Award-Winning Team</h3>
                <p className="text-muted-foreground">Recognized by Consumer Choice, Homestars, BiLD, TCA, and RenoMark.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
