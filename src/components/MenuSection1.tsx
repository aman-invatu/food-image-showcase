import { motion } from "framer-motion";
import { Star } from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with lemon butter sauce, roasted vegetables, and herb-infused rice",
    allergens: "Allergens: Fish",
    price: "85.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=200&h=200&fit=crop",
    featured: true
  },
  {
    id: 2,
    name: "Beef Tenderloin",
    description: "Premium beef tenderloin with red wine reduction, truffle mashed potatoes, and seasonal vegetables",
    price: "120.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=200&h=200&fit=crop",
    featured: true
  },
  {
    id: 3,
    name: "Mushroom Risotto",
    description: "Creamy arborio rice with wild mushrooms, white wine, and parmesan cheese",
    price: "65.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1574897578256-7a6a92c8b3b1?q=80&w=200&h=200&fit=crop"
  },
  {
    id: 4,
    name: "Lamb Shank",
    description: "Slow-cooked lamb shank with rosemary, garlic, and red wine sauce, served with creamy polenta",
    price: "95.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=200&h=200&fit=crop"
  },
  {
    id: 5,
    name: "Seafood Pasta",
    description: "Fresh linguine with prawns, mussels, and calamari in a white wine garlic sauce",
    price: "75.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=200&h=200&fit=crop"
  },
  {
    id: 6,
    name: "Vegetable Wellington",
    description: "Roasted vegetables wrapped in puff pastry with mushroom duxelles and red wine sauce",
    price: "70.00",
    currency: "AED",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&h=200&fit=crop"
  }
];

const MenuSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Menu Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dinner Menu</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience our exquisite dinner selection, featuring premium ingredients and expertly crafted dishes perfect for an evening of fine dining.
          </p>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {item.featured && (
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    <span>Chef's Special</span>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-lg font-bold text-orange-500">
                    {item.currency} {item.price}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                
                {item.allergens && (
                  <p className="text-xs text-gray-400 mb-3">{item.allergens}</p>
                )}
                
                <button className="w-full py-2 bg-orange-500 text-white rounded-md text-sm font-medium hover:bg-orange-600 transition-colors duration-300">
                  Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection; 