import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Button from './UI/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { label: 'Work', path: '/portfolio' },
    { label: 'Services', path: '/services' },
    { label: 'Studio', path: '/about' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-zinc-200 py-3' : 'bg-transparent border-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="z-50 flex items-center gap-2">
          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-serif font-bold italic">
            P
          </div>
          <span className="font-sans font-semibold text-lg tracking-tight text-zinc-900">
            Projects<span className="text-zinc-500">Aura</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-zinc-900 ${
                location.pathname === link.path ? 'text-zinc-900' : 'text-zinc-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button to="/contact" size="sm" className="ml-4">
            Start Project
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-zinc-900" />
          ) : (
            <Menu className="w-6 h-6 text-zinc-900" />
          )}
        </button>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 animate-fade-in">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-3xl font-semibold text-zinc-900 tracking-tight"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="text-3xl font-semibold text-zinc-400 tracking-tight">
                Contact
              </Link>
            </div>
            
            <div className="mt-auto mb-12">
               <p className="text-sm text-zinc-500 mb-2">Get in touch</p>
               <a href="mailto:hello@projectsaura.com" className="text-xl font-medium text-zinc-900">hello@projectsaura.com</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;