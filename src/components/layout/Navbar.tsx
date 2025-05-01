import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Bell } from 'lucide-react';

type NavbarProps = {
  openUnlockModal: () => void;
};

const Navbar = ({ openUnlockModal }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-400/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary-500" />
              <span className="font-display text-lg font-semibold text-white">
                SANJEEVANI
              </span>
            </NavLink>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-medium text-sm px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-primary-400 bg-dark-500/50'
                      : 'text-gray-300 hover:text-primary-300 hover:bg-dark-500/30'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `font-medium text-sm px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-primary-400 bg-dark-500/50'
                      : 'text-gray-300 hover:text-primary-300 hover:bg-dark-500/30'
                  }`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `font-medium text-sm px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-primary-400 bg-dark-500/50'
                      : 'text-gray-300 hover:text-primary-300 hover:bg-dark-500/30'
                  }`
                }
              >
                Features
              </NavLink>
              <NavLink
                to="/how-it-works"
                className={({ isActive }) =>
                  `font-medium text-sm px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-primary-400 bg-dark-500/50'
                      : 'text-gray-300 hover:text-primary-300 hover:bg-dark-500/30'
                  }`
                }
              >
                How It Works
              </NavLink>
              <NavLink
                to="/insights"
                className={({ isActive }) =>
                  `font-medium text-sm px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-primary-400 bg-dark-500/50'
                      : 'text-gray-300 hover:text-primary-300 hover:bg-dark-500/30'
                  }`
                }
              >
                Insights
              </NavLink>
              <NavLink
                to="/use-cases"
                className={({ isActive }) =>
                  `font-medium text-sm px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-primary-400 bg-dark-500/50'
                      : 'text-gray-300 hover:text-primary-300 hover:bg-dark-500/30'
                  }`
                }
              >
                Use Cases
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `font-medium text-sm px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-primary-400 bg-dark-500/50'
                      : 'text-gray-300 hover:text-primary-300 hover:bg-dark-500/30'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `font-medium text-sm px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-primary-400 bg-dark-500/50'
                      : 'text-gray-300 hover:text-primary-300 hover:bg-dark-500/30'
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
          
          <div className="hidden md:flex items-center ml-4 space-x-3">
            <button
              onClick={openUnlockModal}
              className="relative inline-flex items-center px-4 py-2 rounded-md bg-dark-500/50 border border-primary-500/30 text-sm font-medium text-primary-300 hover:bg-dark-400 hover:border-primary-500/50 hover:text-primary-200 transition-all hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:ring-offset-dark-500"
            >
              <Bell className="h-4 w-4 mr-2" />
              Unlock Band
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-400/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block font-medium px-3 py-2 rounded-md ${
                  isActive
                    ? 'text-primary-400 bg-dark-500/50'
                    : 'text-gray-300 hover:text-primary-300 hover:bg-dark-500/30'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block font-medium px-3 py-2 rounded-md ${
                  isActive
                    ? 'text-primary-400 bg-dark-500/50'
                    : 'text-gray-300 hover:text-primary-300 hover:bg-dark-500/30'
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `block font-medium px-3 py-2 rounded-md ${
                  isActive
                    ? 'text-primary-400 bg-dark-500/50'
                    : 'text-gray-300 hover:text-primary-300 hover:bg-dark-500/30'
                }`
              }
            >
              Features
            </NavLink>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) =>
                `block font-medium px-3 py-2 rounded-md ${
                  isActive
                    ? 'text-primary-400 bg-dark-500/50'
                    : 'text-gray-300 hover:text-primary-300 hover:bg-dark-500/30'
                }`
              }
            >
              How It Works
            </NavLink>
            <NavLink
              to="/insights"
              className={({ isActive }) =>
                `block font-medium px-3 py-2 rounded-md ${
                  isActive
                    ? 'text-primary-400 bg-dark-500/50'
                    : 'text-gray-300 hover:text-primary-300 hover:bg-dark-500/30'
                }`
              }
            >
              Insights
            </NavLink>
            <NavLink
              to="/use-cases"
              className={({ isActive }) =>
                `block font-medium px-3 py-2 rounded-md ${
                  isActive
                    ? 'text-primary-400 bg-dark-500/50'
                    : 'text-gray-300 hover:text-primary-300 hover:bg-dark-500/30'
                }`
              }
            >
              Use Cases
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block font-medium px-3 py-2 rounded-md ${
                  isActive
                    ? 'text-primary-400 bg-dark-500/50'
                    : 'text-gray-300 hover:text-primary-300 hover:bg-dark-500/30'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block font-medium px-3 py-2 rounded-md ${
                  isActive
                    ? 'text-primary-400 bg-dark-500/50'
                    : 'text-gray-300 hover:text-primary-300 hover:bg-dark-500/30'
                }`
              }
            >
              Contact
            </NavLink>
            <button
              onClick={openUnlockModal}
              className="w-full flex items-center justify-center px-4 py-2 rounded-md bg-dark-500/50 border border-primary-500/30 text-sm font-medium text-primary-300 hover:bg-dark-400 hover:border-primary-500/50 hover:text-primary-200 transition-all"
            >
              <Bell className="h-4 w-4 mr-2" />
              Unlock Band
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;