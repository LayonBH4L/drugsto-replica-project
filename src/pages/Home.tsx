
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-drugsto-dark mb-6">
              Your Online Pharmacy Store
            </h1>
            <p className="text-xl text-drugsto-gray mb-8">
              Find affordable medications and health products delivered to your door
            </p>
            <Link to="/shop">
              <Button size="lg" className="bg-drugsto-blue hover:bg-drugsto-accent">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-drugsto-dark">Popular Categories</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Pain Relief', 'Vitamins', 'Personal Care', 'First Aid'].map((category) => (
            <Link to="/shop" key={category} className="group">
              <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-drugsto-dark group-hover:text-drugsto-blue transition-colors">
                  {category}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/shop">
            <Button variant="outline" className="border-drugsto-blue text-drugsto-blue hover:bg-drugsto-blue hover:text-white">
              View All Categories
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
