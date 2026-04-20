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
        <p className="text-center">
          The food item you're looking for does not exist.
        </p>
      </div>
    );
  }

  const singlePriceCategories = [
    "breakfast-box",
    "lunch-box",
    "curry-box",
    "dinner-box",
    "diet-food",
    "diet-breakfast",
    "diet-lunch",
    "diet-dinner",
    "diet-fruit-bowl",
    "beverages",
    "breakfast-subscription",
    "lunch-subscription",
    "dinner-subscription",
    "diet-breakfast-subscription",
    "diet-lunch-subscription",
    "diet-dinner-subscription",
    "diet-fruit-bowl-subscription",
    "diet-juice-subscription",
    "diet-combo-1-subscription",
    "diet-combo-2-subscription",
    "curry-subscription",
    "diet-combo-1-subscription",
    "diet-combo-2-subscription",
    "combo-meals"
  ];

  const isSinglePrice = singlePriceCategories.includes(foodItem.category);

  const availableSizes: {
    key: FoodSize;
    label: string;
    price: number;
  }[] = isSinglePrice
    ? [
        {
          key: "mini",
          label: "price",
         price:
  Object.values(foodItem.price).find(
    (value) => value != null
  ) ?? 0
        },
      ]
    : [
        foodItem.price.mini != null
  ? {
      key: "mini",
      label:
        foodItem.category === "podulu"
          ? "200g"
          : "250gms",
      price: foodItem.price.mini,
    }
  : null,

        foodItem.price.half != null
          ? { key: "half", label: "500gms", price: foodItem.price.half }
          : null,

        foodItem.price.full != null
          ? { key: "full", label: "1kg", price: foodItem.price.full }
          : null,
      ].filter(Boolean) as {
        key: FoodSize;
        label: string;
        price: number;
      }[];

  const [selectedSize, setSelectedSize] = useState(availableSizes[0]);

  const typeColor =
    foodItem.type === "veg" ? "bg-food-veg" : "bg-food-nonveg";

  const handleAddToCart = () => {
    addToCart({
      id: `${foodItem.id}-${selectedSize.key}`,
      name: foodItem.name,
      size: selectedSize.key,
      price: selectedSize.price,
      quantity: 1,
    });

    setOpen(true);
  };

  return (
    <div className="page-container pb-10 relative">
      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{ backgroundImage: "url('/food-bg.png')" }}
      />

      <PageHeader title={foodItem.name} />

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="md:flex gap-6">

          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <div
                className={`w-6 h-6 rounded-sm border-2 ${typeColor} flex items-center justify-center mr-2`}
              >
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>

              <span className="font-medium">
                {foodItem.type === "veg"
                  ? "Vegetarian"
                  : "Non-Vegetarian"}
              </span>

              {foodItem.popular && (
                <span className="ml-auto bg-food-amber/20 text-food-orange text-sm font-medium px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
            </div>

            {!isSinglePrice && (
              <>
                <p className="font-medium mb-2">Select Size:</p>

                <div className="flex gap-3 flex-wrap mb-5">
                  {availableSizes.map((size) => (
                    <button
                      key={size.key}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border font-medium ${
                        selectedSize.key === size.key
                          ? "bg-primary text-white border-primary"
                          : "bg-white"
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </>
            )}

            <p className="text-2xl font-bold text-green-600 mb-6">
              ₹{selectedSize.price}
            </p>

            <button
              onClick={handleAddToCart}
              className="w-full bg-primary text-white py-3 px-5 rounded-md font-semibold flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>

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

            {!isSinglePrice && (
              <p className="text-center text-sm text-muted-foreground mt-2">
                {selectedSize.label} • ₹{selectedSize.price}
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FoodDetails;