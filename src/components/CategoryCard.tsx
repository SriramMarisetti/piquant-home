
import { Link } from "react-router-dom";
import { CategoryInfo } from "../types/menu";

interface CategoryCardProps {
  category: CategoryInfo;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      to={`/type-selection/${category.id}`}
      className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center 
                 justify-center text-center card-hover animate-scale-in"
    >
      <div className="text-4xl mb-2">{category.icon}</div>
      <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
      <p className="text-sm text-muted-foreground">{category.description}</p>
    </Link>
  );
};

export default CategoryCard;
