
import { motion } from "framer-motion";
import { Utensils } from "lucide-react";

const FastFood = () => {
  const categories = [
    {
      name: "Burgers & Sandwiches",
      items: [
        {
          name: "Classic Cheeseburger",
          description: "100% Angus beef patty with cheddar cheese, lettuce, tomato, and special sauce",
          price: "$12.99",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop"
        },
        {
          name: "Chicken Club Sandwich",
          description: "Grilled chicken breast with bacon, avocado, lettuce, and honey mustard",
          price: "$11.99",
          image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=300&h=200&fit=crop"
        },
        {
          name: "Veggie Burger",
          description: "Plant-based patty with grilled mushrooms, caramelized onions, and vegan mayo",
          price: "$13.99",
          image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      name: "Sides & Appetizers",
      items: [
        {
          name: "Loaded Fries",
          description: "Crispy fries topped with melted cheese, bacon bits, and green onions",
          price: "$7.99",
          image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop"
        },
        {
          name: "Onion Rings",
          description: "Beer-battered onion rings served with ranch dipping sauce",
          price: "$6.99",
          image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=300&h=200&fit=crop"
        },
        {
          name: "Mozzarella Sticks",
          description: "Breaded mozzarella sticks with marinara sauce",
          price: "$8.99",
          image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      name: "Beverages",
      items: [
        {
          name: "Milkshakes",
          description: "Choice of vanilla, chocolate, or strawberry",
          price: "$5.99",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop"
        },
        {
          name: "Fresh Lemonade",
          description: "Freshly squeezed lemonade with mint",
          price: "$4.99",
          image: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=300&h=200&fit=crop"
        },
        {
          name: "Milkshakes",
          description: "Choice of vanilla, chocolate, or strawberry",
          price: "$5.99",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop"
        }
      ]
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Ice Cream Sundae",
          description: "Three scoops with hot fudge, whipped cream, and a cherry",
          price: "$6.99",
          image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop"
        },
        {
          name: "Apple Pie",
          description: "Warm apple pie with vanilla ice cream",
          price: "$7.99",
          image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a1?w=300&h=200&fit=crop"
        },
        {
          name: "Ice Cream Sundae",
          description: "Three scoops with hot fudge, whipped cream, and a cherry",
          price: "$6.99",
          image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop"
        }
      ]
    }
  ];

  return (
    <div className="min-h-[400vh] bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Fast Food Menu
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Delicious food made fresh to order
            </motion.p>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <div key={category.name} className="mb-20">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Utensils className="w-8 h-8 text-orange-500" />
                  <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                </div>
                <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="aspect-w-16 aspect-h-9 rounded-t-xl overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <span className="text-lg font-bold text-orange-500">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FastFood;
