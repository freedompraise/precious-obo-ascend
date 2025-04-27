
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, handle form submission here
    alert("Form submitted! In a production environment, this would send your message to Precious Obo.");
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark">
              Ready to <span className="text-brand-teal">Scale Your Business</span> with LinkedIn?
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              Take the first step toward transforming your LinkedIn presence and attracting high-value clients on autopilot.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center mr-4">
                  <Calendar className="h-5 w-5 text-brand-teal" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Book a Strategy Call</h4>
                  <p className="text-gray-700">Schedule a free 30-minute consultation to discuss your goals</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-brand-teal" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Email</h4>
                  <p className="text-gray-700">contact@preciousobo.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-brand-teal" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Phone</h4>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-brand-dark">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  placeholder="John Smith"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  How can I help you?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  placeholder="I'm interested in improving my LinkedIn profile..."
                  required
                ></textarea>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-brand-teal hover:bg-brand-dark text-white py-3 rounded-md font-medium transition-colors"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
