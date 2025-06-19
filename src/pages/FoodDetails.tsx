import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getFoodItemById } from "../data/menuData";
import PageHeader from "../components/PageHeader";
import { FoodSize } from "../types/menu";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";
import { useCartDialog } from "@/context/CartDialogContext";


const FoodDetails = () => {
  const { foodId } = useParams<{ foodId: string }>();
  const [searchParams] = useSearchParams();
  const foodItem = foodId ? getFoodItemById(foodId) : undefined;
  const { cart, addToCart } = useCart();
  const { setOpen } = useCartDialog();

  const [selectedSize, setSelectedSize] = useState<FoodSize>(() => {
    if (foodItem?.price.full !== null) return "full";
    if (foodItem?.price.half !== null) return "half";
    return "mini";
  });

  if (!foodItem) {
    return (
      <div className="page-container">
        <PageHeader title="Food Not Found" />
        <p className="text-center">The food item you're looking for does not exist.</p>
      </div>
    );
  }

  const availableSizes: FoodSize[] = [];
  if (foodItem.price.mini !== null) availableSizes.push("mini");
  if (foodItem.price.half !== null) availableSizes.push("half");
  if (foodItem.price.full !== null) availableSizes.push("full");

  const getPrice = (size: FoodSize) => {
    if (size === "mini" && foodItem.price.mini !== undefined) return foodItem.price.mini;
    if (size === "half" && foodItem.price.half !== undefined) return foodItem.price.half;
    return foodItem.price.full ?? 0;
  };

  const currentPrice = getPrice(selectedSize);
  const typeColor = foodItem.type === "veg" ? "bg-food-veg" : "bg-food-nonveg";


const handleAddToCart = () => {
  console.log("CartDialog open triggered"); // ✅ Debug
  addToCart({
    id: foodItem.id,
    name: foodItem.name,
    size: selectedSize,
    price: currentPrice,
    quantity: 1,
  });

  setOpen(true);
};


  return (
    <div className="page-container pb-10 relative">
      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{ backgroundImage: "url('/food-bg.png')" }}
      ></div>
      <PageHeader title={foodItem.name} />

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="md:flex gap-6">
          {/* Left Section */}
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <div className={`w-6 h-6 rounded-sm border-2 ${typeColor} flex items-center justify-center mr-2`}>
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <span className="font-medium">
                {foodItem.type === "veg" ? "Vegetarian" : "Non-Vegetarian"}
              </span>

              {foodItem.popular && (
                <span className="ml-auto inline-block bg-food-amber/20 text-food-orange text-sm font-medium px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
            </div>

           {/* <p className="text-lg mb-6">{foodItem.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Ingredients:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {foodItem.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div> */}


            <div className="mb-6">
              <h3 className="font-semibold mb-2">Portion Size:</h3>
              {availableSizes.length > 1 ? (
                <div className="flex flex-wrap gap-3">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 rounded-md font-medium transition-colors ${
                        selectedSize === size
                          ? "bg-primary text-white"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                      <span className="ml-2">₹{foodItem.price[size]}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-md font-semibold">
                  {availableSizes[0].charAt(0).toUpperCase() + availableSizes[0].slice(1)}: ₹
                  {foodItem.price[availableSizes[0]]}
                </p>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-4 w-full bg-primary text-white py-3 px-5 rounded-md font-semibold flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} /> Add to Cart
            </button>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="rounded-xl overflow-hidden shadow-md transition-opacity duration-300">
              <AspectRatio ratio={4 / 3}>
                <img
                  src={foodItem.image}
                  alt={`${foodItem.name}`}
                  className="w-full h-full object-cover animate-scale-in"
                />
              </AspectRatio>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2">
              {availableSizes.length > 1
                ? `${selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1)} Size Portion - ₹${currentPrice}`
                : `Only ${availableSizes[0].charAt(0).toUpperCase() + availableSizes[0].slice(1)} Available - ₹${currentPrice}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
