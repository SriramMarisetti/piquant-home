import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { getCategoryById } from "../data/menuData";

const IMAGE_ONLY_CATEGORIES = [
  "cakes",
  "traditional-snacks",
  "rice-mix",
  "podulu",
];

const TypeSelection = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categoryId ? getCategoryById(categoryId as any) : undefined;

  if (!category) {
    return (
      <div className="page-container">
        <PageHeader title="Category Not Found" />
        <div className="flex justify-center mt-4">
          <Link to="/" className="btn-primary">
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  const isImageIcon =
    typeof category.icon === "string" &&
    (category.icon.startsWith("http") || category.icon.startsWith("/"));

  return (
    <div className="page-container relative">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{ backgroundImage: "url('/food-bg.png')" }}
      />

      {/* Header */}
      <PageHeader title={`${category.name} Options`} />

      <div className="flex flex-col space-y-6 mt-10">
        {/* ICON / IMAGE */}
        <div className="flex justify-center">
          {isImageIcon ? (
            <img
              src={category.icon}
              alt={category.name}
              className="w-28 h-28 object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          ) : (
            <span className="text-6xl">{category.icon}</span>
          )}
        </div>

        {/* TITLE */}
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">{category.name}</h1>
          <p className="text-muted-foreground">{category.description}</p>
        </div>

        {/* VEG / NON-VEG BUTTONS */}
        <div
          className={`grid gap-6 max-w-xl mx-auto w-full ${
            IMAGE_ONLY_CATEGORIES.includes(categoryId ?? "")
              ? "grid-cols-1 place-items-center"
              : "grid-cols-1 md:grid-cols-2"
          }`}
        >
          {/* Vegetarian */}
          <Link
            to={`/food-list/${category.id}/veg`}
            className={`bg-food-veg text-white flex items-center justify-center
              py-8 px-6 rounded-xl shadow-md font-bold text-lg card-hover
              ${
                IMAGE_ONLY_CATEGORIES.includes(categoryId ?? "")
                  ? "w-full max-w-sm"
                  : "w-full"
              }`}
          >
            🥦 Vegetarian
          </Link>

          {/* Non-Vegetarian */}
          {!IMAGE_ONLY_CATEGORIES.includes(categoryId ?? "") && (
            <Link
              to={`/food-list/${category.id}/non-veg`}
              className="bg-food-nonveg text-white flex items-center justify-center
                         py-8 px-6 rounded-xl shadow-md font-bold text-lg card-hover"
            >
              🍗 Non-Vegetarian
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypeSelection;
