
import { Building2, Bed, Coffee, Wifi, Car, Utensils } from "lucide-react";

const HotelServices = () => {
  const services = [
    {
      icon: <Coffee className="w-8 h-8"/>,
      title: "Room Service",
      description: "24/7 in-room dining service available"
    },
    {
      icon: <Wifi className="w-8 h-8"/>,
      title: "Free Wi-Fi",
      description: "High-speed internet throughout the hotel"
    },
    {
      icon: <Car className="w-8 h-8"/>,
      title: "Valet Parking",
      description: "Convenient parking service for guests"
    },
    {
      icon: <Utensils className="w-8 h-8"/>,
      title: "Restaurant",
      description: "Fine dining experience with local cuisine"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Hotel Services
          </h2>
          <p className="text-lg text-gray-600">
            Experience luxury and comfort with our premium hotel services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelServices;
