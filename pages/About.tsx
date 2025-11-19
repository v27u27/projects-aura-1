import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 mb-8 leading-tight">
            Bridging architectural rigor <br/> with retail agility.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">
           <div className="space-y-6 text-lg text-zinc-500 font-light leading-relaxed">
             <p>
               Projects Aura was established with a singular vision: to define the physical presence of luxury in the digital age. We believe that a store is more than a place to transact—it is a stage for the brand story.
             </p>
             <p>
               Drawing inspiration from industry titans like <strong>Abra</strong> and <strong>Signworks</strong>, we match their dedication to large-scale execution while maintaining the boutique agility required for bespoke luxury brands.
             </p>
             <div className="pt-8">
               <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-3xl font-bold text-zinc-900">10+</h4>
                    <span className="text-sm text-zinc-400">Years Experience</span>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-zinc-900">50+</h4>
                    <span className="text-sm text-zinc-400">Projects Delivered</span>
                  </div>
               </div>
             </div>
           </div>
           <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/5]">
             <img src="https://picsum.photos/id/1076/800/1000" alt="Studio Team" className="w-full h-full object-cover" />
           </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-12 md:p-20 text-white">
          <h2 className="text-3xl font-semibold mb-12">The Aura Standard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border-l border-zinc-700 pl-6">
              <h3 className="text-xl font-medium mb-2 text-white">Sustainability</h3>
              <p className="text-zinc-400 leading-relaxed">Sourcing materials responsibly without compromising on aesthetic value.</p>
            </div>
            <div className="border-l border-zinc-700 pl-6">
              <h3 className="text-xl font-medium mb-2 text-white">Technology</h3>
              <p className="text-zinc-400 leading-relaxed">Integrating smart retail technology and modern lighting solutions seamlessly.</p>
            </div>
            <div className="border-l border-zinc-700 pl-6">
              <h3 className="text-xl font-medium mb-2 text-white">Precision</h3>
              <p className="text-zinc-400 leading-relaxed">A transparent partnership with millimeter-perfect execution.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;