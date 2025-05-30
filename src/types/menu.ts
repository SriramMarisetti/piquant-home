
export type FoodCategory =
  | 'starters'
  | 'biryani'
  | 'noodles'
  | 'desserts'
  | 'beverages'
  | 'tandoori'
  | 'rice-curry'
  | 'indian-breads'
  | 'south-indian'
  | 'north-indian'
  | 'chinese'
  | 'continental'
  | 'seafood'
  | 'salads'
  | 'soups'
  | 'wraps-rolls'
  | 'kids-menu'
  | 'specials'
  | 'vegan'
  | 'vegetarian'
  | 'gluten-free'
  | 'high-protein'
  | 'low-carb'
  | 'festive-specials'
  | 'combo-meals'
  | 'family-packs'
  | 'party-orders'
  | 'midnight-cravings';

export type FoodType = 'veg' | 'non-veg';

export type FoodSize = 'mini' | 'half' | 'full';

export interface FoodPrice {
  mini?: number;
  half?: number;
  full: number;
}

export interface SizeImages {
  mini?: string;
  half?: string;
  full?: string;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  price: FoodPrice;
  category: FoodCategory;
  type: FoodType;
  image?: string;
  sizeImages?: SizeImages;
  popular?: boolean;
}

export interface CategoryInfo {
  id: FoodCategory;
  name: string;
  icon: string;
  description: string;
}

export type CategoryGroup = 'cuisine' | 'course' | 'dietary' | 'occasion';

export interface ExtendedCategoryInfo extends CategoryInfo {
  group: CategoryGroup;
}

export interface CartItem {
  id: string;
  foodId: string;
  name: string;
  size: FoodSize;
  price: number;
  quantity: number;
  image?: string;
}
