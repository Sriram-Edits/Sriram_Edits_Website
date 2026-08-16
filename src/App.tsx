import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Stats = React.lazy(() => import('./components/Stats'));
const About = React.lazy(() => import('./components/About'));
const Services = React.lazy(() => import('./components/Services'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Process = React.lazy(() => import('./components/Process'));
const WhyUs = React.lazy(() => import('./components/WhyUs'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const ToolsMarquee = React.lazy(() => import('./components/ToolsMarquee'));
const CTA = React.lazy(() => import('./components/CTA'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const WhatsAppButton = React.lazy(() => import('./components/WhatsAppButton'));

const Loader = () => (
  <div className="h-32 w-full flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <div className="film-grain min-h-screen bg-bg text-text-primary font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<Loader />}>
          <Stats />
          <About />
          <Services />
          <Portfolio />
          <Process />
          <WhyUs />
          <Pricing />
          <ToolsMarquee />
          <CTA />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
}
