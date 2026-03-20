import { Link } from "react-router-dom";
import { categories } from "../../data/menuData";

const dailyBoxes = ["breakfast-box", "lunch-box", "curry-box", "dinner-box"];
const dailyCategories = categories.filter(cat => dailyBoxes.includes(cat.id));

const CategoriesSection = () => (
  <section id="menu" className="section-padding bg-background">
    <div className="container-custom text-center">
      <span className="text-primary font-semibold text-sm uppercase tracking-wider font-['DM_Sans']">What We Offer</span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
        Our Daily Meal Boxes
      </h2>
      <p className="text-muted-foreground mb-12 max-w-lg mx-auto font-['DM_Sans']">
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
              <h3 className="font-bold text-foreground">{cat.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 font-['DM_Sans']">{cat.description}</p>
              <span className="inline-block mt-3 text-primary text-sm font-semibold group-hover:underline font-['DM_Sans']">
                View Items →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
