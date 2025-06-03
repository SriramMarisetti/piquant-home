// CartContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import { FoodSize } from '../types/menu';

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
  getTotalItems: () => number;
  increaseQuantity: (id: string, size: FoodSize) => void;
  decreaseQuantity: (id: string, size: FoodSize) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id && p.size === item.size);
      if (existing) {
        return prev.map(p =>
          p.id === item.id && p.size === item.size
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string, size: FoodSize) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.size === size)));
  };

  const increaseQuantity = (id: string, size: FoodSize) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: string, size: FoodSize) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.size === size
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getTotalItems,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
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
