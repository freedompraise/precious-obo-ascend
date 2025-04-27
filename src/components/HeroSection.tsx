
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-teal opacity-90 z-10"></div>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/522f950e-f0a9-4ab1-9541-4012413787cd.png')] bg-cover bg-center"></div>
      
      <div className="container-custom relative z-20 pt-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Helping Entrepreneurs Scale to 
              <span className="text-brand-light"> 6-7 Figures</span> on LinkedIn™
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg">
              Transform your LinkedIn profile into a client magnet with proven strategies that drive real results and consistent revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-brand-teal hover:bg-white hover:text-brand-dark text-white text-lg py-6 px-8 rounded-md font-medium transition-all flex items-center gap-2">
                Book a Strategy Call
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark text-lg py-6 px-8 rounded-md font-medium transition-all">
                View Success Stories
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto transform rotate-3 animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-teal flex items-center justify-center text-white font-bold text-xl mr-4">P</div>
                <div>
                  <h4 className="font-bold text-brand-dark">Precious Obo</h4>
                  <p className="text-sm text-gray-600">LinkedIn Marketing Strategist</p>
                </div>
              </div>
              <p className="font-medium text-gray-700 mb-4">
                "I've helped over 100+ entrepreneurs transform their LinkedIn presence and generate consistent leads that convert to 6-7 figure income."
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-brand-teal font-bold">15K+ Followers</span>
                <span className="text-brand-teal font-bold">100+ Clients</span>
                <span className="text-brand-teal font-bold">6-7 Figure Results</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-light"></span>
          </span>
          <p className="text-white text-sm">Scroll to discover the Precious Touch</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
