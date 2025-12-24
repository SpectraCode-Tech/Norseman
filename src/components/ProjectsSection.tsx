import { Button } from "@/components/ui/button";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectLiving from "@/assets/project-living.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";

const projects = [
  {
    image: projectKitchen,
    category: "Renovations & Additions",
    title: "Bellefair",
    description: "This main floor and basement renovation is the result of a seamless blend of modern design and functionality.",
  },
  {
    image: projectLiving,
    category: "Custom Homes & New Construction",
    title: "Wheeler",
    description: "Just completed by Norseman Construction, this new custom home in the Beaches showcases sophisticated design.",
  },
  {
    image: projectBathroom,
    category: "Interior Design",
    title: "Greenwood",
    description: "This multiple home renovation highlights our interior design team's attention to detail and craftsmanship.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Latest Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of renovation and construction projects across Toronto
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="text-primary text-sm font-medium uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="font-heading text-2xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
