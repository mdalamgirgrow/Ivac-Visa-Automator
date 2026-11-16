import { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/plans';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-[#09090b]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6">
        {/* Zone 1: Single-line brand mark */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-base font-bold tracking-tight text-zinc-50 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-md"
        >
          <img
            src="/assets/aistudio/ivac_pro_logo_f9834a5c.png"
            alt="IVAC Visa Automator logo"
            referrerPolicy="no-referrer"
            className="h-8 w-8 rounded-full object-cover border border-zinc-700/80 shrink-0"
          />
          <span>IVAC Visa Automator</span>
        </a>

        {/* Zone 2: Concise single-line nav links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400"
        >
          <a
            href="#features"
            className="hover:text-zinc-50 transition-colors whitespace-nowrap shrink-0"
          >
            Features
          </a>
          <a
            href="#workflow"
            className="hover:text-zinc-50 transition-colors whitespace-nowrap shrink-0"
          >
            Workflow
          </a>
          <a
            href="#plans"
            className="hover:text-zinc-50 transition-colors whitespace-nowrap shrink-0"
          >
            Plans
          </a>
          <a
            href="#faq"
            className="hover:text-zinc-50 transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: Single primary action + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getWhatsAppUrl('Hello, I want to get an IVAC Visa Automator license.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-orange-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Get a license</span>
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-zinc-50 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800/80 bg-[#09090b] px-4 py-4 space-y-2">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-zinc-50"
          >
            Features
          </a>
          <a
            href="#workflow"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-zinc-50"
          >
            Workflow
          </a>
          <a
            href="#plans"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-zinc-50"
          >
            Plans
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-zinc-50"
          >
            FAQ
          </a>
          <a
            href={getWhatsAppUrl('Hello, I want to get an IVAC Visa Automator license.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-orange-400 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Get a license</span>
          </a>
        </div>
      )}
    </header>
  );
}
