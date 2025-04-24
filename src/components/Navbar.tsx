
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
      <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-1">
          <img 
            src="/lovable-uploads/0ed49bf1-7a0d-4bf4-b5cd-d4951cca5cf0.png" 
            alt="Paul Logo" 
            className="h-6"
          />
        </div>
        <button className="text-gray-700 text-sm font-medium">
          View menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
