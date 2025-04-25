
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-12 text-center">The essence of taste</h1>
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <img
                src="/lovable-uploads/771e93c0-45e0-40f9-96ab-ffdad3cc70e7.png"
                alt="Our chefs"
                className="w-full rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-xl text-gray-600">
                An authentic passion for flavours, a philosophy nurtured by Nature. PAUL presents the vibrant artistry of our renowned chefs and culinary experts.
              </p>
              <p className="text-gray-600">
                A delightful invitation to scrumptious moments from dawn to dusk, gazing at the Parisian scenery. Our commitment to excellence has earned us recognition worldwide.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">Award Winning</h3>
              <p className="text-gray-600">Recognized for culinary excellence and exceptional service.</p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">Fresh Ingredients</h3>
              <p className="text-gray-600">We source the finest ingredients from local suppliers.</p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">Expert Chefs</h3>
              <p className="text-gray-600">Our team of passionate chefs create memorable dining experiences.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
