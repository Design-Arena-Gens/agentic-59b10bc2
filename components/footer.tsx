import Link from 'next/link';

const quickLinks = [
  { label: 'Our Story', href: '#story' },
  { label: 'Seasonal Produce', href: '#produce' },
  { label: 'Bulk Orders', href: '#wholesale' },
  { label: 'Sustainability', href: '#values' }
];

const serviceAreas = [
  'Gurugram',
  'South Delhi',
  'Noida',
  'Dwarka',
  'Ghaziabad',
  'Greater Noida'
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 font-display text-2xl text-white shadow-soft">
              SV
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-brand-900">
                SabjiVerse
              </p>
              <p className="text-sm text-brand-600">Farm-fresh greens, daily</p>
            </div>
          </div>
          <p className="text-sm text-brand-600">
            Direct-from-farm produce curated for modern kitchens. We harvest every
            morning, aggregate in climate-controlled hubs, and deliver within six hours.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-brand-900">
            Quick links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-brand-600">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-brand-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-brand-900">
            Service zones
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-brand-600">
            {serviceAreas.map((area) => (
              <li key={area} className="rounded-full bg-brand-50 px-3 py-1">
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-brand-900">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-600">
            <li>+91 89208 44100</li>
            <li>fresh@sabjiverse.com</li>
            <li>Warehouse 3, Sector 48, Gurugram</li>
          </ul>
          <p className="mt-6 text-xs text-brand-500">
            © {new Date().getFullYear()} SabjiVerse Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
