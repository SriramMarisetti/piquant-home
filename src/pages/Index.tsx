import { Link } from "react-router-dom";
import { UtensilsCrossed, Truck, ShieldCheck, IndianRupee, Clock, MessageCircle, Star, ChefHat, Leaf, Heart } from "lucide-react";
import { categories } from "../data/menuData";

const WHATSAPP_URL = "https://wa.me/919999999999?text=Hi%20Piquant!%20I%20want%20to%20order%20food.";

const Index = () => {
  const dailyBoxes = ["breakfast-box", "lunch-box", "curry-box", "dinner-box"];
  const dailyCategories = categories.filter(cat => dailyBoxes.includes(cat.id));

  return (
    <div className="animate-fade-in">
      {/* ============ HERO ============ */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src="/hero-bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="inline-block bg-primary/20 text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-white/10">
            🍽️ Homemade • Fresh • Delivered Daily
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Delicious Homemade Food <br className="hidden sm:block" />
            <span className="text-primary">Delivered to Your Door</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Fresh • Hygienic • Affordable Daily Meals — made with love, just like home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1ebe5b] transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Order on WhatsApp
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              <UtensilsCrossed className="w-5 h-5" />
              View Menu
            </a>
          </div>
          <p className="text-white/60 text-sm">No online payment needed • Order directly via WhatsApp</p>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                About <span className="text-primary">Piquant</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Piquant, we believe everyone deserves a wholesome, home-cooked meal — no matter how busy life gets. We prepare fresh food daily using quality ingredients, traditional recipes, and hygienic practices.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're a student away from home, a working professional, or a family looking for hassle-free daily meals — Piquant brings the warmth of homemade food right to your doorstep.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Fresh Ingredients", "Home Recipes", "Daily Service", "Hygienic Kitchen"].map((tag) => (
                  <span key={tag} className="bg-accent text-accent-foreground text-sm px-4 py-2 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/about-food.jpg"
                alt="Homemade cooking"
                className="rounded-2xl shadow-xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-12">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: UtensilsCrossed, title: "Browse Menu", desc: "Explore our daily meal options and subscription plans" },
              { icon: MessageCircle, title: "Message on WhatsApp", desc: "Send us your order — no app downloads or payments needed" },
              { icon: Truck, title: "Get Food Delivered", desc: "We deliver fresh, hot meals right to your door" },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <step.icon className="w-9 h-9 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-xs font-bold text-primary mb-2">STEP {i + 1}</span>
                <h3 className="text-xl font-bold text-foreground mb-2 font-['DM_Sans']">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MENU CATEGORIES ============ */}
      <section id="menu" className="section-padding bg-background">
        <div className="container-custom text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Our Daily Meal Boxes
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            Freshly prepared every day — choose your favourite box and order via WhatsApp
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {dailyCategories.map((cat) => (
              <Link
                to={`/type-selection/${cat.id}`}
                key={cat.id}
                className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground font-['DM_Sans']">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cat.description}</p>
                  <span className="inline-block mt-3 text-primary text-sm font-semibold group-hover:underline">
                    View Items →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Piquant</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: ChefHat, title: "Fresh & Homemade", desc: "Cooked fresh every day with love" },
              { icon: ShieldCheck, title: "Hygienic Cooking", desc: "Clean kitchen, safe practices" },
              { icon: IndianRupee, title: "Affordable Pricing", desc: "Quality meals at pocket-friendly prices" },
              { icon: Clock, title: "Timely Delivery", desc: "Always on time, always hot" },
            ].map((f, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <f.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-foreground mb-1 font-['DM_Sans']">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SUBSCRIPTION PLANS ============ */}
      <section id="plans" className="section-padding bg-background">
        <div className="container-custom text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Save More</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Monthly Subscription Plans
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            Subscribe to daily meals and save more. Flexible plans for every need.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Basic", meals: "1 meal/day", price: "₹2,499/mo", features: ["Lunch OR Dinner", "Mon–Sat delivery", "Weekly menu rotation"] },
              { name: "Standard", meals: "2 meals/day", price: "₹4,499/mo", features: ["Lunch + Dinner", "Mon–Sat delivery", "Priority delivery", "Menu customization"], popular: true },
              { name: "Premium", meals: "3 meals/day", price: "₹5,999/mo", features: ["Breakfast + Lunch + Dinner", "Mon–Sat delivery", "Priority delivery", "Full customization", "Weekend specials"] },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 text-left transition-all hover:shadow-xl ${
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-xl scale-105 border-2 border-primary"
                    : "bg-card shadow-md border border-border"
                }`}
              >
                {plan.popular && (
                  <span className="inline-block bg-white/20 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold font-['DM_Sans']">{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>{plan.meals}</p>
                <p className="text-3xl font-bold mt-4 mb-5 font-['DM_Sans']">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Leaf className="w-4 h-4 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-full font-semibold text-sm transition-all ${
                    plan.popular
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Subscribe via WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section id="testimonials" className="section-padding bg-accent">
        <div className="container-custom text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Happy Customers</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-12">
            What People Say
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Priya S.", text: "The food tastes just like my mom's cooking! I've been ordering daily lunch for 3 months now. Totally worth it.", rating: 5 },
              { name: "Ravi K.", text: "As a student living alone, Piquant is a lifesaver. Affordable, tasty, and always on time. Highly recommend!", rating: 5 },
              { name: "Anita M.", text: "We subscribed for our whole family. The quality is consistent and the variety keeps everyone happy. Love it!", rating: 5 },
            ].map((t, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
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

      {/* ============ CTA BANNER ============ */}
      <section className="relative py-20 overflow-hidden">
        <img src="/hero-bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Order Your Meal?
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Skip the hassle — just message us on WhatsApp and enjoy delicious homemade food today!
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-white/90 transition-all shadow-xl hover:scale-105"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Chat on WhatsApp Now
          </a>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer id="footer" className="bg-foreground text-white/80 py-12">
        <div className="container-custom">
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white font-['Playfair_Display'] mb-3">Piquant</h3>
              <p className="text-sm leading-relaxed">
                Delicious homemade food delivered daily to your doorstep. Made with love, served with care.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 font-['DM_Sans']">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
                <li><a href="#plans" className="hover:text-primary transition-colors">Subscription Plans</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 font-['DM_Sans']">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>📍 Kotturu, Telangana</li>
                <li>📞 +91 99999 99999</li>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    💬 WhatsApp Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
            © {new Date().getFullYear()} Piquant. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default Index;
