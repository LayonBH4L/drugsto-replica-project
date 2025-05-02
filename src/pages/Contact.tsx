
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted');
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-drugsto-dark">Contact Us</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white rounded shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-drugsto-dark">Get In Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-drugsto-blue mr-3 mt-0.5" />
                <div>
                  <p className="font-medium text-drugsto-dark">Email Us</p>
                  <p className="text-drugsto-gray">info@mydrugsto.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-drugsto-blue mr-3 mt-0.5" />
                <div>
                  <p className="font-medium text-drugsto-dark">Call Us</p>
                  <p className="text-drugsto-gray">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-drugsto-blue mr-3 mt-0.5" />
                <div>
                  <p className="font-medium text-drugsto-dark">Visit Us</p>
                  <p className="text-drugsto-gray">123 Pharmacy Street<br />Health City, HC 12345</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-drugsto-dark">Send a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    required 
                    className="border-gray-300 focus:border-drugsto-blue"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    required 
                    className="border-gray-300 focus:border-drugsto-blue"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    required 
                    className="border-gray-300 focus:border-drugsto-blue min-h-[120px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-drugsto-blue hover:bg-drugsto-accent"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
