import { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { FeatureCard } from '@/components/feature-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { MetricsGrid } from '@/components/metrics-grid';
import { ProductCard } from '@/components/product-card';
import { ProcessStep } from '@/components/process-step';
import { TestimonialCard } from '@/components/testimonial-card';
import { ContactForm } from '@/components/sections/contact-form';

const heroMetrics = [
  {
    number: '6 hrs',
    label: 'Farm-to-kitchen',
    sublabel: 'Average delivery window across NCR'
  },
  {
    number: '38+',
    label: 'Partner farms',
    sublabel: 'Organic-certified growers curated seasonally'
  },
  {
    number: '120+',
    label: 'SKUs available',
    sublabel: 'Daily harvest lists updated every morning'
  },
  {
    number: '98%',
    label: 'Freshness score',
    sublabel: 'Measured through internal QA benchmarks'
  }
];

const features = [
  {
    icon: '🌿',
    title: 'Hydroponic & soil-grown balance',
    description:
      'We blend hydroponically grown leafy greens with soil-grown heirloom vegetables for consistent taste and nutrition year round.'
  },
  {
    icon: '🚚',
    title: 'Just-in-time cold chain',
    description:
      'Temperature-controlled dispatch hubs ensure zero moisture loss, maintaining crispness even during peak summers.'
  },
  {
    icon: '📲',
    title: 'Chef-first ordering',
    description:
      'Daily WhatsApp catalogues, API integrations, and customised standing orders designed for cloud kitchens and boutique grocers.'
  }
];

const produceCategories = [
  {
    name: 'Leafy essentials',
    freshnessWindow: 'HARVESTED BY 5 AM',
    description:
      'Romaine, baby spinach, kale, rocket, and mixed microgreens rinsed, air-dried, and sealed in breathable packaging.',
    badge: 'hydroponic',
    price: '₹180'
  },
  {
    name: 'Seasonal heroes',
    freshnessWindow: 'CURATED EVERY FRIDAY',
    description:
      'Uncommon regional varieties like Kashmiri haak, red amaranth, purple cauliflower, and heirloom tomatoes sourced weekly.',
    badge: 'limited',
    price: '₹220'
  },
  {
    name: 'Root pantry',
    freshnessWindow: 'MUD-FRESH 24 HRS',
    description:
      'Sweet potatoes, rainbow carrots, tender beetroots, turmeric, and ginger from pesticide-free farms in Ooty & Dehradun.',
    price: '₹90'
  },
  {
    name: 'Kitchen ready cuts',
    freshnessWindow: 'PREPPED TO ORDER',
    description:
      'Washed, chopped, vacuum-packed vegetable mixes ideal for QSRs and institutional kitchens. Custom julienne and dices available.',
    badge: 'bulk favourite'
  }
];

const processSteps = [
  {
    title: 'Midnight harvest slots',
    description:
      'Farm partners receive AI-generated harvest forecasts based on humidity, rainfall, and historic demand. Picking begins by 1:30 AM.'
  },
  {
    title: 'Nutrient-safe wash & chill',
    description:
      'Vegetables are washed in ozonated water, dried in HEPA zones, and sealed in compostable film under 6°C.'
  },
  {
    title: 'Predictive dispatch routing',
    description:
      'We batch orders using live traffic feeds and EV temperature logs, ensuring every crate reaches within the freshness SLA.'
  }
];

const testimonials = [
  {
    quote:
      'SabjiVerse replaced our in-house procurement team. Their hydroponic greens are the only leaves that survive our 12-hour line without wilting.',
    name: 'Chef Radhika Menon',
    role: 'Executive Chef, The Green Bowl Co.'
  },
  {
    quote:
      'Our subscribers mention the difference in flavour week after week. The traceability reports are a big win for conscious consumers.',
    name: 'Ishan Bhalla',
    role: 'Founder, FarmCrate CSA'
  },
  {
    quote:
      'From harvest reports to dedicated EV slots, their wholesale program keeps our retail shelves stocked regardless of season.',
    name: 'Neha Kapoor',
    role: 'Buying Lead, FreshFields Gourmet'
  }
];

export const metadata: Metadata = {
  title: 'SabjiVerse | Fresh Vegetables Delivered Daily',
  description:
    'SabjiVerse sources the freshest seasonal vegetables directly from local farms and delivers them to homes and restaurants within hours.'
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-brand-50 via-white to-brand-100">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pt-32 sm:px-6 lg:px-8">
        <section id="hero" className="relative overflow-hidden rounded-[38px] bg-white p-10 pt-20 shadow-soft sm:p-16">
          <div className="absolute -top-64 left-1/2 aspect-square w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-200 via-brand-100 to-transparent blur-3xl" />
          <div className="relative grid gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                Farm-direct • NCR
              </span>
              <h1 className="font-display text-4xl font-bold leading-tight text-brand-900 sm:text-5xl lg:text-6xl">
                Fresh. Sustainable. Traceable.
              </h1>
              <p className="text-base text-brand-600 sm:text-lg">
                SabjiVerse is the one-click supply chain for premium vegetables. We help chefs,
                retailers, and families access pesticide-free produce that tastes like it was
                just picked — because it was.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="#produce" variant="primary">
                  Explore today&apos;s harvest
                </Button>
                <Button href="#wholesale" variant="secondary">
                  Download wholesale deck
                </Button>
              </div>
              <ul className="mt-10 flex flex-wrap gap-6 text-xs text-brand-600">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-500" />
                  Traceable farm lots
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-500" />
                  EV cold chain logistics
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-500" />
                  Compostable packaging
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -translate-x-6 -translate-y-6 rounded-[46px] border border-brand-100" />
              <div className="relative h-full rounded-[32px] bg-gradient-to-br from-brand-200 via-white to-brand-100 p-6 shadow-soft">
                <div className="grid gap-6">
                  <div className="rounded-3xl border border-brand-100 bg-white/70 p-6 backdrop-blur">
                    <h3 className="font-display text-lg font-semibold text-brand-900">
                      Today&apos;s harvest highlights
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-brand-700">
                      <li>• Baby bok choy from Sonepat hydroponic cluster</li>
                      <li>• Cherry tomatoes, heirloom mix, Nashik</li>
                      <li>• Tender drumsticks, pesticide-free, Madurai</li>
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-brand-100 bg-white/70 p-6 backdrop-blur">
                    <h3 className="font-display text-lg font-semibold text-brand-900">
                      Supply insights
                    </h3>
                    <p className="text-sm text-brand-700">
                      Rainwatch triggers for Uttarakhand farms expected Thursday.
                      Plan menu shifts for leafy greens by Friday morning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <MetricsGrid metrics={heroMetrics} />
          </div>
        </section>

        <section id="values" className="space-y-12">
          <SectionHeading
            eyebrow="Why SabjiVerse"
            title="Every crate is coded for freshness"
            description="We engineer transparency into every stage of the vegetable journey. Beyond organic certifications, we run sensory audits, moisture tracking, and provide QR-coded harvest stories."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={<span className="text-2xl">{feature.icon}</span>}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        <section id="produce" className="space-y-12">
          <SectionHeading
            eyebrow="Produce catalogue"
            title="Curated for kitchens and conscious homes"
            description="Discover vegetable programs tailored for menu innovation, retail freshness, and weekly subscription boxes. Updated harvest sheets go out by 6 AM daily."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {produceCategories.map((item) => (
              <ProductCard
                key={item.name}
                name={item.name}
                freshnessWindow={item.freshnessWindow}
                description={item.description}
                badge={item.badge}
                price={item.price}
              />
            ))}
          </div>
        </section>

        <section id="story" className="space-y-12">
          <SectionHeading
            eyebrow="How it works"
            title="A supply chain designed for vegetables at their peak"
            description="We combine agronomy expertise, predictive tech, and human craftsmanship. Each step reimagines how vegetables travel from soil to sauté pan."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.title}
                step={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </section>

        <section id="wholesale" className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="rounded-[32px] border border-brand-100 bg-white/90 p-10 shadow-soft">
            <SectionHeading
              eyebrow="Wholesale programs"
              title="Built for chefs, retailers, and institutional kitchens"
              description="Flexible procurement models with micro-lot traceability and demand planning insights."
              align="left"
            />
            <div className="mt-10 grid gap-6 text-sm text-brand-600 sm:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-display text-lg font-semibold text-brand-900">
                  Standing orders
                </h3>
                <p>
                  Lock-in weekly volumes with dynamic pricing bands. Swap SKUs upto
                  10 PM on the eve of delivery.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-lg font-semibold text-brand-900">
                  Seasonal menu labs
                </h3>
                <p>
                  Access R&D crates to test upcoming varietals before the season hits.
                  Perfect for farm-to-table menus.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-lg font-semibold text-brand-900">
                  Climate footprint reports
                </h3>
                <p>
                  Receive quarterly sustainability dashboards with carbon savings,
                  water usage, and packaging metrics.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-lg font-semibold text-brand-900">
                  API & ERP integrations
                </h3>
                <p>
                  Plug into our procurement APIs or connect via Zapier to automate reordering
                  from kitchen inventory tools.
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="primary" href="#contact">
                Book a sourcing walkthrough
              </Button>
              <Button
                variant="ghost"
                href="https://cal.com/sabjiverse/procurement"
                className="text-brand-600 hover:text-brand-900"
              >
                Schedule a discovery call
              </Button>
            </div>
          </div>
          <div className="rounded-[32px] border border-dashed border-brand-200 bg-brand-50/80 p-8">
            <h3 className="font-display text-2xl font-semibold text-brand-800">
              Vendor enablement kit
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-brand-700">
              <li>• HACCP compliant processing facility walkthrough</li>
              <li>• Detailed SKU price ladder & MOQ details</li>
              <li>• Customised crop planning with agronomy team</li>
              <li>• Marketing co-branding for menus & signage</li>
            </ul>
            <div className="mt-10 rounded-2xl bg-white/70 p-6 shadow-soft">
              <p className="font-display text-lg font-semibold text-brand-900">
                Same-day onboarding
              </p>
              <p className="mt-2 text-sm text-brand-600">
                Send your FSSAI license and GST invoice, and we activate your dashboard within
                hours. First EV delivery is complimentary.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeading
            eyebrow="Loved by culinary leaders"
            title="Trusted by chefs, CSA founders, and gourmet retailers"
            description="Partnerships built on predictability and flavour."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-12">
          <SectionHeading
            eyebrow="Partner with us"
            title="Start a pilot or schedule a tasting"
            description="Share your requirements — a produce strategist will reply within 2 business hours."
          />
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
