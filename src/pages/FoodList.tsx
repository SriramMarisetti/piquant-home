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

  // ✅ Count AFTER foodItems is created
  const itemCount = foodItems.length;
  const isSingleItem = itemCount === 1;

  // 👉 Categories where Veg / Non-Veg should NOT appear in title
  const hideTypeInTitle = ["podulu", "traditional-snacks", "rice-mix", "cakes"];

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
      {itemCount > 0 ? (
        <div
          className={`grid gap-6 animate-fade-in justify-center
            ${
              itemCount === 1
                ? "grid-cols-1 place-items-center"
                : itemCount === 2
                ? "grid-cols-1 sm:grid-cols-2 place-content-center"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
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
