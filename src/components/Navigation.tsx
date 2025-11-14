import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:inline">BRANDSO</span>
          </Link>

          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-slate-300 hover:text-emerald-400 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button 
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-lg text-white font-semibold transition-all transform hover:scale-105"
            onClick={() => window.dispatchEvent(new CustomEvent('openClientModal'))}
          >
            + Become a Client
          </button>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-slate-300 hover:text-emerald-400 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button 
              className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg text-white font-semibold transition-all"
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new CustomEvent('openClientModal'));
              }}
            >
              + Become a Client
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}