import Link from "next/link";

function Calculator() {
  return (
    <div className="glass-card rounded-3xl p-8">
      <h2 className="text-2xl font-bold text-white">Calculator</h2>
      <p className="mt-2 text-slate-300">
        Demo app. Next step: store installed apps per workspace and load them in a sidebar.
      </p>

      <div className="mt-6 grid max-w-sm grid-cols-4 gap-2">
        {[
          "7",
          "8",
          "9",
          "÷",
          "4",
          "5",
          "6",
          "×",
          "1",
          "2",
          "3",
          "−",
          "0",
          ".",
          "=",
          "+",
        ].map((k) => (
          <button
            key={k}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white hover:bg-white/10"
            disabled
            title="Wire logic in the next step"
          >
            {k}
          </button>
        ))}
      </div>

      <div className="mt-6 text-sm text-slate-400">(UI-only for now — we’ll add state + keyboard support next.)</div>
    </div>
  );
}

export default function AppHost({ params }: { params: { appId: string } }) {
  const { appId } = params;

  return (
    <div className="min-h-screen w-full gradient-bg px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-white">App: {appId}</h1>
            <p className="mt-2 text-slate-300">This route hosts any installed app.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/platform/marketplace" className="text-slate-300 underline hover:text-white">
              Marketplace
            </Link>
            <Link href="/platform" className="text-slate-300 underline hover:text-white">
              Platform
            </Link>
          </div>
        </div>

        <div className="mt-8">
          {appId === "calculator" ? (
            <Calculator />
          ) : (
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white">Unknown app</h2>
              <p className="mt-2 text-slate-300">
                No app registered for <span className="text-white">{appId}</span> yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
