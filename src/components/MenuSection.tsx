
import { Card } from "./ui/card";

const menuItems = [
  {
    id: 1,
    name: "Avocado Toast",
    description: "Toasted sourdough with smashed avocado, lime juice, and a sprinkle of chili",
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
  return (
    <section className="py-8 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <div className="space-y-6">
          {menuItems.map((item) => (
            <div key={item.id} className="flex gap-4 items-start">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1 leading-snug">
                  {item.description}
                </p>
                {item.allergens && (
                  <p className="text-xs text-gray-400 mb-1">{item.allergens}</p>
                )}
                <p className="text-sm font-medium text-gray-900">
                  {item.currency} {item.price}
                </p>
              </div>
              <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
