import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { 
    name: "Platform Features",
    path: "/platform-features",
    hasDropdown: true
  },
  { name: "Pricing", path: "/pricing" },
  { 
    name: "Resources",
    path: "/resources",
    hasDropdown: true
  },
];

const hotelFeatures = [
  { name: "Hotel Rooms", path: "/hotel-rooms" },
  { name: "Hotel Services", path: "/hotel-services" },
];

const foodCategories = [
  { name: "Fast Food", path: "/fast-food" },
  { name: "New Items", path: "/new-items" },
  { name: "Lunch Special", path: "/lunch-special" },
  { name: "Breakfast", path: "/breakfast" },
  { name: "Desserts", path: "/desserts" },
  { name: "Orders", path: "/orders" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="flex flex-col items-center">
            <span className="text-2xl tracking-[0.25em] font-serif text-black">PAUL</span>
            <span className="text-[0.65rem] tracking-wider text-gray-600 font-light mt-[-2px]">depuis 1889</span>
          </div>
        </Link>

        {/* Main Navigation - Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <NavigationMenuTrigger className="text-[#2C3345] hover:text-black text-sm font-medium">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-[220px] p-3 bg-white rounded-md shadow-lg">
                          {item.name === "Platform Features" 
                            ? hotelFeatures.map((feature) => (
                                <li key={feature.name}>
                                  <Link
                                    to={feature.path}
                                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                                  >
                                    {feature.name}
                                  </Link>
                                </li>
                              ))
                            : foodCategories.map((category) => (
                                <li key={category.name}>
                                  <Link
                                    to={category.path}
                                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                                    onClick={(e) => {
                                      if (category.name === "Fast Food") {
                                        e.preventDefault();
                                        navigate('/fast-food');
                                      }
                                    }}
                                  >
                                    {category.name}
                                  </Link>
                                </li>
                              ))
                          }
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-[#2C3345] hover:text-black text-sm font-medium px-3 py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <select className="text-sm text-[#2C3345] border-none focus:ring-0">
              <option>EN</option>
              <option>ES</option>
              <option>FR</option>
            </select>
            
            {/* View Menu Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#2C3345] hover:text-black text-sm font-medium">
                    View Menu
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[220px] p-3 bg-white rounded-md shadow-lg">
                      {foodCategories.map((category) => (
                        <li key={category.name}>
                          <Link
                            to={category.path}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                            onClick={(e) => {
                              if (category.name === "Fast Food") {
                                e.preventDefault();
                                navigate('/fast-food');
                              }
                            }}
                          >
                            {category.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              variant="default"
              className="bg-[#0062FF] text-white hover:bg-blue-600"
            >
              Start free trial
            </Button>

            <Button
              variant="outline"
              className="border-[#2C3345] text-[#2C3345] hover:bg-gray-50"
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-4">
          {/* Mobile View Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#2C3345] hover:text-black text-sm font-medium">
                  View Menu
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[220px] p-3 bg-white rounded-md shadow-lg">
                    {foodCategories.map((category) => (
                      <li key={category.name}>
                        <Link
                          to={category.path}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                          onClick={(e) => {
                            if (category.name === "Fast Food") {
                              e.preventDefault();
                              navigate('/fast-food');
                            }
                          }}
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 text-lg text-[#2C3345] hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <Button
                    variant="default"
                    className="bg-[#0062FF] text-white hover:bg-blue-600 w-full"
                  >
                    Start free trial
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#2C3345] text-[#2C3345] hover:bg-gray-50 w-full"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
