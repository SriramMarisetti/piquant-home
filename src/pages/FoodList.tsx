
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { getFoodItemsByCategory, getCategoryById } from "../data/menuData";
import { FoodItem, FoodType } from "../types/menu";
import FoodCard from "../components/FoodCard";

const FoodList = () => {
  const { categoryId, type } = useParams<{ categoryId: string; type: string }>();
  const category = categoryId ? getCategoryById(categoryId as any) : undefined;
  const validType = type === 'veg' || type === 'non-veg' ? type : undefined;
  
  let foodItems: FoodItem[] = [];
  
  if (category && validType) {
    foodItems = getFoodItemsByCategory(category.id, validType as FoodType);
  }
  
  return (
    <div className="page-container">
      <PageHeader title={`${category?.name || 'Food'} (${validType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'})`} />
      
      {foodItems.length > 0 ? (
        <div className="space-y-4">
          {foodItems.map((food) => (
            <FoodCard 
              key={food.id} 
              food={food} 
              category={categoryId || ''} 
              type={type || ''}
            />
          ))}
        </div>
      ) : (
        <div className="text-center mt-8">
          <p className="text-xl">No items found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default FoodList;
