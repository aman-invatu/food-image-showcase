
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const menuCategories = [
  { name: "Fast Food", path: "/fast-food" },
  { name: "New Items", path: "/new-items" },
  { name: "Lunch Special", path: "/lunch" },
  { name: "Breakfast", path: "/breakfast" },
  { name: "Desserts", path: "/desserts" },
  { name: "Orders", path: "/orders" }, // Added new orders option
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
      <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-1">
          <div className="flex flex-col items-start">
            <span className="text-2xl font-semibold tracking-tight">PAUL</span>
            <span className="text-xs text-gray-500">depuis 1889</span>
          </div>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>View menu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-48 p-2">
                  {menuCategories.map((category) => (
                    <li key={category.name}>
                      <Link
                        to={category.path}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
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
      </div>
    </nav>
  );
};

export default Navbar;
