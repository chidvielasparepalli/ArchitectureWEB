import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', to, children, className = '', ...props }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-display text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase transition-all duration-500 ease-out';

  const variantClasses = {
    primary: 'bg-white text-[#0a0a0a] px-8 py-4 hover:bg-white/80',
    secondary: 'bg-white/10 text-white px-8 py-4 hover:bg-white/20',
    outline: 'border border-white/20 text-white px-8 py-4 hover:border-white hover:bg-white hover:text-[#0a0a0a]'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    if (to.startsWith('http') || to.startsWith('mailto:')) {
      return (
        <a href={to} className={combinedClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
export default Button;
