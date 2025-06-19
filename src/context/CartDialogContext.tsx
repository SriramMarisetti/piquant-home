// CartDialogContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type CartDialogContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CartDialogContext = createContext<CartDialogContextType | undefined>(undefined);

export const CartDialogProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <CartDialogContext.Provider value={{ open, setOpen }}>
      {children}
    </CartDialogContext.Provider>
  );
};

export const useCartDialog = () => {
  const context = useContext(CartDialogContext);
  if (!context) throw new Error("useCartDialog must be used within CartDialogProvider");
  return context;
};
