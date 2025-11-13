import type { ReactNode } from 'react';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-brand-100 bg-white/90 p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-brand-900">{title}</h3>
      <p className="mt-3 text-sm text-brand-600">{description}</p>
    </div>
  );
}
