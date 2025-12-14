import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CheckoutDialog: React.FC<Props> = ({ open, onOpenChange }) => {
  const { cart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = () => {
    if (!name || !address) return alert("Please fill all details");

    const baseUrl = "https://wa.me/918500590591?text=";

    const itemLines = cart.map(
      item =>
        `• *${item.name}* (${item.size}) x ${item.quantity} = ₹${
          item.price * item.quantity
        }`
    );

    const message = `
*🛒 New Order*

👤 *Name:* ${name}
📍 *Address:* ${address}

*🧾 Order Details:*
${itemLines.join("\n")}

*💰 Total:* ₹${totalPrice}
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
            className="w-full border rounded-md px-3 py-2"
            rows={3}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium"
          >
            Continue to WhatsApp
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;
