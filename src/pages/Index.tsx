
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import MenuSection1 from "@/components/MenuSection1";
import MenuSection2 from "@/components/MenuSection2";
import MenuSection3 from "@/components/MenuSection3";
import MenuSection4 from "@/components/MenuSection4";
import MenuSection5 from "@/components/MenuSection5";
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
          <MenuSection1 />
          <MenuSection2 />
          <MenuSection3 />
          <MenuSection4 />
          <MenuSection5 />
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
