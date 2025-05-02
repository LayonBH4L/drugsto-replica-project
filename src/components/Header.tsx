
import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl text-drugsto-dark">
            MyDrugsto
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-drugsto-gray hover:text-drugsto-blue transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-drugsto-blue font-medium">
              Shop
            </Link>
            <Link to="/about" className="text-drugsto-gray hover:text-drugsto-blue transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-drugsto-gray hover:text-drugsto-blue transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <button className="text-drugsto-gray hover:text-drugsto-blue transition-colors">
              <Search size={20} />
            </button>
            <div className="relative">
              <ShoppingCart size={20} className="text-drugsto-gray hover:text-drugsto-blue transition-colors" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-drugsto-blue text-white p-0 text-xs">
                  {totalItems}
                </Badge>
              )}
            </div>
            <button className="md:hidden text-drugsto-gray" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-drugsto-gray hover:text-drugsto-blue transition-colors">
                Home
              </Link>
              <Link to="/shop" className="text-drugsto-blue font-medium">
                Shop
              </Link>
              <Link to="/about" className="text-drugsto-gray hover:text-drugsto-blue transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-drugsto-gray hover:text-drugsto-blue transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
