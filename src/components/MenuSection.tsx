
import { Card } from "./ui/card";
import { motion } from "framer-motion";

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
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our carefully curated selection of dishes, made with fresh ingredients and traditional recipes.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="flex gap-6 p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {item.description}
                    </p>
                    {item.allergens && (
                      <p className="text-sm text-gray-400 mb-2 italic">{item.allergens}</p>
                    )}
                    <p className="text-lg font-medium text-gray-900">
                      {item.currency} {item.price}
                    </p>
                  </div>
                  <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
