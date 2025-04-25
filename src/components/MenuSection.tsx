import { Card } from "./ui/card";
import { motion } from "framer-motion";

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
  },
  {
    id: 5,
    name: "Summer Salad",
    description: "Mixed greens with cherry tomatoes, feta cheese, and light vinaigrette",
    price: "45.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=200&h=200&fit=crop"
  },,
  {
    id: 6,
    name: "Summer Salad",
    description: "Mixed greens with cherry tomatoes, feta cheese, and light vinaigrette",
    price: "45.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=200&h=200&fit=crop"
  },,
  {
    id: 7,
    name: "Summer Salad",
    description: "Mixed greens with cherry tomatoes, feta cheese, and light vinaigrette",
    price: "45.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=200&h=200&fit=crop"
  },
];

const MenuSection = () => {
  return (
    <section className="py-4 bg-white min-h-screen">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4">
        {/* Menu Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Our Menu</h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, made with fresh ingredients and traditional recipes.
          </p>
        </div>
        
        {/* Menu Items - Grid for larger screens */}
        <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group mb-6 md:mb-0"
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
              {/* Only show divider on mobile */}
              <div className="border-b border-gray-100 md:hidden"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
