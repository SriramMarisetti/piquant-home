const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-custom">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider font-['DM_Sans']">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
            About <span className="text-primary">Piquant</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 font-['DM_Sans']">
            At Piquant, we believe everyone deserves a wholesome, home-cooked meal — no matter how busy life gets. We prepare fresh food daily using quality ingredients, traditional recipes, and hygienic practices.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6 font-['DM_Sans']">
            Whether you're a student away from home, a working professional, or a family looking for hassle-free daily meals — Piquant brings the warmth of homemade food right to your doorstep.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Fresh Ingredients", "Home Recipes", "Daily Service", "Hygienic Kitchen"].map((tag) => (
              <span key={tag} className="bg-accent text-accent-foreground text-sm px-4 py-2 rounded-full font-medium font-['DM_Sans']">
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
);

export default AboutSection;
