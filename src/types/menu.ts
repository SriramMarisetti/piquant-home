/* ================================
   CATEGORY TYPES
================================ */

export type FoodCategory =
  // 🔹 Main Box Categories (IMPORTANT)
  | 'breakfast-box'
  | 'lunch-box'
  | 'curry-box'
  | 'dinner-box'

  // 🔹 Bhojanam & Diet
  | 'bhojanam-box'
  | 'bhojanam-subscription'
  | 'diet-food'
  | 'diet-subscription'

    // 🔹 Diet Food (NEW)
  | 'diet-breakfast'
  | 'diet-lunch'
  | 'diet-dinner'
  | 'diet-fruit-bowl'


// 🔹 Healthy Diet Monthly Subscription Plans
| 'diet-breakfast-subscription'
| 'diet-lunch-subscription'
| 'diet-dinner-subscription'
| 'diet-fruit-bowl-subscription'
| 'diet-juice-subscription'
| 'diet-combo-1-subscription'
| 'diet-combo-2-subscription'

  // 🔹 Homemade Items
  | 'podulu'
  | 'rice-mix'
  | 'traditional-snacks'
  | 'pickles'
  | 'cakes'

  // 🔹 Restaurant Menu
  | 'starters'
  | 'biryani'
  | 'noodles'
  | 'desserts'
  | 'beverages'
  | 'tandoori'
  | 'rice-curry'
  | 'indian-breads'

  // 🔹 Cuisine Types
  | 'south-indian'
  | 'north-indian'
  | 'chinese'
  | 'continental'
  | 'seafood'

  // 🔹 Dietary
  | 'vegan'
  | 'vegetarian'
  | 'gluten-free'
  | 'high-protein'
  | 'low-carb'

  // 🔹 Special Menus
  | 'kids-menu'
  | 'combo-meals'
  | 'family-packs'
  | 'party-orders'
  | 'festive-specials'
  | 'midnight-cravings'

  // 🔹 Monthly Subscriptions
  | 'breakfast-subscription'
  | 'lunch-subscription'
  | 'curry-subscription'
  | 'dinner-subscription';


/* ================================
   FOOD TYPES
================================ */

export type FoodType = 'veg' | 'non-veg' | 'mixed';

export type FoodSize = 'mini' | 'half' | 'full';


/* ================================
   PRICE TYPE (FIXED)
================================ */

export interface FoodPrice {
  mini?: number | null;
  half?: number | null;
  full?: number | null;
  single?: number | null;
}


/* ================================
   FOOD ITEM
================================ */

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
  sizeImages?: Partial<Record<FoodSize, string>>;
}


/* ================================
   CATEGORY INFO
================================ */

export interface CategoryInfo {
  id: FoodCategory;
  name: string;
  icon: string;
  description: string;
}


/* ================================
   OPTIONAL EXTENDED CATEGORY
================================ */

export type CategoryGroup =
  | 'box'
  | 'subscription'
  | 'cuisine'
  | 'course'
  | 'dietary'
  | 'occasion';

export interface ExtendedCategoryInfo extends CategoryInfo {
  group: CategoryGroup;
}
