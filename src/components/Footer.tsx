
import { Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 French Street, Paris</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@paul.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Daily: 7:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Menu", "About Us", "Reservations", "Contact"].map((item) => (
                <li key={item}>
                  <Link to="/" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <p className="mb-4">Stay updated with our latest news and special offers</p>
            <div className="flex gap-4">
              <Link to="/" className="hover:text-white transition-colors">
                Facebook
              </Link>
              <Link to="/" className="hover:text-white transition-colors">
                Instagram
              </Link>
              <Link to="/" className="hover:text-white transition-colors">
                Twitter
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} PAUL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
