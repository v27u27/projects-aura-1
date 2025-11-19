import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  path: string;
}