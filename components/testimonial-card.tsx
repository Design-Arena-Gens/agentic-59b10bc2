type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <blockquote className="flex h-full flex-col rounded-3xl border border-brand-100 bg-white/90 p-6 shadow-soft">
      <p className="text-sm text-brand-700">“{quote}”</p>
      <footer className="mt-6">
        <p className="font-display text-sm font-semibold text-brand-900">{name}</p>
        <p className="text-xs uppercase tracking-[0.25em] text-brand-500">{role}</p>
      </footer>
    </blockquote>
  );
}
