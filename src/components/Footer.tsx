
import { Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 py-16">
          <div>
            <div className="flex flex-col items-start mb-6">
              <span className="text-2xl font-semibold tracking-tight text-white">PAUL</span>
              <span className="text-xs text-gray-400">depuis 1889</span>
            </div>
            <p className="text-sm text-gray-400">
              Experience the finest French cuisine in an elegant setting, where tradition meets innovation.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Menu", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Reservations", path: "/reservations" },
                { name: "Contact", path: "/contact" },
                { name: "Orders", path: "/orders" }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">123 French Street, Paris</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@paul.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Daily: 7:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to receive updates about new menu items and special offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm focus:outline-none focus:border-gray-600"
              />
              <button className="w-full px-4 py-2 bg-white text-gray-900 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} PAUL. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <Link
                  key={item}
                  to="/"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
