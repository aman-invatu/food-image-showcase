
import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";
import RestaurantSection from "@/components/RestaurantSection";
import FoodQualitySection from "@/components/FoodQualitySection";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <Navbar />
      <MenuSection />
      <RestaurantSection />
      <FoodQualitySection />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
