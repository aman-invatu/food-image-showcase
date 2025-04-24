
import { Utensils } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const menuItems = {
  starters: [
    { id: 1, name: "Bruschetta", description: "Toasted bread with tomatoes and herbs", price: "$8.99" },
    { id: 2, name: "Calamari", description: "Crispy fried squid with aioli", price: "$12.99" }
  ],
  mainCourse: [
    { id: 3, name: "Ribeye Steak", description: "Premium cut with roasted vegetables", price: "$34.99" },
    { id: 4, name: "Lobster Risotto", description: "Creamy risotto with fresh lobster", price: "$38.99" }
  ],
  desserts: [
    { id: 5, name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: "$9.99" },
    { id: 6, name: "Crème Brûlée", description: "French vanilla custard with caramelized sugar", price: "$8.99" }
  ]
};

const MenuSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Utensils className="h-8 w-8 text-amber-600" />
          <h2 className="text-3xl font-bold text-center">Our Menu</h2>
        </div>
        
        <div className="space-y-12">
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-6 text-center capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item) => (
                  <Card key={item.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold">{item.name}</h4>
                        <span className="text-amber-600 font-semibold">{item.price}</span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
