import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { LanguageProvider } from '../contexts/LanguageContext';

export default function Layout() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <Navigation />
        <Outlet />
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}