
import { Card, CardContent } from "./ui/card";

const featuredDishes = [
  {
    id: 1,
    name: "Signature Pasta",
    description: "Fresh homemade pasta with rich truffle sauce",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
    price: "$24.99"
  },
  {
    id: 2,
    name: "Grilled Salmon",
    description: "Atlantic salmon with herbs and lemon butter",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    price: "$29.99"
  },
  {
    id: 3,
    name: "Classic Burger",
    description: "Premium beef patty with artisanal toppings",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    price: "$18.99"
  }
];

const FeaturedDishes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{dish.name}</h3>
                  <span className="text-amber-600 font-semibold">{dish.price}</span>
                </div>
                <p className="text-gray-600">{dish.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
