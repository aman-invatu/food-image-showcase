
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

interface OrderItem {
  name: string;
  price: string;
  image: string;
}

const Orders = () => {
  const [selectedTip, setSelectedTip] = useState<number>(10);
  const [orders] = useState<OrderItem[]>([
    {
      name: "Avocado Toast",
      price: "37.00",
      image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=200&h=200&fit=crop"
    },
    {
      name: "Summer Salad",
      price: "45.00",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=200&h=200&fit=crop"
    },
    {
      name: "Red Lentil Soup",
      price: "62.00",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=200&h=200&fit=crop"
    }
  ]);

  const subtotal = orders.reduce((acc, order) => acc + parseFloat(order.price), 0);
  const tipAmount = (subtotal * selectedTip) / 100;
  const total = subtotal + tipAmount;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 px-4 max-w-md mx-auto">
        <div className="space-y-6">
          {/* Order Items */}
          <div className="space-y-4">
            {orders.map((order, index) => (
              <div key={index} className="flex items-center gap-3 py-2">
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <span className="flex-1 text-base">{order.name}</span>
                <span className="text-base">AED {order.price}</span>
              </div>
            ))}
          </div>

          {/* Total Bill */}
          <div className="flex items-center justify-between pt-4 border-t">
            <span className="text-base font-medium">Total Bill</span>
            <span className="text-base font-medium">AED {subtotal.toFixed(2)}</span>
          </div>

          {/* Tip Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🤠</span>
              <div>
                <p className="font-medium">Your tip matters!</p>
                <p className="text-sm text-gray-600">
                  Tip amount: AED {tipAmount.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Tip Options */}
            <div className="flex gap-4 justify-center">
              {[7, 10, 15].map((tip) => (
                <button
                  key={tip}
                  onClick={() => setSelectedTip(tip)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTip === tip
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tip}%
                </button>
              ))}
            </div>
          </div>

          {/* Final Amount */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">You pay</span>
              <span className="text-lg font-medium">AED {total.toFixed(2)}</span>
            </div>
            <p className="text-sm text-gray-500">Includes tip, taxes and charges</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              variant="outline"
              className="flex-1 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-600 border-purple-200"
            >
              Split bill
            </Button>
            <Button className="flex-1 rounded-full bg-purple-600 hover:bg-purple-700">
              Pay fully
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;
