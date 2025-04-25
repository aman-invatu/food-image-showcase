import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { useState } from "react";
import { Utensils } from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "Avocado Toast",
    description: "Toasted with smashed avocado, lime juice, and a sprinkle of chili",
    allergens: "Allergens: Gluten",
    price: "37.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=200&h=200&fit=crop"
  },
  {
    id: 2,
    name: "Summer Salad",
    description: "Mixed greens with cherry tomatoes, feta cheese, and light vinaigrette",
    price: "45.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=200&h=200&fit=crop"
  },
  {
    id: 3,
    name: "Red Lentil Soup",
    description: "Warm red lentil soup with cumin and coriander, topped with fresh herbs",
    price: "62.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=200&h=200&fit=crop"
  },
  {
    id: 4,
    name: "Beet Halloumi Quinoa",
    description: "Roasted beet, grilled halloumi with quinoa, avocado, and pumpkin seeds",
    price: "55.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&h=200&fit=crop"
  }
];

const MenuSection = () => {
  const [selectedItems, setSelectedItems] = useState<Array<{id: number, quantity: number}>>([]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  const addToOrder = (itemId: number) => {
    setSelectedItems(prev => {
      const existing = prev.find(item => item.id === itemId);
      if (existing) {
        return prev.map(item => 
          item.id === itemId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: itemId, quantity: 1 }];
    });
    setIsSheetOpen(true);
  };

  const getTotalBill = () => {
    return selectedItems.reduce((total, selected) => {
      const menuItem = menuItems.find(item => item.id === selected.id);
      return total + (parseFloat(menuItem?.price || "0") * selected.quantity);
    }, 0);
  };

  const getTipAmount = (percentage: number) => {
    return (getTotalBill() * percentage) / 100;
  };

  return (
    <section className="py-4 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Our Menu</h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, made with fresh ingredients and traditional recipes.
          </p>
        </div>
        
        <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group mb-6 md:mb-0 cursor-pointer"
              onClick={() => addToOrder(item.id)}
            >
              <div className="flex items-start justify-between gap-4 py-6 bg-white rounded-lg px-4 transition-all duration-300 shadow-lg border border-gray-100">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  {item.allergens && (
                    <p className="text-xs md:text-sm text-gray-400 mb-2">{item.allergens}</p>
                  )}
                  <p className="text-base md:text-lg font-medium text-gray-900">
                    {item.currency} {item.price}
                  </p>
                </div>
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="border-b border-gray-100 md:hidden"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Utensils className="h-5 w-5" />
              Your Order
            </SheetTitle>
          </SheetHeader>
          
          <div className="mt-6 space-y-6">
            {selectedItems.map(selected => {
              const item = menuItems.find(m => m.id === selected.id);
              if (!item) return null;
              
              return (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">Quantity: {selected.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium">
                    AED {(parseFloat(item.price) * selected.quantity).toFixed(2)}
                  </p>
                </div>
              );
            })}

            <div className="border-t pt-4">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total Bill</span>
                <span className="font-medium">AED {getTotalBill().toFixed(2)}</span>
              </div>

              <p className="text-sm text-gray-600 mb-3">Your tip matters!</p>
              <div className="flex gap-3 mb-6">
                {[7, 10, 15].map(percentage => (
                  <Button
                    key={percentage}
                    variant="outline"
                    className="flex-1"
                  >
                    {percentage}%
                    <span className="block text-xs text-gray-500">
                      AED {getTipAmount(percentage).toFixed(2)}
                    </span>
                  </Button>
                ))}
              </div>

              <div className="space-y-3">
                <p className="text-sm text-gray-500">
                  Includes tip, taxes and charges
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline">Split bill</Button>
                  <Button>Pay fully</Button>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MenuSection;
