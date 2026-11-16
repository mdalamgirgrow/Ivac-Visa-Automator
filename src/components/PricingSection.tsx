import { useState } from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, PRICING_PLANS } from '../data/plans';
import { PricingPlan } from '../types';

type PlanFilter = 'all' | 'short' | 'long' | 'lifetime';

export function PricingSection() {
  const [filter, setFilter] = useState<PlanFilter>('all');

  const visiblePlans = PRICING_PLANS.filter((plan) => {
    if (filter === 'short') return plan.duration === '30 days' || plan.duration === '60 days';
    if (filter === 'long') return plan.duration === '6 Months' || plan.duration === '1 Year';
    if (filter === 'lifetime') return plan.duration === 'Lifetime';
    return true;
  });

  const gridClass =
    visiblePlans.length === 1
      ? 'mx-auto max-w-md grid-cols-1'
      : visiblePlans.length === 2
      ? 'mx-auto max-w-4xl grid-cols-1 md:grid-cols-2'
      : visiblePlans.length === 3
      ? 'grid-cols-1 md:grid-cols-3'
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-6';

  return (
    <section
      id="plans"
      className="mx-auto max-w-7xl border-t border-zinc-800/80 px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl text-balance">
          আপনার জন্য সঠিক Plan বেছে নিন
        </h2>
        <p className="mt-3 text-base text-zinc-300">
          আপনার কাজের পরিমাণ অনুযায়ী একটি plan বেছে নিয়ে আজই IVAC Visa Automator ব্যবহার শুরু করুন।
        </p>

        {/* Functional duration filter segmented control */}
        <div
          role="group"
          aria-label="Filter plans by billing duration"
          className="mt-6 inline-flex flex-wrap items-center justify-center gap-1 rounded-lg border border-zinc-800 bg-[#121215] p-1"
        >
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              filter === 'all'
                ? 'bg-orange-500 text-zinc-950'
                : 'text-zinc-400 hover:text-zinc-100'
            }`}
          >
            All Packages (5)
          </button>
          <button
            type="button"
            onClick={() => setFilter('short')}
            className={`rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              filter === 'short'
                ? 'bg-orange-500 text-zinc-950'
                : 'text-zinc-400 hover:text-zinc-100'
            }`}
          >
            30–60 Days (2)
          </button>
          <button
            type="button"
            onClick={() => setFilter('long')}
            className={`rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              filter === 'long'
                ? 'bg-orange-500 text-zinc-950'
                : 'text-zinc-400 hover:text-zinc-100'
            }`}
          >
            6 Months – 1 Year (2)
          </button>
          <button
            type="button"
            onClick={() => setFilter('lifetime')}
            className={`rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              filter === 'lifetime'
                ? 'bg-orange-500 text-zinc-950'
                : 'text-zinc-400 hover:text-zinc-100'
            }`}
          >
            Lifetime
          </button>
        </div>
      </div>

      <div className={`mt-10 grid gap-6 ${gridClass}`}>
        {visiblePlans.map((plan, index) => {
          const isLifetime = Boolean(plan.isLifetime);
          const spanClass =
            visiblePlans.length === 5
              ? index < 3
                ? 'lg:col-span-2'
                : 'lg:col-span-3'
              : '';
          return (
            <article
              key={plan.id}
              className={`flex flex-col justify-between rounded-xl border p-6 transition-colors ${spanClass} ${
                isLifetime
                  ? 'border-orange-500/70 bg-[#151311]'
                  : 'border-zinc-800/90 bg-[#121215] hover:border-zinc-700'
              }`}
            >
              <div>
                <p
                  className={`text-xs font-medium ${
                    isLifetime ? 'text-orange-400' : 'text-zinc-400'
                  }`}
                >
                  {plan.tierLabel}
                </p>

                <h3 className="mt-2 text-sm font-bold tracking-tight text-zinc-100 leading-snug">
                  {plan.name}
                </h3>

                <div className="mt-5 flex items-baseline gap-2 border-b border-zinc-800/80 pb-5">
                  <span className="font-display text-4xl font-bold tracking-tight text-zinc-50 tabular-nums">
                    {plan.priceFormatted}
                  </span>
                  <span className="text-sm font-medium text-zinc-400">
                    / {plan.duration}
                  </span>
                </div>

                <p className="mt-4 text-xs font-medium text-zinc-400">
                  {plan.devicesSummary}
                </p>

                <ul className="mt-4 space-y-3">
                  {plan.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-[13px] leading-relaxed text-zinc-300"
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          isLifetime ? 'text-orange-400' : 'text-zinc-500'
                        }`}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={getWhatsAppUrl(
                  `Hello, I want to buy ${plan.name} (${plan.priceFormatted} / ${plan.duration}) for IVAC Visa Automator.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
                  isLifetime
                    ? 'bg-orange-500 text-zinc-950 hover:bg-orange-400'
                    : 'bg-orange-500/95 text-zinc-950 hover:bg-orange-400'
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                <span>{plan.ctaLabel}</span>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
