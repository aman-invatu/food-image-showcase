
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-serif mb-12 text-center">Get in Touch</h1>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">123 French Street, Paris</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contact@paul.com</p>
                  </div>
                </div>
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081893!2d2.2922926156744547!3d48.858370079285964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus" 
                  className="w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
              </div>
              <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
