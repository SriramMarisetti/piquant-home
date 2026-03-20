import { ChefHat, ShieldCheck, IndianRupee, Clock } from "lucide-react";

const features = [
  { icon: ChefHat, title: "Fresh Homemade Food", desc: "Cooked fresh every day with love" },
  { icon: ShieldCheck, title: "Hygienic Cooking", desc: "Clean kitchen, safe practices" },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Quality meals at pocket-friendly prices" },
  { icon: Clock, title: "Fast Delivery", desc: "Always on time, always hot" },
];

const WhyChooseUsSection = () => (
  <section className="section-padding bg-background">
    <div className="container-custom text-center">
      <span className="text-primary font-semibold text-sm uppercase tracking-wider font-['DM_Sans']">Why Piquant</span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-12">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
              <f.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
            <p className="text-sm text-muted-foreground font-['DM_Sans']">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
