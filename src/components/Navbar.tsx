import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { name: "Solutions", path: "/solutions" },
  { name: "qlub+ Rewards", path: "/rewards" },
  { name: "Partners", path: "/partners" },
  { name: "Integrations", path: "/integrations" },
  { name: "Success Stories", path: "/success-stories" },
  { name: "Contact Us", path: "/contact" },
];

const menuCategories = [
  { name: "Fast Food", path: "/fast-food" },
  { name: "New Items", path: "/new-items" },
  { name: "Lunch Special", path: "/lunch-special" },
  { name: "Breakfast", path: "/breakfast" },
  { name: "Desserts", path: "/desserts" },
  { name: "Orders", path: "/orders" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="flex flex-col items-center">
            <span className="text-2xl tracking-[0.25em] font-serif text-black">PAUL</span>
            <span className="text-[0.65rem] tracking-wider text-gray-600 font-light mt-[-2px]">depuis 1889</span>
          </div>
        </Link>

        {/* Main Navigation - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* View Menu Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                  View Menu
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-48 p-2 bg-white rounded-md shadow-lg">
                    {menuCategories.map((category) => (
                      <li key={category.name}>
                        <Link
                          to={category.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
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
            className="bg-[#1A1E2C] text-white hover:bg-[#2A2E3C]"
          >
            Free Demo
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          {/* View Menu Dropdown - Mobile */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                  View Menu
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-48 p-2 bg-white rounded-md shadow-lg">
                    {menuCategories.map((category) => (
                      <li key={category.name}>
                        <Link
                          to={category.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
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

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  variant="default"
                  className="bg-[#1A1E2C] text-white hover:bg-[#2A2E3C] mt-4"
                >
                  Free Demo
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
