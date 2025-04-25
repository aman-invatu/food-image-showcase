
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import MenuSection from "@/components/MenuSection";
import RestaurantSection from "@/components/RestaurantSection";
import FoodQualitySection from "@/components/FoodQualitySection";
import Reviews from "@/components/Reviews";
import RoomsSection from "@/components/RoomsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSlider />
        <div className="space-y-16 md:space-y-24">
          <MenuSection />
          <RestaurantSection />
          <FoodQualitySection />
          <RoomsSection />
          <Reviews />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
