import { motion } from "framer-motion";
import { Clock, Star } from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "Club Sandwich",
    description: "Triple-decker with turkey, bacon, lettuce, tomato, and mayo",
    price: "45.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?q=80&w=200&h=200&fit=crop",
    prepTime: "15 min",
    featured: true
  },
  {
    id: 2,
    name: "Caesar Salad",
    description: "Crisp romaine, parmesan, croutons, and our signature dressing",
    price: "35.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=200&h=200&fit=crop",
    prepTime: "10 min"
  },
  {
    id: 3,
    name: "Margherita Pizza",
    description: "Classic tomato sauce, fresh mozzarella, and basil",
    price: "55.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=200&h=200&fit=crop",
    prepTime: "20 min",
    featured: true
  },
  {
    id: 4,
    name: "Chicken Wrap",
    description: "Grilled chicken, mixed greens, and honey mustard in a whole wheat wrap",
    price: "40.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1562967914-608f826297cc?q=80&w=200&h=200&fit=crop",
    prepTime: "12 min"
  },
  {
    id: 5,
    name: "Beef Burger",
    description: "Angus beef patty with cheddar, lettuce, tomato, and special sauce",
    price: "50.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200&h=200&fit=crop",
    prepTime: "15 min"
  },
  {
    id: 6,
    name: "Pasta Primavera",
    description: "Fresh vegetables, garlic, and olive oil with your choice of pasta",
    price: "45.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1551183053-bf852996fb2f?q=80&w=200&h=200&fit=crop",
    prepTime: "18 min"
  }
];

const MenuSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Menu Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Lunch Specials</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quick and delicious lunch options, perfect for your midday break. All items prepared fresh to order.
          </p>
        </div>

        {/* Menu Items - Horizontal Scroll */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory scrollbar-hide">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-none w-[300px] snap-center"
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      {item.featured && (
                        <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          <span>Popular</span>
                        </div>
                      )}
                      <div className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{item.prepTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-orange-500">
                        {item.currency} {item.price}
                      </span>
                      <button className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-colors duration-300">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {menuItems.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
