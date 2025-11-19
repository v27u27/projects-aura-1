import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'default' | 'lg' | 'icon';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  onClick,
  variant = 'default',
  size = 'default',
  className = '',
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
  
  const variants = {
    default: "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 shadow-sm",
    // Fixed: Added text-zinc-900 to outline and ghost variants
    outline: "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-100 hover:text-zinc-900 shadow-sm", 
    ghost: "text-zinc-900 hover:bg-zinc-100 hover:text-zinc-900",
    link: "text-zinc-900 underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "h-9 px-3 text-xs",
    default: "h-10 px-5 py-2",
    lg: "h-12 rounded-md px-8 text-base",
    icon: "h-10 w-10",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;