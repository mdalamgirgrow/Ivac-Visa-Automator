import { useState } from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../data/plans';

export function HeroSection() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 pb-14 sm:px-6 lg:pt-14 lg:pb-18">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Visual showcase banner */}
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-[#111114] shadow-2xl shadow-black/60">
            {!imageFailed ? (
              <img
                src="/assets/aistudio/Neon_IVAC_Slot_Automation_Pro_Banner_e1f3a04a.png"
                alt="IVAC Visa Automator v15.5 Chrome Extension Interface showing auto Cloudflare verification, auto file upload, automatic date retry, and payment link capture"
                referrerPolicy="no-referrer"
                onError={() => setImageFailed(true)}
                className="w-full h-auto block object-cover"
              />
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-8 text-center">
                <ShieldCheck className="h-12 w-12 text-orange-500 mb-3" />
                <p className="text-lg font-semibold text-zinc-100">
                  IVAC Visa Automator v15.5
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  Auto Cloudflare · Smart Upload · Network Payment Link Capture
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Copy & Primary Action */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <p className="text-xs font-medium tracking-wide text-orange-400">
            Chrome Extension · v15.5 · Bengali &amp; English
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl text-balance leading-[1.08]">
            Book IVAC slots before they vanish.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-zinc-300">
            IVAC Visa Automator runs the whole booking flow for you — file upload,
            center &amp; mission selection, Cloudflare verification, and relentless date
            retrying — so you reach the payment page during the few minutes slots are
            actually open.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href={getWhatsAppUrl('Hello, I want to order IVAC Visa Automator.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-orange-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Order on WhatsApp</span>
            </a>

            <a
              href="#plans"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/70 px-5 py-3 text-sm font-semibold text-zinc-100 hover:border-zinc-500 hover:bg-zinc-800 transition-colors whitespace-nowrap shrink-0"
            >
              See plans &amp; buy
            </a>
          </div>

          <p className="mt-5 text-xs text-zinc-400">
            Direct WhatsApp Contact:{' '}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-zinc-200 underline decoration-zinc-600 underline-offset-2 hover:text-orange-400"
            >
              {WHATSAPP_DISPLAY}
            </a>{' '}
            · 30d, 60d, 6M, 1Y &amp; Lifetime plans
          </p>
        </div>
      </div>

      {/* Concise quantitative proof strip directly below hero split */}
      <div className="mt-12 grid grid-cols-2 gap-4 border-t border-zinc-800/80 pt-8 sm:grid-cols-4">
        <div>
          <p className="font-mono text-2xl font-semibold text-zinc-50 tabular-nums">8 Stages</p>
          <p className="mt-1 text-xs text-zinc-400">Login to payment link automated</p>
        </div>
        <div>
          <p className="font-mono text-2xl font-semibold text-zinc-50 tabular-nums">3 Profiles</p>
          <p className="mt-1 text-xs text-zinc-400">One-click account switching</p>
        </div>
        <div>
          <p className="font-mono text-2xl font-semibold text-zinc-50 tabular-nums">Up to 15</p>
          <p className="mt-1 text-xs text-zinc-400">Browsers supported on Lifetime</p>
        </div>
        <div>
          <p className="font-mono text-2xl font-semibold text-zinc-50 tabular-nums">24/7</p>
          <p className="mt-1 text-xs text-zinc-400">Private training &amp; rapid support</p>
        </div>
      </div>
    </section>
  );
}
