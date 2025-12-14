import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import { X } from "lucide-react";
import { useState } from "react";

/* =======================
   Checkout Dialog
======================= */

type CheckoutProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CheckoutDialog: React.FC<CheckoutProps> = ({ open, onOpenChange }) => {
  const { cart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleContinue = () => {
    if (!name || !address) {
      alert("Please enter name and address");
      return;
    }

    const baseUrl = "https://wa.me/918500590591?text=";

    const itemLines = cart.map(
      item =>
        `• *${item.name}* (${item.size.charAt(0).toUpperCase() + item.size.slice(1)}) x ${item.quantity} = ₹${item.price * item.quantity}`
    );

    const message = `
🛒 *New Order*

👤 *Name:* ${name}
📍 *Address:* ${address}

🧾 *Order Details:*
${itemLines.join("\n")}

💰 *Total:* ₹${totalPrice}
    `;

    window.open(baseUrl + encodeURIComponent(message.trim()), "_blank");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Delivery Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />

          <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            rows={3}
            className="w-full border rounded-md px-3 py-2"
          />

          <button
            onClick={handleContinue}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-md"
          >
            Continue to WhatsApp
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

/* =======================
   Cart Dialog
======================= */

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CartDialog: React.FC<Props> = ({ open, onOpenChange }) => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const [openCheckout, setOpenCheckout] = useState(false);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Your Cart</DialogTitle>
          </DialogHeader>

          {cart.length === 0 ? (
            <p className="text-center text-muted-foreground py-6">
              Your cart is empty.
            </p>
          ) : (
            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start border-b pb-3"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.size.charAt(0).toUpperCase() + item.size.slice(1)}
                    </p>

                    <div className="flex items-center space-x-2 mt-1">
                      <button
                        onClick={() => decreaseQuantity(item.id, item.size)}
                        className="w-6 h-6 bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id, item.size)}
                        className="w-6 h-6 bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-sm font-semibold mt-1">
                      ₹{item.price * item.quantity}
                    </p>
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

              <button
                onClick={() => setOpenCheckout(true)}
                className="block w-full bg-green-600 hover:bg-green-700 text-white font-medium text-center py-3 rounded-md mt-4"
              >
                Buy on WhatsApp
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Checkout Dialog */}
      <CheckoutDialog
        open={openCheckout}
        onOpenChange={setOpenCheckout}
      />
    </>
  );
};

export default CartDialog;
