import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-200 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-24">
          <div className="max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-6">
              Design that defines<br />brands.
            </h2>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors text-zinc-900">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors text-zinc-900">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 lg:gap-24">
            <div className="flex flex-col space-y-4">
              <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Sitemap</span>
              <Link to="/" className="text-zinc-600 hover:text-zinc-900 font-medium">Home</Link>
              <Link to="/portfolio" className="text-zinc-600 hover:text-zinc-900 font-medium">Work</Link>
              <Link to="/services" className="text-zinc-600 hover:text-zinc-900 font-medium">Services</Link>
              <Link to="/about" className="text-zinc-600 hover:text-zinc-900 font-medium">Studio</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Legal</span>
              <Link to="#" className="text-zinc-600 hover:text-zinc-900 font-medium">Privacy</Link>
              <Link to="#" className="text-zinc-600 hover:text-zinc-900 font-medium">Terms</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100 text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Projects Aura. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span>Melbourne</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
            <span>Sydney</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
            <span>Brisbane</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;