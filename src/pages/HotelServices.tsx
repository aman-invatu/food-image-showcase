import { Building2, Bed, Coffee, Wifi, Car, Utensils, CarFront, TreeDeciduous, PartyPopper, FastForward, Menu } from "lucide-react";
import { motion } from "framer-motion";

const HotelServices = () => {
  const services = [
    {
      icon: <Coffee className="w-8 h-8"/>,
      title: "24/7 Room Service",
      description: "Enjoy our premium in-room dining service available around the clock. Our expert chefs prepare delicious meals tailored to your preferences.",
      category: "Dining"
    },
    {
      icon: <Wifi className="w-8 h-8"/>,
      title: "High-Speed WiFi",
      description: "Stay connected with our ultra-fast fiber optic internet throughout the hotel premises. Perfect for both business and leisure.",
      category: "Technology"
    },
    {
      icon: <Wifi className="w-8 h-8"/>,
      title: "High-Speed WiFi",
      description: "Stay connected with our ultra-fast fiber optic internet throughout the hotel premises. Perfect for both business and leisure.",
      category: "Technology"
    },
    {
      icon: <Car className="w-8 h-8"/>,
      title: "Valet Parking",
      description: "Leave your vehicle in the capable hands of our professional valet team. Secure, covered parking available 24/7.",
      category: "Parking"
    },
    {
      icon: <Car className="w-8 h-8"/>,
      title: "Valet Parking",
      description: "Leave your vehicle in the capable hands of our professional valet team. Secure, covered parking available 24/7.",
      category: "Parking"
    },
    {
      icon: <Car className="w-8 h-8"/>,
      title: "Valet Parking",
      description: "Leave your vehicle in the capable hands of our professional valet team. Secure, covered parking available 24/7.",
      category: "Parking"
    },
    {
      icon: <Utensils className="w-8 h-8"/>,
      title: "Fine Dining Restaurant",
      description: "Experience culinary excellence at our award-winning restaurant featuring international cuisine and local specialties.",
      category: "Dining"
    },
   
    {
      icon: <PartyPopper className="w-8 h-8"/>,
      title: "Event Spaces",
      description: "Elegant venues for all occasions - weddings, conferences, or private celebrations with professional event planning services.",
      category: "Events"
    },
    {
      icon: <PartyPopper className="w-8 h-8"/>,
      title: "Event Spaces",
      description: "Elegant venues for all occasions - weddings, conferences, or private celebrations with professional event planning services.",
      category: "Events"
    },
    {
      icon: <PartyPopper className="w-8 h-8"/>,
      title: "Event Spaces",
      description: "Elegant venues for all occasions - weddings, conferences, or private celebrations with professional event planning services.",
      category: "Events"
    },
    {
      icon: <Menu className="w-8 h-8"/>,
      title: "Multiple Restaurants",
      description: "Choose from our variety of dining options including international cuisine, local specialties, and casual cafes.",
      category: "Dining"
    },
    {
      icon: <Menu className="w-8 h-8"/>,
      title: "Multiple Restaurants",
      description: "Choose from our variety of dining options including international cuisine, local specialties, and casual cafes.",
      category: "Dining"
    },
    {
      icon: <Menu className="w-8 h-8"/>,
      title: "Multiple Restaurants",
      description: "Choose from our variety of dining options including international cuisine, local specialties, and casual cafes.",
      category: "Dining"
    },
   
    {
      icon: <Building2 className="w-8 h-8"/>,
      title: "Business Center",
      description: "Fully equipped business center with meeting rooms, videoconferencing facilities, and secretarial services.",
      category: "Business"
    }
  ];

  const categories = [...new Set(services.map(service => service.category))];

  return (
    <div className="min-h-[400vh] bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              World-Class Hotel Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Experience luxury and comfort with our comprehensive range of premium services designed to make your stay exceptional
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="mb-20">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category} Services</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                      <div className="p-8">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                          <div className="text-blue-600">{service.icon}</div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-center">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelServices;
