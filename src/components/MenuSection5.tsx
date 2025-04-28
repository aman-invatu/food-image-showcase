import { motion } from "framer-motion";
import { Star, Clock, ChevronRight } from "lucide-react";

const featuredItems = [
  {
    id: 1,
    name: "Beef Tenderloin",
    description: "Premium beef with red wine reduction, truffle mashed potatoes, and seasonal vegetables",
    price: "120.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&h=400&fit=crop",
    prepTime: "25 min",
    category: "Main Course"
  },
  {
    id: 2,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with lemon butter sauce and herb-infused rice",
    price: "85.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=400&h=400&fit=crop",
    prepTime: "20 min",
    category: "Main Course"
  }
];

const menuItems = [
  {
    id: 3,
    name: "Bruschetta",
    description: "Toasted bread with fresh tomatoes, basil, and garlic",
    price: "35.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=200&h=200&fit=crop",
    prepTime: "10 min",
    category: "Starters"
  },
  {
    id: 4,
    name: "Calamari",
    description: "Crispy fried squid rings with marinara sauce",
    price: "55.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=200&h=200&fit=crop",
    prepTime: "15 min",
    category: "Starters"
  },
  {
    id: 5,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
    price: "45.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=200&h=200&fit=crop",
    prepTime: "15 min",
    category: "Desserts"
  },
  {
    id: 6,
    name: "Mojito",
    description: "Fresh mint, lime, sugar, and white rum with soda water",
    price: "40.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=200&h=200&fit=crop",
    prepTime: "5 min",
    category: "Drinks"
  }
];

const MenuSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Menu Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Menu
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-orange-500 mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Experience our carefully curated selection of dishes, crafted with premium ingredients and expert techniques.
          </motion.p>
        </div>

        {/* Featured Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="relative h-[400px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-orange-400" />
                    <span className="text-sm font-medium">Featured</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-200 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">{item.currency} {item.price}</span>
                    <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300">
                      Order Now
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regular Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-center gap-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
            >
              <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-lg font-bold text-orange-500">
                    {item.currency} {item.price}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{item.prepTime}</span>
                  </div>
                  <span className="text-xs text-gray-400">{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
