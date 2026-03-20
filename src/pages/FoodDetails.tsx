import { useState } from "react";
import { useParams } from "react-router-dom";
import { getFoodItemById } from "../data/menuData";
import PageHeader from "../components/PageHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";
import { useCartDialog } from "@/context/CartDialogContext";
import { FoodSize } from "../types/menu";

const FoodDetails = () => {
  const { foodId } = useParams<{ foodId: string }>();
  const foodItem = foodId ? getFoodItemById(foodId) : undefined;

  const { addToCart } = useCart();
  const { setOpen } = useCartDialog();

  if (!foodItem) {
    return (
      <div className="page-container">
        <PageHeader title="Food Not Found" />
        <p className="text-center">The food item you're looking for does not exist.</p>
      </div>
    );
  }

  /* -------------------------
     AVAILABLE SIZES
  -------------------------- */
  const availableSizes: FoodSize[] = [];

  if (foodItem.price.mini != null) availableSizes.push("mini");
  if (foodItem.price.half != null) availableSizes.push("half");
  if (foodItem.price.full != null) availableSizes.push("full");

  const [selectedSize, setSelectedSize] = useState<FoodSize>(
    availableSizes[0]
  );

  const getPrice = (size: FoodSize) => {
    if (size === "mini") return foodItem.price.mini ?? 0;
    if (size === "half") return foodItem.price.half ?? 0;
    return foodItem.price.full ?? 0;
  };

  const price = getPrice(selectedSize);

  const handleAddToCart = () => {
    addToCart({
      id: foodItem.id,
      name: foodItem.name,
      size: selectedSize,
      price,
      quantity: 1,
    });

    setOpen(true);
  };

  const typeColor =
    foodItem.type === "veg" ? "bg-food-veg" : "bg-food-nonveg";

  return (
    <div className="page-container pb-10 relative">
      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{ backgroundImage: "url('/food-bg.png')" }}
      />

      <PageHeader title={foodItem.name} />

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="md:flex gap-6">

          {/* LEFT */}
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <div
                className={`w-6 h-6 rounded-sm border-2 ${typeColor} flex items-center justify-center mr-2`}
              >
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>

              <span className="font-medium">
                {foodItem.type === "veg" ? "Vegetarian" : "Non-Vegetarian"}
              </span>

              {foodItem.popular && (
                <span className="ml-auto bg-food-amber/20 text-food-orange text-sm font-medium px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
            </div>

            {/* SIZE SELECTION */}
            {availableSizes.length > 1 && (
              <div className="mb-4">
                <p className="font-semibold mb-2">Select Quantity:</p>
                <div className="flex gap-3 flex-wrap">
                  {availableSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-md border font-medium transition
                        ${
                          selectedSize === size
                            ? "bg-primary text-white"
                            : "bg-muted hover:bg-muted/80"
                        }`}
                    >
                      {size.toUpperCase()} – ₹{getPrice(size)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* PRICE */}
            <p className="text-xl font-semibold mb-4">
              Price: ₹{price}
            </p>

            <button
              onClick={handleAddToCart}
              className="w-full bg-primary text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>

          {/* RIGHT */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="rounded-xl overflow-hidden shadow-md">
              <AspectRatio ratio={4 / 3}>
                <img
                  src={foodItem.image || "/placeholder-food.jpg"}
                  alt={foodItem.name}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-2">
              {selectedSize.toUpperCase()} – ₹{price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
