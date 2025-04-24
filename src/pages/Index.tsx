
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import MenuSection from "@/components/MenuSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <MenuSection />
    </div>
  );
};

export default Index;
