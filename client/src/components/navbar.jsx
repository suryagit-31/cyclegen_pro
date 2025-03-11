import { NavLink, Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Bike } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center"
            >
              <Bike className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">
                <Link to="/">CYCLE-GEN</Link>
              </span>
            </motion.div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["About", "Products","Founder","Contact"].map((item) => (
                  <NavLink
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-lg transition-colors ${
                        isActive
                          ? "text-blue-600 font-bold"
                          : "text-gray-700 hover:text-blue-600"
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* 📌 Ensure child routes render below the navbar */}

      <Outlet />
    </>
  );
};

export default Navbar;
