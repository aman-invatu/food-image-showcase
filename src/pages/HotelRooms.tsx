
import { Bed, Users, MapPin, Key } from "lucide-react";
import { Button } from "@/components/ui/button";

const HotelRooms = () => {
  const rooms = [
    {
      name: "Deluxe Suite",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      price: "$299",
      capacity: "2-3 people",
      size: "40m²",
      description: "Luxurious suite with city view and premium amenities"
    },
    {
      name: "Executive Room",
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      price: "$199",
      capacity: "2 people",
      size: "30m²",
      description: "Comfortable room with modern furnishings"
    },
    {
      name: "Family Suite",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      price: "$399",
      capacity: "4 people",
      size: "55m²",
      description: "Spacious suite perfect for families"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Rooms
          </h2>
          <p className="text-lg text-gray-600">
            Choose from our selection of premium rooms and suites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{room.name}</h3>
                  <span className="text-2xl font-bold text-blue-600">{room.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{room.size}</span>
                  </div>
                </div>
                <Button className="w-full bg-[#0062FF] hover:bg-blue-600">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelRooms;
