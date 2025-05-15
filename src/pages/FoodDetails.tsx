
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getFoodItemById } from "../data/menuData";
import PageHeader from "../components/PageHeader";
import { FoodSize } from "../types/menu";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const FoodDetails = () => {
  const { foodId } = useParams<{ foodId: string }>();
  const [searchParams] = useSearchParams();
  const foodItem = foodId ? getFoodItemById(foodId) : undefined;
  
  const [selectedSize, setSelectedSize] = useState<FoodSize>(
    foodItem?.price.full !== undefined ? 'full' : 
    foodItem?.price.half !== undefined ? 'half' : 'mini'
  );
  
  if (!foodItem) {
    return (
      <div className="page-container">
        <PageHeader title="Food Not Found" />
        <p className="text-center">The food item you're looking for does not exist.</p>
      </div>
    );
  }
  
  // Determine available sizes
  const availableSizes: FoodSize[] = [];
  if (foodItem.price.mini !== undefined) availableSizes.push('mini');
  if (foodItem.price.half !== undefined) availableSizes.push('half');
  if (foodItem.price.full !== undefined) availableSizes.push('full');
  
  // Get price for selected size
  const getPrice = (size: FoodSize) => {
    if (size === 'mini' && foodItem.price.mini !== undefined) return foodItem.price.mini;
    if (size === 'half' && foodItem.price.half !== undefined) return foodItem.price.half;
    return foodItem.price.full;
  };

  // Get image for selected size or default to main image
  const getSizeImage = (size: FoodSize) => {
    if (size === 'mini' && foodItem.sizeImages?.mini) return foodItem.sizeImages.mini;
    if (size === 'half' && foodItem.sizeImages?.half) return foodItem.sizeImages.half;
    if (size === 'full' && foodItem.sizeImages?.full) return foodItem.sizeImages.full;
    return foodItem.image;
  };
  
  const currentPrice = getPrice(selectedSize);
  const typeColor = foodItem.type === 'veg' ? 'bg-food-veg' : 'bg-food-nonveg';
  
  return (
    <div className="page-container pb-10 relative">
      {/* Background effect with food-related pattern */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000')] bg-cover bg-center opacity-5 -z-10"></div>
      
      <PageHeader title={foodItem.name} />
      
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="md:flex gap-6">
          {/* Details on the left */}
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <div className={`w-6 h-6 rounded-sm border-2 ${typeColor} flex items-center justify-center mr-2`}>
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <span className="font-medium">
                {foodItem.type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
              </span>
              
              {foodItem.popular && (
                <span className="ml-auto inline-block bg-food-amber/20 text-food-orange text-sm font-medium px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
            </div>
            
            <p className="text-lg mb-6">{foodItem.description}</p>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Ingredients:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {foodItem.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            
            {availableSizes.length > 1 && (
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Portion Size:</h3>
                <div className="flex flex-wrap gap-3">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 rounded-md font-medium transition-colors ${
                        selectedSize === size
                          ? 'bg-primary text-white'
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                      {foodItem.price[size] !== undefined && (
                        <span className="ml-2">₹{foodItem.price[size]}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="text-xl font-bold mt-4">
              Price: ₹{currentPrice}
            </div>
          </div>
          
          {/* Image on the right */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="rounded-xl overflow-hidden shadow-md transition-opacity duration-300">
              <AspectRatio ratio={4 / 3}>
                <img 
                  src={getSizeImage(selectedSize)} 
                  alt={`${foodItem.name} (${selectedSize})`}
                  className="w-full h-full object-cover animate-scale-in"
                />
              </AspectRatio>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2">
              {selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1)} Size Portion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
