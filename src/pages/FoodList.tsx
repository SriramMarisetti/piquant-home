import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { getFoodItemsByCategory, getCategoryById } from "../data/menuData";
import { FoodItem, FoodType } from "../types/menu";
import FoodCard from "../components/FoodCard";

const FoodList = () => {
  const { categoryId, type } = useParams<{
    categoryId: string;
    type: string;
  }>();

  const category = categoryId
    ? getCategoryById(categoryId as any)
    : undefined;

  const validType: FoodType | undefined =
    type === "veg" || type === "non-veg" ? type : undefined;

  let foodItems: FoodItem[] = [];

  if (category && validType) {
    foodItems = getFoodItemsByCategory(category.id, validType);
  }

  const isSingleItem = foodItems.length === 1;

  // 👉 Categories where Veg / Non-Veg text should NOT appear
  const hideTypeInTitle = ["podulu", "traditional-snacks"];

  return (
    <div className="page-container relative">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{ backgroundImage: "url('/food-bg.png')" }}
      />

      {/* Page Header */}
      <PageHeader
        title={
          hideTypeInTitle.includes(categoryId ?? "")
            ? category?.name || "Food"
            : `${category?.name || "Food"} (${
                validType === "veg" ? "Vegetarian" : "Non-Vegetarian"
              })`
        }
      />

      {/* Food Items */}
      {foodItems.length > 0 ? (
        <div
          className={`grid gap-4 animate-fade-in
            ${
              isSingleItem
                ? "grid-cols-1 place-items-center"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
            }
          `}
        >
          {foodItems.map((food) => (
            <div
              key={food.id}
              className={isSingleItem ? "w-full max-w-sm" : ""}
            >
              <FoodCard
                food={food}
                category={categoryId || ""}
                type={validType}
              />
            </div>
          ))}
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
