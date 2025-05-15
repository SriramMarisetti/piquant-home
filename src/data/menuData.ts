
import { CategoryInfo, FoodCategory, FoodItem } from "../types/menu";

export const categories: CategoryInfo[] = [
  {
    id: 'starters',
    name: 'Starters',
    icon: '🍲',
    description: 'Begin your meal with our delicious appetizers',
  },
  {
    id: 'biryani',
    name: 'Biryani',
    icon: '🍚',
    description: 'Fragrant rice dishes cooked with spices and meat or vegetables',
  },
  {
    id: 'noodles',
    name: 'Noodles',
    icon: '🍜',
    description: 'Stir-fried noodles with a variety of flavors',
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: '🍰',
    description: 'Sweet treats to complete your meal',
  },
  {
    id: 'beverages',
    name: 'Beverages',
    icon: '🥤',
    description: 'Refreshing drinks for every occasion',
  },
  {
    id: 'tandoori',
    name: 'Tandoori',
    icon: '🔥',
    description: 'Clay oven specialties cooked to perfection',
  },
  {
    id: 'rice-curry',
    name: 'Rice & Curry',
    icon: '🍛',
    description: 'Flavorful curries with perfectly cooked rice',
  },
  {
    id: 'indian-breads',
    name: 'Indian Breads',
    icon: '🫓',
    description: 'Traditional breads to accompany your meal',
  },
];

export const foodItems: FoodItem[] = [
  // Starters
  {
    id: 'veg-spring-rolls',
    name: 'Vegetable Spring Rolls',
    description: 'Crispy spring rolls filled with fresh vegetables and served with sweet chili sauce.',
    ingredients: ['Cabbage', 'Carrot', 'Bean sprouts', 'Spring roll wrappers', 'Sweet chili sauce'],
    price: { mini: 80, half: 150, full: 280 },
    category: 'starters',
    type: 'veg',
    popular: true,
  },
  {
    id: 'chicken-65',
    name: 'Chicken 65',
    description: 'Spicy, deep-fried chicken dish originating from Chennai, India.',
    ingredients: ['Boneless chicken', 'Yogurt', 'Red chili powder', 'Ginger-garlic paste', 'Curry leaves'],
    price: { mini: 120, half: 220, full: 380 },
    category: 'starters',
    type: 'non-veg',
    popular: true,
  },
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka',
    description: 'Chunks of paneer marinated in spices and grilled to perfection.',
    ingredients: ['Cottage cheese (paneer)', 'Yogurt', 'Bell peppers', 'Spices', 'Mint chutney'],
    price: { half: 180, full: 320 },
    category: 'starters',
    type: 'veg',
  },
  {
    id: 'fish-amritsari',
    name: 'Amritsari Fish',
    description: 'Battered and fried fish fillets with Punjabi spices.',
    ingredients: ['Fish fillets', 'Gram flour', 'Carom seeds', 'Lemon juice', 'Chaat masala'],
    price: { half: 220, full: 400 },
    category: 'starters',
    type: 'non-veg',
  },
  
  // Biryani
  {
    id: 'veg-biryani',
    name: 'Vegetable Biryani',
    description: 'Fragrant rice cooked with mixed vegetables and aromatic spices.',
    ingredients: ['Basmati rice', 'Mixed vegetables', 'Biryani masala', 'Saffron', 'Mint leaves'],
    price: { mini: 140, half: 240, full: 420 },
    category: 'biryani',
    type: 'veg',
  },
  {
    id: 'chicken-biryani',
    name: 'Chicken Biryani',
    description: 'Classic dish made with basmati rice, chicken and traditional spices.',
    ingredients: ['Basmati rice', 'Chicken', 'Yogurt', 'Biryani masala', 'Mint leaves'],
    price: { mini: 160, half: 280, full: 480 },
    category: 'biryani',
    type: 'non-veg',
    popular: true,
  },
  {
    id: 'mutton-biryani',
    name: 'Mutton Biryani',
    description: 'Tender mutton cooked with rice and spices in the traditional style.',
    ingredients: ['Basmati rice', 'Mutton', 'Yogurt', 'Biryani masala', 'Fried onions'],
    price: { mini: 180, half: 320, full: 540 },
    category: 'biryani',
    type: 'non-veg',
  },
  
  // Noodles
  {
    id: 'veg-hakka-noodles',
    name: 'Veg Hakka Noodles',
    description: 'Stir-fried noodles with crunchy vegetables and soy sauce.',
    ingredients: ['Noodles', 'Cabbage', 'Bell peppers', 'Carrot', 'Soy sauce'],
    price: { mini: 120, half: 200, full: 350 },
    category: 'noodles',
    type: 'veg',
  },
  {
    id: 'chicken-noodles',
    name: 'Chicken Noodles',
    description: 'Stir-fried noodles with chicken strips and vegetables.',
    ingredients: ['Noodles', 'Chicken strips', 'Cabbage', 'Bell peppers', 'Soy sauce'],
    price: { mini: 140, half: 240, full: 400 },
    category: 'noodles',
    type: 'non-veg',
  },
  
  // Desserts
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    description: 'Soft, spongy milk solids balls soaked in rose-flavored sugar syrup.',
    ingredients: ['Milk powder', 'All-purpose flour', 'Cardamom', 'Sugar syrup', 'Rose water'],
    price: { mini: 60, half: 100, full: 180 },
    category: 'desserts',
    type: 'veg',
    popular: true,
  },
  {
    id: 'rasgulla',
    name: 'Rasgulla',
    description: 'Soft, spongy cheese balls soaked in light sugar syrup.',
    ingredients: ['Cottage cheese', 'Sugar', 'Cardamom', 'Rose water'],
    price: { mini: 60, half: 100, full: 180 },
    category: 'desserts',
    type: 'veg',
  },
  
  // Beverages
  {
    id: 'mango-lassi',
    name: 'Mango Lassi',
    description: 'Sweet and refreshing yogurt drink with mango pulp.',
    ingredients: ['Yogurt', 'Mango pulp', 'Sugar', 'Cardamom'],
    price: { full: 80 },
    category: 'beverages',
    type: 'veg',
  },
  {
    id: 'masala-chai',
    name: 'Masala Chai',
    description: 'Traditional Indian spiced tea with milk.',
    ingredients: ['Tea leaves', 'Milk', 'Sugar', 'Cardamom', 'Ginger'],
    price: { full: 40 },
    category: 'beverages',
    type: 'veg',
  },
  
  // Tandoori
  {
    id: 'tandoori-chicken',
    name: 'Tandoori Chicken',
    description: 'Chicken marinated in yogurt and spices, cooked in a clay oven.',
    ingredients: ['Chicken', 'Yogurt', 'Tandoori masala', 'Lemon juice', 'Ginger-garlic paste'],
    price: { half: 280, full: 500 },
    category: 'tandoori',
    type: 'non-veg',
    popular: true,
  },
  {
    id: 'tandoori-paneer',
    name: 'Tandoori Paneer Tikka',
    description: 'Marinated cottage cheese cubes cooked in a clay oven.',
    ingredients: ['Cottage cheese (paneer)', 'Yogurt', 'Tandoori masala', 'Bell peppers', 'Onions'],
    price: { half: 240, full: 420 },
    category: 'tandoori',
    type: 'veg',
  },
  
  // Rice & Curry
  {
    id: 'dal-makhani',
    name: 'Dal Makhani',
    description: 'Creamy black lentils cooked with butter and spices.',
    ingredients: ['Black lentils', 'Kidney beans', 'Butter', 'Cream', 'Spices'],
    price: { mini: 120, half: 200, full: 350 },
    category: 'rice-curry',
    type: 'veg',
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    description: 'Tender chicken in a rich, buttery tomato sauce.',
    ingredients: ['Chicken', 'Tomato', 'Butter', 'Cream', 'Spices'],
    price: { mini: 160, half: 280, full: 480 },
    category: 'rice-curry',
    type: 'non-veg',
    popular: true,
  },
  
  // Indian Breads
  {
    id: 'butter-naan',
    name: 'Butter Naan',
    description: 'Soft, leavened flatbread brushed with butter.',
    ingredients: ['All-purpose flour', 'Yogurt', 'Butter', 'Nigella seeds'],
    price: { full: 40 },
    category: 'indian-breads',
    type: 'veg',
  },
  {
    id: 'garlic-naan',
    name: 'Garlic Naan',
    description: 'Soft, leavened flatbread topped with garlic and butter.',
    ingredients: ['All-purpose flour', 'Yogurt', 'Butter', 'Garlic', 'Coriander leaves'],
    price: { full: 50 },
    category: 'indian-breads',
    type: 'veg',
    popular: true,
  },
];

export const getCategoryById = (id: FoodCategory): CategoryInfo | undefined => {
  return categories.find((category) => category.id === id);
};

export const getFoodItemsByCategory = (
  category: FoodCategory,
  type?: 'veg' | 'non-veg'
): FoodItem[] => {
  return foodItems.filter(
    (item) => item.category === category && (type ? item.type === type : true)
  );
};

export const getFoodItemById = (id: string): FoodItem | undefined => {
  return foodItems.find((item) => item.id === id);
};
