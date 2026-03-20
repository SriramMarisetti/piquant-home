import { UtensilsCrossed, MessageCircle, Truck } from "lucide-react";

const steps = [
  { icon: UtensilsCrossed, title: "Browse Products", desc: "Explore our daily meal options and homemade food catalog" },
  { icon: MessageCircle, title: "Send Message on WhatsApp", desc: "Send us your order — no app downloads or payments needed" },
  { icon: Truck, title: "Get Food Delivered", desc: "We deliver fresh, hot meals right to your door" },
];

const HowItWorksSection = () => (
  <section className="section-padding bg-accent">
    <div className="container-custom text-center">
      <span className="text-primary font-semibold text-sm uppercase tracking-wider font-['DM_Sans']">Simple Process</span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-12">
        How It Works
      </h2>
      <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center group">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300">
              <step.icon className="w-9 h-9 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <span className="text-xs font-bold text-primary mb-2 font-['DM_Sans']">STEP {i + 1}</span>
            <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm font-['DM_Sans']">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
