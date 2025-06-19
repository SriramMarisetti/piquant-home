import { useCart } from "@/context/CartContext";
import { useCartDialog } from "@/context/CartDialogContext";
import { ShoppingCart } from "lucide-react";
import CartDialog from "./CartDialog";

const CartIcon = () => {
  const { cart } = useCart();
  const { open, setOpen } = useCartDialog(); // Use shared context

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <button
          className="relative bg-primary text-white p-3 rounded-full shadow-lg"
          onClick={() => setOpen(true)}
        >
          <ShoppingCart className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              {totalItems}
            </span>
          )}
        </button>
      </div>
      <CartDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default CartIcon;
