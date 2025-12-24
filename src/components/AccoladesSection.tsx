import { Award } from "lucide-react";

const AccoladesSection = () => {
  return (
    <section className="py-16 bg-muted border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Recent Accolades
          </h2>
          <p className="text-muted-foreground">Award-winning excellence recognized by industry leaders</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
          {/* Placeholder award badges - using icons as representatives */}
          {[
            "BiLD Award Winner",
            "Consumer Choice 5 Years",
            "Homestars Best of 2025",
            "Contractor of the Year",
            "Top Choice Awards 2023",
            "RenoMark Certified",
          ].map((award, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-3 bg-background rounded-lg shadow-sm"
            >
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">{award}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccoladesSection;
