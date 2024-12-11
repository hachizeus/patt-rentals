import { Menu, X, Car, Home, Briefcase, Phone, Search } from 'lucide-react';
import { ReactNode, useState } from 'react';
import logo from '../images/logo.png';
import SearchModal from './SearchModal';

// Define the types for NavLink and MobileNavLink props
interface NavLinkProps {
  children: ReactNode;
  href: string;
  icon?: ReactNode;
}

interface MobileNavLinkProps {
  children: ReactNode;
  href: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* CSS for logo animation */}
      <style>
        {`
          @keyframes logoAnimation {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(-10px);
              opacity: 0.8;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .logo {
            animation: logoAnimation 2s ease-in-out infinite;
          }
        `}
      </style>

      <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="PattRentals Logo"
                className="h-12 w-auto object-contain mr-2 logo" // Added 'logo' class for animation
              />
              <span className="text-white text-xl font-bold">PattRentals</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink icon={<Car className="w-4 h-4" />} href="#rentals">
                Rentals
              </NavLink>
              <NavLink icon={<Home className="w-4 h-4" />} href="#properties">
                Properties
              </NavLink>
              <NavLink icon={<Briefcase className="w-4 h-4" />} href="#about">
                About
              </NavLink>
              <NavLink icon={<Phone className="w-4 h-4" />} href="#contact">
                Contact
              </NavLink>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-white hover:text-red-500 transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-red-500 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-black/95">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <MobileNavLink href="#rentals">Rentals</MobileNavLink>
                <MobileNavLink href="#properties">Properties</MobileNavLink>
                <MobileNavLink href="#about">About</MobileNavLink>
                <MobileNavLink href="#contact">Contact</MobileNavLink>
              </div>
            </div>
          )}
        </div>

        {/* Search Modal */}
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </nav>
    </>
  );
}

// Desktop Navigation Link
function NavLink({ children, href, icon }: NavLinkProps) {
  return (
    <a
      href={href}
      className="flex items-center text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </a>
  );
}

// Mobile Navigation Link
function MobileNavLink({ children, href }: MobileNavLinkProps) {
  return (
    <a
      href={href}
      className="text-white hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium transition-colors"
    >
      {children}
    </a>
  );
}
