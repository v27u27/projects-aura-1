import React from 'react';
import Button from '../components/UI/Button';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info Column */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-8">Get in touch</h1>
            <p className="text-zinc-500 text-lg leading-relaxed mb-12">
              We collaborate with clients worldwide. Reach out to discuss your next retail project, fit-out requirement, or design consultation.
            </p>

            <div className="space-y-8">
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Address</span>
                <span className="text-zinc-900 text-lg">101 Collins Street, Melbourne VIC 3000</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Email</span>
                <span className="text-zinc-900 text-lg underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-all cursor-pointer">hello@projectsaura.com.au</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Socials</span>
                <div className="flex gap-4 text-zinc-900 font-medium">
                   <span className="cursor-pointer hover:text-zinc-600">Instagram</span>
                   <span className="cursor-pointer hover:text-zinc-600">LinkedIn</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-700">Name</label>
                  <input type="text" id="name" className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email</label>
                  <input type="email" id="email" className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2" placeholder="john@company.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-zinc-700">Interest</label>
                <select id="subject" className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2">
                  <option>Design & Concept</option>
                  <option>Fit-out & Construction</option>
                  <option>Project Management</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-700">Message</label>
                <textarea id="message" rows={4} className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <Button type="submit" className="w-full" size="lg">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;