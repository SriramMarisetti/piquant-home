import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { getFoodItemsByCategory, getCategoryById } from "../data/menuData";
import { FoodItem, FoodType } from "../types/menu";
import FoodCard from "../components/FoodCard";

const FoodList = () => {
  const { categoryId, type } = useParams<{ categoryId: string; type: string }>();

  const category = categoryId ? getCategoryById(categoryId as any) : undefined;

  const validType: FoodType | undefined =
    type === "veg" || type === "non-veg" ? type : undefined;

  let foodItems: FoodItem[] = [];

  if (category && validType) {
    foodItems = getFoodItemsByCategory(category.id, validType);
  }

  const itemCount = foodItems.length;

  // Categories that need centered layout
  const centerAlignedCategories = [
    "bhojanam-box",
    "breakfast-box",
    "lunch-box",
    "dinner-box",

    "diet-breakfast",
    "diet-lunch",
    "diet-dinner",
    "diet-fruit-bowl",

    "diet-breakfast-subscription",
    "diet-lunch-subscription",
    "diet-dinner-subscription",
    "diet-fruit-bowl-subscription",
    "diet-combo-1-subscription",
    "diet-combo-2-subscription",

    "breakfast-subscription",
    "lunch-subscription",
    "curry-subscription",
    "dinner-subscription",
  ];

  const shouldCenter = categoryId && centerAlignedCategories.includes(categoryId);

  // Title rule
  const hideTypeInTitle = ["podulu", "traditional-snacks", "rice-mix", "cakes"];

  return (
    <div className="page-container relative">
      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{ backgroundImage: "url('/food-bg.png')" }}
      />

      <PageHeader
        title={
          hideTypeInTitle.includes(categoryId ?? "")
            ? category?.name || "Food"
            : `${category?.name || "Food"} (${
                validType === "veg" ? "Vegetarian" : "Non-Vegetarian"
              })`
        }
      />

      {itemCount > 0 ? (
        <div
          className={`
            mx-auto
            ${shouldCenter ? "max-w-5xl" : "max-w-7xl"}
          `}
        >
          <div
            className={`
              grid gap-6
              ${
                itemCount === 1
                  ? "grid-cols-1 place-items-center"
                  : itemCount === 2
                  ? "grid-cols-1 sm:grid-cols-2 justify-center"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }
            `}
          >
            {foodItems.map((food) => (
              <div
                key={food.id}
                className={
                  itemCount <= 2
                    ? "w-full max-w-sm mx-auto"
                    : "w-full"
                }
              >
                <FoodCard
                  food={food}
                  category={categoryId || ""}
                  type={validType}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center mt-8">
          <p className="text-xl text-muted-foreground">
            No items found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default FoodList;
