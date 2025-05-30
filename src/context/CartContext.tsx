// CartContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import { FoodItem, FoodSize } from '../types/menu';

type CartItem = {
  id: string;
  name: string;
  size: FoodSize;
  price: number;
  quantity: number;
};


type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, size: FoodSize) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id && p.size === item.size);
      if (existing) {
        return prev.map(p =>
          p.id === item.id && p.size === item.size ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string, size: FoodSize) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.size === size)));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
