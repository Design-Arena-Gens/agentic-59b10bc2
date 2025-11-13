import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const classes: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-600 shadow-soft hover:shadow-lg',
  secondary:
    'bg-white text-brand-700 border border-brand-200 hover:border-brand-500 hover:text-brand-900',
  ghost:
    'bg-transparent text-brand-700 hover:text-brand-900 hover:bg-brand-100 border border-transparent'
};

type ButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
};

export function Button({
  variant = 'primary',
  children,
  href,
  className = '',
  onClick
}: ButtonProps) {
  const content = (
    <span
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ease-out ${classes[variant]} ${className}`}
    >
      {children}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="group focus:outline-none focus-visible:ring-2">
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="group focus:outline-none focus-visible:ring-2"
    >
      {content}
    </button>
  );
}
