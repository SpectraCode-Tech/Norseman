import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Very happy with the results, and impressed all round with Norseman! Project manager Robert was excellent to work with - friendly, professional, knowledgeable and diligent about keeping the project on schedule. All the trades Norseman brought in were very professional.",
    author: "Garage Renovation Client",
  },
  {
    text: "We finished the renovation with Norseman and could not be happier with the result. They met with us weekly to review the project and every other day we would receive photos and updates via their cloud based project management tool.",
    author: "Full Home Renovation Client",
  },
  {
    text: "Mo worked with my wife and I to take care of all the details and even completed the project ahead of time. We went with them because they were local to our home in East York and were an established Design/Build Firm.",
    author: "East York Homeowner",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
