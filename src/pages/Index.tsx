
import Navbar from "@/components/Navbar";
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
      <main className="pt-20">
        <div className="space-y-16 md:space-y-24">
          <MenuSection />
          <RestaurantSection />
          <FoodQualitySection />
          <Reviews />
          <RoomsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
