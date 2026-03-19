import { Link, useLocation } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f1e8]/95 backdrop-blur-sm border-b border-[#3d2817]/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl text-[#3d2817] tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
          Tienda Gardel
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`transition-colors ${
              isActive('/') ? 'text-[#3d2817]' : 'text-[#6b5d52] hover:text-[#3d2817]'
            }`}
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {t.nav.home}
          </Link>
          <Link
            to="/artesania"
            className={`transition-colors ${
              isActive('/artesania') ? 'text-[#3d2817]' : 'text-[#6b5d52] hover:text-[#3d2817]'
            }`}
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {t.nav.craftsmanship}
          </Link>
          <Link
            to="/envios"
            className={`transition-colors ${
              isActive('/envios') ? 'text-[#3d2817]' : 'text-[#6b5d52] hover:text-[#3d2817]'
            }`}
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {t.nav.shipping}
          </Link>
          <Link
            to="/contacto"
            className={`transition-colors ${
              isActive('/contacto') ? 'text-[#3d2817]' : 'text-[#6b5d52] hover:text-[#3d2817]'
            }`}
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {t.nav.contact}
          </Link>

          {/* Language Toggle */}
          <div className="flex items-center gap-1 bg-[#d4b896]/20 rounded-full p-1">
            <button
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                language === 'es'
                  ? 'bg-[#d4b896] text-[#3d2817] shadow-sm'
                  : 'text-[#6b5d52] hover:text-[#3d2817]'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                language === 'en'
                  ? 'bg-[#d4b896] text-[#3d2817] shadow-sm'
                  : 'text-[#6b5d52] hover:text-[#3d2817]'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#3d2817]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f5f1e8] border-t border-[#3d2817]/10">
          <div className="px-6 py-4 space-y-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 ${
                isActive('/') ? 'text-[#3d2817]' : 'text-[#6b5d52]'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {t.nav.home}
            </Link>
            <Link
              to="/artesania"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 ${
                isActive('/artesania') ? 'text-[#3d2817]' : 'text-[#6b5d52]'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {t.nav.craftsmanship}
            </Link>
            <Link
              to="/envios"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 ${
                isActive('/envios') ? 'text-[#3d2817]' : 'text-[#6b5d52]'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {t.nav.shipping}
            </Link>
            <Link
              to="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 ${
                isActive('/contacto') ? 'text-[#3d2817]' : 'text-[#6b5d52]'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {t.nav.contact}
            </Link>

            {/* Mobile Language Toggle */}
            <div className="flex items-center gap-2 pt-4 border-t border-[#3d2817]/10">
              <button
                onClick={() => {
                  setLanguage('es');
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  language === 'es'
                    ? 'bg-[#d4b896] text-[#3d2817]'
                    : 'bg-[#d4b896]/20 text-[#6b5d52]'
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                ES
              </button>
              <button
                onClick={() => {
                  setLanguage('en');
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  language === 'en'
                    ? 'bg-[#d4b896] text-[#3d2817]'
                    : 'bg-[#d4b896]/20 text-[#6b5d52]'
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};