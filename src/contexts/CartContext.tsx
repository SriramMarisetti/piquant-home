
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, FoodSize } from '../types/menu';
import { useToast } from '@/hooks/use-toast';

interface CartContextType {
  items: CartItem[];
  addToCart: (foodId: string, name: string, size: FoodSize, price: number, image?: string) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (foodId: string, name: string, size: FoodSize, price: number, image?: string) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.foodId === foodId && item.size === size);
      
      if (existingItem) {
        const updatedItems = prevItems.map(item =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        toast({
          title: "Item Updated",
          description: `${name} (${size}) quantity increased to ${existingItem.quantity + 1}`,
        });
        return updatedItems;
      } else {
        const newItem: CartItem = {
          id: `${foodId}-${size}-${Date.now()}`,
          foodId,
          name,
          size,
          price,
          quantity: 1,
          image
        };
        toast({
          title: "Added to Cart",
          description: `${name} (${size}) added to cart`,
        });
        return [...prevItems, newItem];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setItems(prevItems => {
      const item = prevItems.find(item => item.id === id);
      if (item) {
        toast({
          title: "Removed from Cart",
          description: `${item.name} (${item.size}) removed from cart`,
        });
      }
      return prevItems.filter(item => item.id !== id);
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart Cleared",
      description: "All items removed from cart",
    });
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalItems,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
