import Link from 'next/link';
import { Button } from './ui/button';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Produce', href: '#produce' },
  { name: 'Why SabjiVerse', href: '#values' },
  { name: 'Wholesale', href: '#wholesale' },
  { name: 'Contact', href: '#contact' }
];

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-brand-100 bg-white/90 px-4 py-2 shadow-soft backdrop-blur-md sm:px-6">
      <Link href="#hero" className="flex items-center gap-2">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 font-display text-xl text-white shadow-soft">
          SV
        </span>
        <div className="hidden sm:block">
          <span className="font-display text-lg font-semibold text-brand-900">
            SabjiVerse
          </span>
          <p className="text-xs text-brand-500">Farm-fresh greens, daily</p>
        </div>
      </Link>

      <div className="hidden items-center gap-6 text-sm font-medium text-brand-700 lg:flex">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="transition-colors duration-200 hover:text-brand-900"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="hidden sm:flex">
        <Button href="#contact" variant="primary">
          Schedule a tasting
        </Button>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2 text-xs font-medium text-brand-600 sm:hidden">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="rounded-full border border-brand-100 px-3 py-1 transition-colors duration-200 hover:border-brand-400 hover:text-brand-900"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
