
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Reservations = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-serif mb-8">Book Your Table</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-gray-600 text-lg">
                Experience the essence of French cuisine in an elegant setting. Reserve your table today and embark on a culinary journey.
              </p>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Time</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Guests</label>
                  <input type="number" min="1" max="8" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                  Reserve Now
                </button>
              </form>
            </div>
            <div className="hidden md:block">
              <img
                src="/lovable-uploads/25b76d4b-de54-4074-b39f-7cd0455a2f17.png"
                alt="Restaurant ambiance"
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reservations;
