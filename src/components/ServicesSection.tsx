
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, FileText, Search, Mail, Briefcase } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  features: string[]; 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:-translate-y-2 border-t-4 border-brand-teal">
      <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-brand-teal" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-brand-dark">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <span className="w-1 h-1 bg-brand-teal rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <Button variant="outline" className="w-full border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white flex items-center justify-center gap-2">
        Learn More <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "LinkedIn Profile Optimization",
      description: "Transform your profile into a client-attracting asset that showcases your expertise and unique value.",
      features: [
        "Strategic headline and summary",
        "Keyword optimization for search visibility",
        "Content positioning and storytelling",
        "Visual branding elements"
      ]
    },
    {
      icon: Users,
      title: "Content Strategy & Creation",
      description: "Develop engaging content that increases your visibility and positions you as an authority in your niche.",
      features: [
        "Content calendar development",
        "Post templates and frameworks",
        "Engagement strategies",
        "Analytics and performance tracking"
      ]
    },
    {
      icon: Search,
      title: "Lead Generation",
      description: "Implement proven strategies to generate qualified leads who are ready to engage with your business.",
      features: [
        "Target audience identification",
        "Connection request systems",
        "Messaging sequences",
        "Relationship nurturing frameworks"
      ]
    },
    {
      icon: Briefcase,
      title: "Sales Funnel Development",
      description: "Design and build effective sales funnels that convert your LinkedIn connections into paying clients.",
      features: [
        "Customer journey mapping",
        "Conversion optimization",
        "Call-to-action strategies",
        "Follow-up systems"
      ]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Create targeted email campaigns that nurture leads from LinkedIn and turn them into loyal customers.",
      features: [
        "List building strategies",
        "Email sequence development",
        "Automation setup",
        "Performance monitoring"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
            Services That Deliver <span className="text-brand-teal">Real Results</span>
          </h2>
          <p className="text-lg text-gray-700">
            From profile optimization to complete lead generation systems, my services are designed to help you attract high-value clients and scale your business through LinkedIn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-brand-teal hover:bg-brand-dark text-white text-lg py-6 px-8 rounded-md font-medium transition-all">
            Book a Strategy Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
