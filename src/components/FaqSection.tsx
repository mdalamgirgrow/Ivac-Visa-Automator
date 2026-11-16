import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/plans';

export function FaqSection() {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  return (
    <section
      id="faq"
      className="mx-auto max-w-4xl border-t border-zinc-800/80 px-4 py-16 sm:px-6"
    >
      <div className="text-center">
        <p className="text-xs font-medium tracking-wide text-orange-400">
          Common Questions
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl text-balance">
          Licensing, bKash verification, and proxy setup.
        </h2>
      </div>

      <div className="mt-10 divide-y divide-zinc-800/80 border-y border-zinc-800/80">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="py-5">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? '' : item.id)}
                className="flex w-full items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-md"
              >
                <span className="text-base font-semibold text-zinc-100">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-orange-400' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <p className="mt-3 text-sm leading-relaxed text-zinc-300 pr-8">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
