
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-[80vh] bg-black">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Flavor Haven
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Experience culinary excellence with our carefully crafted dishes
          </p>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            View Menu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
