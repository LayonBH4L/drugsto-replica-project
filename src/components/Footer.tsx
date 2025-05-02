
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-drugsto-light-gray mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3 text-drugsto-dark">MyDrugsto</h3>
            <p className="text-drugsto-gray text-sm">
              Your trusted online pharmacy providing quality healthcare products at affordable prices.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3 text-drugsto-dark">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-drugsto-gray hover:text-drugsto-blue transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-drugsto-gray hover:text-drugsto-blue transition-colors text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-drugsto-gray hover:text-drugsto-blue transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-drugsto-gray hover:text-drugsto-blue transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3 text-drugsto-dark">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-drugsto-gray hover:text-drugsto-blue transition-colors text-sm">
                  Pain Relief
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-drugsto-gray hover:text-drugsto-blue transition-colors text-sm">
                  Vitamins
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-drugsto-gray hover:text-drugsto-blue transition-colors text-sm">
                  Personal Care
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-drugsto-gray hover:text-drugsto-blue transition-colors text-sm">
                  First Aid
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3 text-drugsto-dark">Contact</h3>
            <address className="text-drugsto-gray text-sm not-italic">
              123 Pharmacy Street<br />
              Health City, HC 12345<br /><br />
              <a href="mailto:info@mydrugsto.com" className="hover:text-drugsto-blue transition-colors">
                info@mydrugsto.com
              </a><br />
              <a href="tel:+15551234567" className="hover:text-drugsto-blue transition-colors">
                +1 (555) 123-4567
              </a>
            </address>
          </div>
        </div>
        
        <hr className="my-6 border-gray-300" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-drugsto-gray text-sm">
            &copy; {currentYear} MyDrugsto. All rights reserved. School Project.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-drugsto-gray hover:text-drugsto-blue transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-drugsto-gray hover:text-drugsto-blue transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
