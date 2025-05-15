
export type FoodCategory = 
  | 'starters'
  | 'biryani'
  | 'noodles'
  | 'desserts'
  | 'beverages'
  | 'tandoori'
  | 'rice-curry'
  | 'indian-breads';

export type FoodType = 'veg' | 'non-veg';

export type FoodSize = 'mini' | 'half' | 'full';

export interface FoodPrice {
  mini?: number;
  half?: number;
  full: number;
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
  popular?: boolean;
}

export interface CategoryInfo {
  id: FoodCategory;
  name: string;
  icon: string;
  description: string;
}
