import { categories } from "../data/menuData";
import CategoryCard from "../components/CategoryCard";

const Index = () => {
  // -------- CATEGORY GROUPS --------
  const dailyBoxes = [
    "breakfast-box",
    "lunch-box",
    "curry-box",
    "dinner-box",
  ];

  const monthlySubscriptions = [
    "breakfast-subscription",
    "lunch-subscription",
    "curry-subscription",
    "dinner-subscription",
    "combo-meals",
  ];

  const homemadeFoods = [
    "podulu",
    "rice-mix",
    "traditional-snacks",
    "pickles",
    "cakes",
  ];

  // -------- FILTERED LISTS --------
  const dailyCategories = categories.filter(cat =>
    dailyBoxes.includes(cat.id)
  );

  const monthlyCategories = categories.filter(cat =>
    monthlySubscriptions.includes(cat.id)
  );

  const homemadeCategories = categories.filter(cat =>
    homemadeFoods.includes(cat.id)
  );

  return (
    <div className="page-container relative animate-fade-in">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{ backgroundImage: "url('/food-bg.png')" }}
      ></div>

      {/* Logo */}
      <header className="mb-10 text-center">
        <img
          src="/logo/logo.png"
          alt="Logo"
          className="mx-auto mb-4 w-28 h-auto md:w-52"
        />
      </header>

      {/* ================= DAILY BOXES ================= */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Daily Meal Boxes
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {dailyCategories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      {/* ================= MONTHLY SUBSCRIPTIONS ================= */}
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-2">
        Monthly Subscriptions
      </h2>
      <p className="text-muted-foreground text-center mb-8">
        Choose from our flexible monthly meal plans
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {monthlyCategories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      {/* ================= HOMEMADE FOODS ================= */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Homemade Foods
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {homemadeCategories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Index;
