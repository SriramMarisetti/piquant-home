
import { categories } from "../data/menuData";
import CategoryCard from "../components/CategoryCard";

const Index = () => {
  return (
    <div className="page-container relative">
      {/* Background with restaurant theme */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070')] bg-cover bg-center opacity-20 -z-10"></div>
      
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Digital Menu</h1>
        <p className="text-muted-foreground">Select a food category to begin</p>
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
