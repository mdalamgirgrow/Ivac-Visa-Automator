import { MessageCircle } from 'lucide-react';
import { FaqSection } from './components/FaqSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PricingSection } from './components/PricingSection';
import { WorkflowSection } from './components/WorkflowSection';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, WHATSAPP_URL } from './data/plans';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <PricingSection />
        <FaqSection />
      </main>

      <footer className="border-t border-zinc-800/80 bg-[#09090b]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-xs text-zinc-400 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} IVAC Visa Automator</p>
          <a
            href={getWhatsAppUrl('Hello, I would like to contact support for IVAC Visa Automator.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-zinc-200 hover:text-orange-400 transition-colors tabular-nums"
          >
            <MessageCircle className="h-3.5 w-3.5 text-orange-400" />
            <span>WhatsApp Support &amp; Orders: {WHATSAPP_DISPLAY} ({WHATSAPP_URL})</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
