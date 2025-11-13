import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center'
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <header className={`flex flex-col gap-3 ${alignment}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold text-brand-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm text-brand-700 sm:text-base">{description}</p>
      )}
    </header>
  );
}
