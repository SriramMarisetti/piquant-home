
import { categories } from "../data/menuData";
import CategoryCard from "../components/CategoryCard";

const Index = () => {
  return (
    <div className="page-container">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Digital Menu</h1>
        <p className="text-muted-foreground">Select a food category to begin</p>
      </header>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Index;
