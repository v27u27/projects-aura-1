import React from 'react';
import { SERVICES } from '../constants';
import Button from '../components/UI/Button';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen animate-fade-in">
      <div className="container mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">Our Expertise</h1>
          <p className="text-zinc-500 text-lg leading-relaxed">
            We offer a comprehensive suite of services designed to take your project from initial concept to grand opening.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="group relative bg-white border border-zinc-200 rounded-3xl overflow-hidden hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                   <img 
                    src={`https://picsum.photos/seed/${service.id}/800/600`}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                   />
                   <div className="absolute inset-0 bg-zinc-900/10"></div>
                </div>
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-900">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-semibold text-zinc-900 mb-4">{service.title}</h2>
                  <p className="text-zinc-500 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div>
                    <Button variant="outline" size="sm" className="rounded-full group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;