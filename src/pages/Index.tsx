
import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";
import Reviews from "@/components/Reviews";

const Index = () => {
  return (
    <div className="min-h-screen pt-16 bg-white">
      <Navbar />
      <MenuSection />
      <Reviews />
    </div>
  );
};

export default Index;
