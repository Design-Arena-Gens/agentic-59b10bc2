type ProcessStepProps = {
  step: number;
  title: string;
  description: string;
};

export function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-4 rounded-3xl border border-brand-100 bg-white/90 p-6 shadow-soft">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-100 font-display text-lg font-semibold text-brand-600">
        {step}
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-brand-900">{title}</h3>
        <p className="mt-2 text-sm text-brand-600">{description}</p>
      </div>
    </div>
  );
}
