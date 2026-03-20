import { Star, Heart } from "lucide-react";

const testimonials = [
  { name: "Priya S.", text: "The food tastes just like my mom's cooking! I've been ordering daily lunch for 3 months now. Totally worth it.", rating: 5 },
  { name: "Ravi K.", text: "As a student living alone, Piquant is a lifesaver. Affordable, tasty, and always on time. Highly recommend!", rating: 5 },
  { name: "Anita M.", text: "We subscribed for our whole family. The quality is consistent and the variety keeps everyone happy. Love it!", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding bg-accent">
    <div className="container-custom text-center">
      <span className="text-primary font-semibold text-sm uppercase tracking-wider font-['DM_Sans']">Happy Customers</span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-12">
        What People Say
      </h2>
      <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-['DM_Sans']">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground text-sm font-['DM_Sans']">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
