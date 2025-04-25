
import { Button } from "./ui/button";

const RoomsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-8">
          ROOMS, SUITES & SIGNATURE PENTHOUSES
        </h1>
        <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12">
          A stay at PAUL offers unparalleled luxury with its elegant Rooms, Suites, and Signature Penthouses. Rising
          43 stories, it combines stylish interiors with stunning views of the city and surroundings, along with private
          outdoor spaces and pools. This is a stay you'll show off for years to come.
        </p>
        <div className="flex justify-center gap-4 mb-16">
          <Button 
            variant="outline" 
            className="bg-navy-900 text-white hover:bg-navy-800 border-2 px-8 py-6"
          >
            EXPLORE STAYS
          </Button>
          <Button 
            variant="outline" 
            className="bg-white text-gray-900 border-2 px-8 py-6 hover:bg-gray-50"
          >
            BOOK NOW
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group overflow-hidden">
            <img
              src="/lovable-uploads/17194e01-d132-4c2f-b4e8-7a765667ef26.png"
              alt="Luxury room with pool"
              className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="relative col-span-2">
            <img
              src="/lovable-uploads/25b76d4b-de54-4074-b39f-7cd0455a2f17.png"
              alt="Elegant suite interior"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
