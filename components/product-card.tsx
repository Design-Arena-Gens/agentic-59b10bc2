type ProductCardProps = {
  name: string;
  freshnessWindow: string;
  description: string;
  badge?: string;
  price?: string;
};

export function ProductCard({
  name,
  freshnessWindow,
  description,
  badge,
  price
}: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-xl font-semibold text-brand-900">{name}</h3>
        {badge && (
          <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-600">
            {badge}
          </span>
        )}
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">
        {freshnessWindow}
      </p>
      <p className="mt-3 flex-1 text-sm text-brand-600">{description}</p>
      {price && (
        <p className="mt-4 text-sm font-semibold text-brand-700">
          Starting at {price} / kg
        </p>
      )}
    </article>
  );
}
