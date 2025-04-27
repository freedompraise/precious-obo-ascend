
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    "Over 100+ LinkedIn profiles optimized",
    "15K+ LinkedIn followers and growing",
    "Helped clients scale to 6-7 figures",
    "Featured in top marketing platforms",
    "Certified LinkedIn Marketing Expert",
    "Proven lead generation strategies"
  ];

  return (
    <section id="about" className="section-padding bg-brand-gray">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark">
              The <span className="text-brand-teal">Precious Touch</span> for Your LinkedIn Success
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              I don't just optimize profiles – I create client magnets that dive deep into your personal story and business value. My approach transforms your LinkedIn presence into a lead-generating machine that works on autopilot.
            </p>
            <p className="text-lg mb-8 text-gray-700">
              With over 100+ successful client transformations and a community of 15K+ followers, I've developed a proven system to help entrepreneurs leverage LinkedIn for sustainable business growth.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="mt-1 bg-brand-teal rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-brand-teal rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-brand-teal rounded-full opacity-20"></div>
            <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="/lovable-uploads/522f950e-f0a9-4ab1-9541-4012413787cd.png" 
                alt="Precious Obo - LinkedIn Marketing Strategist" 
                className="w-full h-auto rounded-lg shadow-md mb-6"
              />
              <h3 className="text-2xl font-bold mb-2 text-brand-dark">Precious Obo</h3>
              <p className="text-brand-teal font-medium mb-4">LinkedIn Marketing Strategist</p>
              <p className="text-gray-700 mb-4">
                "My mission is to empower entrepreneurs with the strategies and systems they need to attract high-quality leads and scale their business through LinkedIn."
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-brand-light rounded-lg p-3">
                  <p className="font-bold text-brand-teal text-2xl">100+</p>
                  <p className="text-xs text-gray-700">Profiles Optimized</p>
                </div>
                <div className="bg-brand-light rounded-lg p-3">
                  <p className="font-bold text-brand-teal text-2xl">15K+</p>
                  <p className="text-xs text-gray-700">LinkedIn Followers</p>
                </div>
                <div className="bg-brand-light rounded-lg p-3">
                  <p className="font-bold text-brand-teal text-2xl">6-7</p>
                  <p className="text-xs text-gray-700">Figure Results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
