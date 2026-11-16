import { FEATURES } from '../data/plans';

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="mx-auto max-w-6xl border-t border-zinc-800/80 px-4 py-16 sm:px-6"
    >
      <div className="max-w-2xl">
        <p className="text-xs font-medium tracking-wide text-orange-400">
          Core Automation Capabilities
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl text-balance">
          Built for the narrow window when IVAC appointments open.
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {FEATURES.map((feature) => (
          <article
            key={feature.number}
            className={`rounded-xl border border-zinc-800/90 bg-[#121215] p-6 transition-colors hover:border-zinc-700 ${feature.colSpanClass}`}
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs font-semibold text-orange-400 tabular-nums">
                {feature.number}.
              </span>
              <h3 className="text-base font-semibold tracking-tight text-zinc-50">
                {feature.title}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
