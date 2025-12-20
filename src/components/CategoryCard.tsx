import { Link } from "react-router-dom";
import { CategoryInfo } from "../types/menu";
import { AspectRatio } from "./ui/aspect-ratio";

interface Props {
  category: CategoryInfo;
}

const CategoryCard = ({ category }: Props) => {
  return (
    <Link
      to={`/type-selection/${category.id}`}
      className="bg-white rounded-xl shadow-md overflow-hidden 
                 card-hover animate-scale-in flex flex-col"
    >
      {/* Image */}
      <AspectRatio ratio={4 / 3}>
        <img
          src={category.icon}
          alt={category.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/placeholder-food.jpg";
          }}
        />
      </AspectRatio>

      {/* Text */}
      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg">{category.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          {category.description}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
;