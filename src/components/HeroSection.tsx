import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-home.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo Mark */}
          <div className="mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
            <div className="w-24 h-24 mx-auto bg-primary rounded-lg flex items-center justify-center shadow-2xl">
              <svg viewBox="0 0 24 24" className="w-14 h-14 text-primary-foreground" fill="currentColor">
                <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.18l5.5 3.44v6.76L12 17.82l-5.5-3.44V7.62L12 4.18z"/>
                <path d="M12 8l-4 2.5v5L12 18l4-2.5v-5L12 8z"/>
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Norseman
          </h1>
          
          {/* Services */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <span className="text-background/90 text-lg md:text-xl uppercase tracking-[0.2em] font-light">Architecture</span>
            <span className="text-primary text-2xl">|</span>
            <span className="text-background/90 text-lg md:text-xl uppercase tracking-[0.2em] font-light">Interior Design</span>
            <span className="text-primary text-2xl">|</span>
            <span className="text-background/90 text-lg md:text-xl uppercase tracking-[0.2em] font-light">Construction</span>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View Work</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Get A Quote</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
