import React from 'react';
import Button from '../components/UI/Button';
import { PROJECTS, SERVICES } from '../constants';
import { ArrowRight, MoveRight, Store, PenTool, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in pt-20">
      
      {/* Ramp-style Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
              </span>
              Accepting new commissions for 2025
            </div>
            <h1 className="text-6xl md:text-8xl font-semibold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
              Build the <br/>
              <span className="text-zinc-400 italic font-serif">exceptional.</span>
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl mb-10 leading-relaxed">
              The design agency for forward-thinking beauty and luxury brands. We turn physical spaces into brand cathedrals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" to="/portfolio">
                View Selected Work
              </Button>
              <Button variant="outline" size="lg" to="/contact">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative subtle background blob */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-zinc-200/50 rounded-full blur-3xl -z-10 opacity-50"></div>
      </section>

      {/* Ticker / Social Proof */}
      <section className="border-y border-zinc-200 bg-white py-10">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-medium text-zinc-400 mb-8 uppercase tracking-wider">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
             {/* Simulated Logos with text for now */}
             <h3 className="text-xl font-serif font-bold text-zinc-800">RAMVEK</h3>
             <h3 className="text-xl font-sans font-black tracking-tighter text-zinc-800">ABRA</h3>
             <h3 className="text-xl font-serif italic text-zinc-800">Signworks</h3>
             <h3 className="text-xl font-mono font-bold text-zinc-800">HAVELOCK</h3>
          </div>
        </div>
      </section>

      {/* Supermemory-style Bento Grid */}
      <section className="py-32 bg-zinc-50/50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Selected Works</h2>
              <p className="text-zinc-500 mt-2">Spaces that define modern luxury.</p>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors">
              View all projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
            {/* Large Featured Item */}
            <div className="md:col-span-2 md:row-span-2 group relative rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all">
              <img src={PROJECTS[0].image} alt={PROJECTS[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
                <span className="text-white/80 text-sm font-medium mb-2">{PROJECTS[0].category}</span>
                <h3 className="text-white text-3xl font-medium tracking-tight">{PROJECTS[0].title}</h3>
              </div>
            </div>

            {/* Secondary Items */}
            <div className="md:col-span-2 lg:col-span-2 group relative rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all">
              <img src={PROJECTS[1].image} alt={PROJECTS[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white text-xl font-medium tracking-tight">{PROJECTS[1].title}</h3>
                <p className="text-white/70 text-sm">{PROJECTS[1].location}</p>
              </div>
            </div>

             <div className="md:col-span-1 group relative rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all">
               <div className="absolute inset-0 bg-zinc-900 p-6 flex flex-col justify-between">
                 <Store className="text-zinc-400 w-8 h-8" />
                 <div>
                   <h3 className="text-white text-lg font-medium">Retail Fit-out</h3>
                   <p className="text-zinc-400 text-xs mt-2">End-to-end construction management.</p>
                 </div>
               </div>
            </div>

            <div className="md:col-span-1 lg:col-span-1 group relative rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all">
              <img src={PROJECTS[2].image} alt={PROJECTS[2].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors p-6 flex flex-col justify-end">
                 <h3 className="text-white font-medium">{PROJECTS[2].title}</h3>
              </div>
            </div>

            {/* Text/CTA Block */}
             <div className="md:col-span-2 lg:col-span-2 rounded-2xl border border-zinc-200 bg-white p-8 flex flex-col justify-center items-start shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Crafting atmospheres of desire.</h3>
                <p className="text-zinc-500 mb-6 max-w-md">From minimalist apothecaries to avant-garde fashion houses, we define the physical identity of brands.</p>
                <Button variant="outline" to="/portfolio">Explore Portfolio</Button>
            </div>
          </div>
          
          <div className="mt-8 md:hidden text-center">
             <Button variant="link" to="/portfolio">View all projects <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </div>
        </div>
      </section>

      {/* Feature Cards / Services */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Comprehensive Design Services</h2>
            <p className="text-zinc-500">We handle everything from the first sketch to the final polish.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <PenTool className="w-6 h-6" />, title: "Concept & Design", desc: "Visual identity translation into 3D environments." },
              { icon: <Layout className="w-6 h-6" />, title: "Project Management", desc: "Rigorous oversight of timelines and budgets." },
              { icon: <Store className="w-6 h-6" />, title: "Construction & Fit-out", desc: "Turnkey delivery with premium finishes." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-3">{feature.title}</h3>
                <p className="text-zinc-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-zinc-900 text-white rounded-none md:rounded-[3rem] mx-0 md:mx-6 mb-6">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Ready to elevate your space?</h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
            Join the leading brands redefining retail experiences across Australia.
          </p>
          <Button variant="outline" className="bg-transparent border-zinc-700 text-white hover:bg-white hover:text-zinc-900 hover:border-white" to="/contact">
            Start a Conversation
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Home;