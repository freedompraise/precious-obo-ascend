
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ 
  name, 
  role, 
  company, 
  content, 
  results 
}: { 
  name: string; 
  role: string; 
  company: string; 
  content: string; 
  results: { label: string; value: string }[]; 
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center text-xl font-bold text-brand-teal mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-lg text-brand-dark">{name}</h4>
          <p className="text-sm text-gray-600">{role}, {company}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6 italic">"{content}"</p>
      
      <div className="grid grid-cols-2 gap-4">
        {results.map((result, index) => (
          <div key={index} className="bg-brand-light rounded-md p-3 text-center">
            <p className="font-bold text-brand-teal text-xl">{result.value}</p>
            <p className="text-xs text-gray-700">{result.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "Growth Ventures",
      content: "Precious transformed my LinkedIn presence completely. His strategic approach helped me attract the right clients and establish myself as an authority in my industry.",
      results: [
        { label: "New leads monthly", value: "+142" },
        { label: "Revenue increase", value: "183%" },
        { label: "Profile views", value: "+380%" },
        { label: "Connection rate", value: "78%" }
      ]
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "TechStart Solutions",
      content: "Working with Precious was a game-changer for my business. His LinkedIn strategies helped me connect with high-quality prospects that turned into significant deals.",
      results: [
        { label: "Sales calls booked", value: "+37" },
        { label: "Deal closure rate", value: "62%" },
        { label: "Avg. deal size", value: "$24K" },
        { label: "ROI", value: "840%" }
      ]
    },
    {
      name: "Rebecca Torres",
      role: "Marketing Director",
      company: "Innovate Media",
      content: "The results speak for themselves. Within 3 months of implementing Precious's LinkedIn strategy, we saw a dramatic increase in qualified leads and conversions.",
      results: [
        { label: "Engagement rate", value: "+215%" },
        { label: "Followers gained", value: "3.2K" },
        { label: "Direct inquiries", value: "+68" },
        { label: "Content reach", value: "+520%" }
      ]
    }
  ];

  return (
    <section id="case-studies" className="section-padding bg-brand-gray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
            Success <span className="text-brand-teal">Stories</span>
          </h2>
          <p className="text-lg text-gray-700">
            Don't just take my word for it. See how my clients have transformed their LinkedIn presence and achieved remarkable results for their businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              content={testimonial.content}
              results={testimonial.results}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold mb-4 text-brand-dark">Ready to Transform Your LinkedIn Presence?</h3>
          <p className="text-gray-700 mb-6">
            Imagine your profile generating high-quality leads while you focus on running your business. My proven strategies have helped entrepreneurs scale to 6-7 figures using LinkedIn as their primary lead generation tool.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-brand-light rounded-lg p-4">
              <p className="font-bold text-brand-teal text-3xl">100+</p>
              <p className="text-sm text-gray-700">Success Stories</p>
            </div>
            <div className="bg-brand-light rounded-lg p-4">
              <p className="font-bold text-brand-teal text-3xl">15K+</p>
              <p className="text-sm text-gray-700">LinkedIn Community</p>
            </div>
            <div className="bg-brand-light rounded-lg p-4">
              <p className="font-bold text-brand-teal text-3xl">6-7</p>
              <p className="text-sm text-gray-700">Figure Results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
