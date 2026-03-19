import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, Facebook, Mail } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#3d2817] text-[#f5f1e8] py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Tienda Gardel
            </h3>
            <p
              className="text-[#d4b896] text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-lg mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'var(--font-sans)' }}>
              <li>
                <Link to="/" className="text-[#d4b896] hover:text-[#f5f1e8] transition-colors text-sm">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/artesania" className="text-[#d4b896] hover:text-[#f5f1e8] transition-colors text-sm">
                  {t.nav.craftsmanship}
                </Link>
              </li>
              <li>
                <Link to="/envios" className="text-[#d4b896] hover:text-[#f5f1e8] transition-colors text-sm">
                  {t.nav.shipping}
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-[#d4b896] hover:text-[#f5f1e8] transition-colors text-sm">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-lg mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t.footer.contact}
            </h4>
            <ul className="space-y-2 text-sm text-[#d4b896]" style={{ fontFamily: 'var(--font-sans)' }}>
              <li>La Plata, City Bell</li>
              <li>info@tiendagardel.com</li>
              <li>+54 9 22 1508-9495</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-lg mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t.footer.followUs}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#d4b896]/20 rounded-full flex items-center justify-center hover:bg-[#d4b896] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#d4b896]/20 rounded-full flex items-center justify-center hover:bg-[#d4b896] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@tiendagardel.com"
                className="w-10 h-10 bg-[#d4b896]/20 rounded-full flex items-center justify-center hover:bg-[#d4b896] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d4b896]/20 pt-8 text-center">
          <p
            className="text-sm text-[#d4b896]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};