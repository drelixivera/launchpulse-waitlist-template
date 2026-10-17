import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductPreview } from './components/ProductPreview';
import { FeatureGrid } from './components/FeatureGrid';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const scrollToForm = () => {
    const input = document.querySelector<HTMLInputElement>('#hero-email-form input');
    if (input) {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      input.focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <Navbar onJoinClick={scrollToForm} />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <ProductPreview />
        <FeatureGrid />
        <FAQ />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
