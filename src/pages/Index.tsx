import { categories } from "../data/menuData";
import CategoryCard from "../components/CategoryCard";

const Index = () => {
  return (
    <div className="page-container relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{ backgroundImage: "url('/food-bg.png')" }}
      ></div>

      {/* Page content */}
    <header className="mb-8 text-center">
      <img
        src="/logo/logo.png"
        alt="Logo"
        className="mx-auto mb-4 w-28 h-auto"
      />
    </header>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};


export default Index;
