
import React from 'react';

const About = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-drugsto-dark">About Us</h1>
      
      <div className="max-w-3xl mx-auto bg-white rounded shadow-sm p-8">
        <p className="mb-4 text-drugsto-gray">
          MyDrugsto is an online pharmacy dedicated to providing affordable medications and health products to customers worldwide.
        </p>
        <p className="mb-4 text-drugsto-gray">
          Founded in 2010, we've been serving customers with quality pharmaceutical products and exceptional customer service for over a decade.
        </p>
        <p className="mb-4 text-drugsto-gray">
          Our mission is to make healthcare accessible to everyone through competitive pricing, wide product selection, and convenient delivery options.
        </p>
      </div>
    </div>
  );
};

export default About;
