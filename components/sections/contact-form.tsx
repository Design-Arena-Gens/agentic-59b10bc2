'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type FormState = {
  name: string;
  email: string;
  company: string;
  volume: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  volume: '',
  message: ''
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus('success');
    setForm(initialState);
  }

  return (
    <div className="grid gap-10 rounded-[32px] border border-brand-100 bg-white/80 p-10 shadow-soft lg:grid-cols-[1fr,1.2fr]">
      <div className="space-y-6">
        <h3 className="font-display text-2xl font-semibold text-brand-900">
          Let&apos;s co-create freshness
        </h3>
        <p className="text-sm text-brand-600">
          Share your scale and requirements. We customise harvest plans, cold chain frequency,
          and packaging based on what keeps your guests delighted.
        </p>
        <div className="rounded-2xl bg-brand-50/80 p-6">
          <p className="text-sm font-semibold text-brand-700">Request samples</p>
          <p className="mt-2 text-xs text-brand-600">
            Daily sample crates for lettuce, herbs, and exotic vegetables. Dispatched in EVs at
            2 PM, delivered within 3 hours.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-brand-600">
            Full name
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              className="rounded-2xl border border-brand-100 bg-white px-4 py-3 text-brand-900 shadow-soft focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
              placeholder="Priya Sharma"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-brand-600">
            Business email
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="rounded-2xl border border-brand-100 bg-white px-4 py-3 text-brand-900 shadow-soft focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
              placeholder="priya@cloudkitchen.in"
            />
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-brand-600">
            Company
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              className="rounded-2xl border border-brand-100 bg-white px-4 py-3 text-brand-900 shadow-soft focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
              placeholder="Green Fork"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-brand-600">
            Weekly volume
            <select
              required
              name="volume"
              value={form.volume}
              onChange={handleChange}
              className="rounded-2xl border border-brand-100 bg-white px-4 py-3 text-brand-900 shadow-soft focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
            >
              <option value="">Select range</option>
              <option value="0-25 kg">0-25 kg</option>
              <option value="25-75 kg">25-75 kg</option>
              <option value="75-150 kg">75-150 kg</option>
              <option value="150+ kg">150+ kg</option>
            </select>
          </label>
        </div>
        <label className="flex flex-col gap-2 text-sm text-brand-600">
          Tell us about your menus or requirements
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="rounded-2xl border border-brand-100 bg-white px-4 py-3 text-brand-900 shadow-soft focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
            placeholder="Eg: Daily lettuce for 12 outlets, Nordic themed menu, prepping for festive hampers, etc."
          />
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">
            {status === 'submitting' ? 'Sending...' : 'Submit inquiry'}
          </Button>
          {status === 'success' && (
            <span className="text-sm font-semibold text-brand-600">
              Got it! We&apos;ll reach out shortly.
            </span>
          )}
        </div>
        <p className="text-xs text-brand-500">
          By submitting, you agree to receive operational updates and seasonal harvest alerts from
          SabjiVerse.
        </p>
      </form>
    </div>
  );
}
