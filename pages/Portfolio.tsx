import React from 'react';
import { PROJECTS } from '../constants';
import Button from '../components/UI/Button';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen animate-fade-in">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-zinc-200 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">Work</h1>
            <p className="text-zinc-500 text-lg max-w-xl">
              A curation of our defining projects across beauty, wellness, and high-end fashion.
            </p>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
             <Button variant="default" size="sm" className="rounded-full">All</Button>
             <Button variant="ghost" size="sm" className="rounded-full text-zinc-500">Retail</Button>
             <Button variant="ghost" size="sm" className="rounded-full text-zinc-500">Beauty</Button>
             <Button variant="ghost" size="sm" className="rounded-full text-zinc-500">Hospitality</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-zinc-300 transition-all duration-300">
              <div className="relative overflow-hidden aspect-[4/3] bg-zinc-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                   <div>
                     <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">{project.category}</span>
                     <h3 className="text-xl font-semibold text-zinc-900 mt-1">{project.title}</h3>
                   </div>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-zinc-100 flex justify-between items-center text-xs text-zinc-400 font-medium">
                  <span>{project.location}</span>
                  <span className="group-hover:text-zinc-900 transition-colors">View Case Study &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;