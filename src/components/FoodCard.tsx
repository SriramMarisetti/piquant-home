
import { Link } from "react-router-dom";
import { FoodItem } from "../types/menu";
import { AspectRatio } from "./ui/aspect-ratio";

interface FoodCardProps {
  food: FoodItem;
  category: string;
  type: string;
}

const FoodCard = ({ food, category, type }: FoodCardProps) => {
  const typeColor = food.type === 'veg' ? 'bg-food-veg' : 'bg-food-nonveg';
  const basePrice = food.price.mini || food.price.half || food.price.full;
  
  return (
    <Link
      to={`/food-details/${food.id}?category=${category}&type=${type}`}
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col 
                 card-hover animate-scale-in h-full"
    >
      {/* Food type indicator */}
      <div className="w-full h-2" style={{ backgroundColor: food.type === 'veg' ? '#22C55E' : '#EF4444' }}></div>
      
      {food.image && (
        <div className="w-full">
          <AspectRatio ratio={16 / 9}>
            <img 
              src={food.image} 
              alt={food.name}
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
      )}
      
      <div className="p-4 flex flex-1">
        <div className="mr-4 flex-shrink-0">
          <div className={`w-6 h-6 rounded-sm border-2 ${typeColor} flex items-center justify-center`}>
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold">{food.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{food.description}</p>
          <p className="text-sm font-medium mt-1">From ₹{basePrice}</p>
          
          {food.popular && (
            <span className="inline-block bg-food-amber/20 text-food-orange text-xs font-medium px-2 py-0.5 rounded-full mt-1">
              Popular
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
