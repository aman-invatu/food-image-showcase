
import { Heart, Star, Award } from "lucide-react";

const FoodQualitySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-semibold mb-4">Our Quality Standards</h2>
          <p className="text-gray-600">We take pride in delivering excellence in every bite</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 hover:-translate-y-1 transition-transform animate-scale-in">
            <Heart className="w-10 h-10 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Fresh Ingredients</h3>
            <p className="text-gray-600">Carefully selected fresh ingredients sourced from trusted suppliers</p>
          </div>

          <div className="text-center p-6 hover:-translate-y-1 transition-transform animate-scale-in delay-150">
            <Star className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Premium Quality</h3>
            <p className="text-gray-600">Strict quality control measures for consistent excellence</p>
          </div>

          <div className="text-center p-6 hover:-translate-y-1 transition-transform animate-scale-in delay-300">
            <Award className="w-10 h-10 text-blue-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Award Winning</h3>
            <p className="text-gray-600">Recognized for our commitment to culinary excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodQualitySection;
