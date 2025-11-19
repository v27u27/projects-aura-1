import { Project, Service } from './types';
import { Compass, Ruler, Store, Lightbulb } from 'lucide-react';
import React from 'react';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Lumina Apothecary',
    category: 'Beauty & Cosmetics',
    location: 'Melbourne, AU',
    image: 'https://picsum.photos/id/402/1200/800',
    description: 'A minimalist sanctuary featuring brushed brass fixtures and Italian terrazzo flooring designed to elevate the skincare discovery experience.'
  },
  {
    id: '2',
    title: 'Velvet & Vine',
    category: 'Luxury Apparel',
    location: 'Sydney, AU',
    image: 'https://picsum.photos/id/445/1200/800',
    description: 'An avant-garde retail space blending industrial concrete with soft velvet textures to create a moody, exclusive atmosphere.'
  },
  {
    id: '3',
    title: 'Aurum Jewelry',
    category: 'High Jewelry',
    location: 'Brisbane, AU',
    image: 'https://picsum.photos/id/364/1200/800',
    description: 'Bespoke joinery with integrated lighting systems designed to make every diamond sparkle, set within a dark, intimate environment.'
  },
  {
    id: '4',
    title: 'Élan Perfumery',
    category: 'Fragrance',
    location: 'Melbourne, AU',
    image: 'https://picsum.photos/id/250/1200/800',
    description: 'A sensory journey created through curved glass displays and floating shelving units, emphasizing the ethereal nature of scent.'
  },
  {
    id: '5',
    title: 'Obsidian Optics',
    category: 'Eyewear',
    location: 'Perth, AU',
    image: 'https://picsum.photos/id/180/1200/800',
    description: 'Clean lines and monochrome palette allow the frames to stand out. Features a custom consultation lounge.'
  },
  {
    id: '6',
    title: 'Silk Road Boutique',
    category: 'Fashion',
    location: 'Adelaide, AU',
    image: 'https://picsum.photos/id/24/1200/800',
    description: 'Inspired by ancient trade routes, this space utilizes rich textures, warm woods, and gold accents for a welcoming luxury feel.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'design',
    title: 'Concept & Design',
    description: 'We translate brand identity into physical environments. Our design phase includes 3D rendering, material selection, and spatial planning.',
    icon: <Lightbulb className="w-8 h-8 text-gold-500" />
  },
  {
    id: 'fitout',
    title: 'Retail Fit-out',
    description: 'End-to-end construction management. We coordinate trades, manage timelines, and ensure flawless execution of the design vision.',
    icon: <Store className="w-8 h-8 text-gold-500" />
  },
  {
    id: 'joinery',
    title: 'Bespoke Joinery',
    description: 'Custom manufacturing of display units, counters, and architectural features using premium materials like stone, timber, and metal.',
    icon: <Ruler className="w-8 h-8 text-gold-500" />
  },
  {
    id: 'management',
    title: 'Project Management',
    description: 'A dedicated project manager oversees every detail, ensuring communication is clear and the project is delivered on time and on budget.',
    icon: <Compass className="w-8 h-8 text-gold-500" />
  }
];