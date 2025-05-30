
import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';
import { AspectRatio } from './ui/aspect-ratio';

const CartSheet = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <p className="text-lg font-medium text-muted-foreground mb-2">Your cart is empty</p>
        <p className="text-sm text-muted-foreground">Add some delicious items to get started!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto space-y-4 py-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3 p-3 bg-muted/50 rounded-lg">
            {item.image && (
              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                <AspectRatio ratio={1}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            )}
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium truncate">{item.name}</h4>
              <p className="text-sm text-muted-foreground capitalize">{item.size} size</p>
              <p className="text-sm font-medium">₹{item.price}</p>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFromCart(item.id)}
                className="h-8 w-8 p-0 text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="h-8 w-8 p-0"
                >
                  <Minus className="h-3 w-3" />
                </Button>
                
                <span className="w-8 text-center text-sm font-medium">
                  {item.quantity}
                </span>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="h-8 w-8 p-0"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t pt-4 space-y-4">
        <div className="flex justify-between items-center text-lg font-semibold">
          <span>Total: ₹{getTotalPrice()}</span>
        </div>
        
        <div className="space-y-2">
          <Button className="w-full" size="lg">
            Proceed to Checkout
          </Button>
          <Button variant="outline" onClick={clearCart} className="w-full">
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartSheet;
