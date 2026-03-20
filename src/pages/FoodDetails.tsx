import { useParams } from "react-router-dom";
import { getFoodItemById } from "../data/menuData";
import PageHeader from "../components/PageHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";
import { useCartDialog } from "@/context/CartDialogContext";

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

  // ✅ Pick ONE price only
  const price =
    foodItem.price.full ??
    foodItem.price.half ??
    foodItem.price.mini ??
    0;

  const typeColor =
    foodItem.type === "veg" ? "bg-food-veg" : "bg-food-nonveg";

  const handleAddToCart = () => {
    addToCart({
      id: foodItem.id,
      name: foodItem.name,
      size: "full", // fixed internally
      price: price,
      quantity: 1,
    });

    setOpen(true);
  };

  return (
    <div className="page-container pb-10 relative">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{ backgroundImage: "url('/food-bg.png')" }}
      />

      <PageHeader title={foodItem.name} />

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
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

            {/* PRICE ONLY */}
            <p className="text-xl font-semibold mb-6">
              Price: ₹{price}
            </p>

            <button
              onClick={handleAddToCart}
              className="mt-4 w-full bg-primary text-white py-3 px-5 rounded-md font-semibold flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} /> Add to Cart
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
              ₹{price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
