type Metric = {
  number: string;
  label: string;
  sublabel: string;
};

type MetricsGridProps = {
  metrics: Metric[];
};

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-3xl border border-brand-100 bg-white/90 p-6 text-center shadow-soft"
        >
          <dt className="font-display text-3xl font-semibold text-brand-600">
            {metric.number}
          </dt>
          <dd className="mt-2 text-sm font-medium text-brand-900">{metric.label}</dd>
          <p className="mt-1 text-xs text-brand-600">{metric.sublabel}</p>
        </div>
      ))}
    </dl>
  );
}
