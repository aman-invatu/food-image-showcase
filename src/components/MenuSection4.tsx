import { motion } from "framer-motion";
import { useState } from "react";
import { Star, Heart, Clock } from "lucide-react";

const categories = [
  { id: "all", name: "All Items" },
  { id: "starters", name: "Starters" },
  { id: "mains", name: "Main Courses" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" }
];

const menuItems = [
  {
    id: 1,
    name: "Bruschetta",
    description: "Toasted bread with fresh tomatoes, basil, and garlic",
    price: "35.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=200&h=200&fit=crop",
    category: "starters",
    prepTime: "10 min",
    featured: true
  },
  {
    id: 2,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables",
    price: "85.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=200&h=200&fit=crop",
    category: "mains",
    prepTime: "20 min",
    featured: true
  },
  {
    id: 3,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
    price: "45.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=200&h=200&fit=crop",
    category: "desserts",
    prepTime: "15 min"
  },
  {
    id: 4,
    name: "Mojito",
    description: "Fresh mint, lime, sugar, and white rum with soda water",
    price: "40.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=200&h=200&fit=crop",
    category: "drinks",
    prepTime: "5 min"
  },
  {
    id: 5,
    name: "Beef Tenderloin",
    description: "Premium beef with red wine reduction and truffle mashed potatoes",
    price: "120.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=200&h=200&fit=crop",
    category: "mains",
    prepTime: "25 min",
    featured: true
  },
  {
    id: 6,
    name: "Calamari",
    description: "Crispy fried squid rings with marinara sauce",
    price: "55.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=200&h=200&fit=crop",
    category: "starters",
    prepTime: "15 min"
  }
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Menu Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse selection of dishes, carefully crafted to satisfy every palate.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Top Badges */}
                <div className="absolute top-3 right-3 flex gap-2">
                  {item.featured && (
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  )}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className={`p-2 rounded-full transition-colors duration-300 ${
                      favorites.includes(item.id)
                        ? "bg-red-500 text-white"
                        : "bg-white/90 text-gray-800 hover:bg-white"
                    }`}
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-lg font-bold text-orange-500">
                    {item.currency} {item.price}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{item.prepTime}</span>
                  </div>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors duration-300">
                    Add to Order
                  </button>
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
