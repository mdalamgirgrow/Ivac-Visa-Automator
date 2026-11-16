import { useState } from 'react';
import { WORKFLOW_STAGES } from '../data/plans';

export function WorkflowSection() {
  const [selectedStep, setSelectedStep] = useState<number>(8);
  const currentStage =
    WORKFLOW_STAGES.find((stage) => stage.step === selectedStep) ?? WORKFLOW_STAGES[0];

  return (
    <section
      id="workflow"
      className="mx-auto max-w-6xl border-t border-zinc-800/80 px-4 py-16 sm:px-6"
    >
      <div className="max-w-2xl">
        <p className="text-xs font-medium tracking-wide text-orange-400">
          End-to-End Execution Pipeline
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl text-balance">
          Every stage from login to captured payment link.
        </h2>
      </div>

      {/* Interactive 8-step selector */}
      <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-8">
        {WORKFLOW_STAGES.map((stage) => {
          const isActive = stage.step === selectedStep;
          return (
            <button
              key={stage.step}
              type="button"
              onClick={() => setSelectedStep(stage.step)}
              className={`rounded-lg border px-3 py-3 text-left transition-colors cursor-pointer ${
                isActive
                  ? 'border-orange-500 bg-orange-500/10 text-zinc-50'
                  : 'border-zinc-800 bg-[#121215] text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
              }`}
            >
              <span className="block font-mono text-[11px] font-semibold text-orange-400 tabular-nums">
                Step 0{stage.step}
              </span>
              <span className="mt-1 block truncate text-xs font-semibold">
                {stage.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Stage detail bar */}
      <div className="mt-4 flex flex-col justify-between gap-4 rounded-xl border border-zinc-800/90 bg-[#121215] p-6 sm:flex-row sm:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
            <span className="font-mono font-semibold text-orange-400 tabular-nums">
              Stage {currentStage.step} of 8
            </span>
            <span aria-hidden="true">·</span>
            <span>{currentStage.bnName}</span>
          </div>
          <h3 className="mt-1.5 text-lg font-semibold text-zinc-50">
            {currentStage.name}
          </h3>
          <p className="mt-1 text-sm text-zinc-300">{currentStage.detail}</p>
        </div>

        <div className="shrink-0 rounded-lg border border-zinc-800 bg-[#09090b] px-4 py-2.5 font-mono text-xs text-emerald-400 tabular-nums">
          {currentStage.networkStatus}
        </div>
      </div>
    </section>
  );
}
