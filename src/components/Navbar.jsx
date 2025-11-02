import { useState } from 'react';
import { Bot, Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Главная', href: '#home' },
    { label: 'Возможности', href: '#features' },
    { label: 'Демо-чат', href: '#chat' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500 text-white shadow-md shadow-fuchsia-500/30">
              <Bot size={18} />
            </div>
            <span className="text-white font-semibold tracking-tight group-hover:opacity-90 transition">Flames AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#chat"
              className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition"
            >
              <Rocket size={16} />
              Попробовать
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <div className="flex flex-col py-3 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-2 rounded-md text-white/90 hover:bg-white/10 transition"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#chat"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-3 py-2 text-sm font-medium shadow-sm"
              >
                Демо-чат
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
