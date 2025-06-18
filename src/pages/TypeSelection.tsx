
import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { getCategoryById } from "../data/menuData";

const TypeSelection = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categoryId ? getCategoryById(categoryId as any) : undefined;
  
  if (!category) {
    return (
      <div className="page-container">
        <PageHeader title="Category Not Found" />
        <p className="text-center">The category you're looking for does not exist.</p>
        <div className="flex justify-center mt-4">
          <Link to="/" className="btn-primary">
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="page-container">
      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{ backgroundImage: "url('/food-bg.png')" }}
      ></div>
      <PageHeader title={`${category.name} Options`} />
      
      <div className="flex flex-col space-y-4 mt-10">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{category.icon}</div>
          <h1 className="text-2xl font-bold mb-2">{category.name}</h1>
          <p className="text-muted-foreground">{category.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto w-full">
          <Link
            to={`/food-list/${category.id}/veg`}
            className="bg-food-veg text-white flex items-center justify-center 
                      py-8 px-6 rounded-xl shadow-md font-bold text-lg card-hover"
          >
            <span className="mr-2 text-2xl">🥦</span> Vegetarian
          </Link>
          
          <Link
            to={`/food-list/${category.id}/non-veg`}
            className="bg-food-nonveg text-white flex items-center justify-center 
                      py-8 px-6 rounded-xl shadow-md font-bold text-lg card-hover"
          >
            <span className="mr-2 text-2xl">🍗</span> Non-Vegetarian
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TypeSelection;
