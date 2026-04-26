import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { getFoodItemsByCategory, getCategoryById } from "../data/menuData";
import { FoodItem, FoodType } from "../types/menu";
import FoodCard from "../components/FoodCard";
import { CalendarDays } from "lucide-react";

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

  const itemCount = foodItems.length;
  const isSingleItem = itemCount === 1;

  const hideTypeInTitle = [
    "podulu",
    "traditional-snacks",
    "rice-mix",
    "cakes",
  ];

  return (
    <div className="page-container relative min-h-screen">
      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{ backgroundImage: "url('/food-bg.png')" }}
      />

      <PageHeader
        title={
          hideTypeInTitle.includes(categoryId ?? "")
            ? category?.name || "Food"
            : `${category?.name || "Food"} (${
                validType === "veg"
                  ? "Vegetarian"
                  : "Non-Vegetarian"
              })`
        }
      />

      {itemCount > 0 ? (
        <div
          className={`grid gap-6 mt-6 animate-fade-in
          ${
            itemCount === 1
              ? "grid-cols-1 place-items-center"
              : itemCount === 2
              ? "grid-cols-1 sm:grid-cols-2 place-items-center"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {foodItems.map((food) => (
            <div
              key={food.id}
              className={`w-full ${
                isSingleItem ? "max-w-sm" : "max-w-md"
              }`}
            >
              <FoodCard
                food={{
                  ...food,
                  sizes:
                    food.category === "breakfast-box"
                      ? [
                          {
                            label: "Box",
                            price:
                              food.price.mini ?? 80,
                          },
                        ]
                      : food.category === "podulu"
                      ? [
                          {
                            label: "200g",
                            price:
                              food.price.mini ?? 0,
                          },
                          {
                            label: "500g",
                            price:
                              food.price.half ?? 0,
                          },
                          {
                            label: "1kg",
                            price:
                              food.price.full ?? 0,
                          },
                        ].filter(
                          (item) => item.price > 0
                        )
                      : [
                          {
                            label: "250gms",
                            price:
                              food.price.mini ?? 0,
                          },
                          {
                            label: "500gms",
                            price:
                              food.price.half ?? 0,
                          },
                          {
                            label: "1kg",
                            price:
                              food.price.full ?? 0,
                          },
                        ].filter(
                          (item) => item.price > 0
                        ),
                }}
                category={categoryId || ""}
                type={validType}
              />

              {/* Subscription Notice */}
              {food.category.includes(
                "subscription"
              ) &&
                food.description && (
                  <div className="mt-3 bg-red-50 border border-red-100 rounded-xl p-4 flex gap-3 shadow-sm">
                    <CalendarDays
                      size={18}
                      className="text-red-500 mt-1 shrink-0"
                    />

                    <p className="text-sm font-medium text-gray-800 leading-snug">
                      {food.description}
                    </p>
                  </div>
                )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-10">
          <p className="text-xl text-muted-foreground">
            No items found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default FoodList;