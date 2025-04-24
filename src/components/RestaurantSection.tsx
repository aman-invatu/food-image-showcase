
import { ChefHat, Utensils } from "lucide-react";

const RestaurantSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-8">Since 1889, PAUL has been serving authentic French cuisine</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-scale-in">
            <div className="flex items-center gap-4 mb-4">
              <ChefHat className="w-8 h-8 text-gray-700" />
              <h3 className="text-xl font-medium">Master Chefs</h3>
            </div>
            <p className="text-gray-600">Our expert chefs bring decades of experience in French culinary arts, ensuring every dish meets the highest standards of quality and taste.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-scale-in delay-150">
            <div className="flex items-center gap-4 mb-4">
              <Utensils className="w-8 h-8 text-gray-700" />
              <h3 className="text-xl font-medium">Traditional Recipes</h3>
            </div>
            <p className="text-gray-600">We preserve the authenticity of traditional French recipes while adding our own contemporary twist to create unforgettable dining experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
