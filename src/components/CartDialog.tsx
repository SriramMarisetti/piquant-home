import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CartDialog: React.FC<Props> = ({ open, onOpenChange }) => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

const getWhatsAppLink = () => {
  const baseUrl = "https://wa.me/917989152819?text=";

  const itemLines = cart.map(
    item =>
      `• *${item.name}* (${item.size.charAt(0).toUpperCase() + item.size.slice(1)}) x ${item.quantity} = ₹${item.price * item.quantity}`
  );

  const message = `
Hello! I would like to place an order. 🛍️

*🧾 Order Details:*
${itemLines.join("\n")}

*💰 Total Bill:* ₹${totalPrice}
 `;

  const encodedMessage = encodeURIComponent(message.trim());
  return `${baseUrl}${encodedMessage}`;
};


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Your Cart</DialogTitle>
        </DialogHeader>

        {cart.length === 0 ? (
          <p className="text-center text-muted-foreground py-6">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-start border-b pb-3">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.size.charAt(0).toUpperCase() + item.size.slice(1)} x {item.quantity}
                  </p>
                  <p className="text-sm font-semibold">₹{item.price * item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="text-red-500 hover:text-red-600"
                >
                  <X size={18} />
                </button>
              </div>
            ))}

            <div className="text-right font-bold text-lg pt-4 border-t">
              Total: ₹{totalPrice}
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 hover:bg-green-700 text-white font-medium text-center py-3 rounded-md mt-4"
            >
              Buy on WhatsApp
            </a>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartDialog;
