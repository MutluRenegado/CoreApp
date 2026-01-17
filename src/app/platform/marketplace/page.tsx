import Link from "next/link";

const APPS = [
  {
    id: "calculator",
    name: "Calculator",
    description: "The first CaelumHQ app. Simple, fast, and installable per workspace.",
    tag: "Core demo",
  },
];

export default function MarketplacePage() {
  return (
    <div className="min-h-screen w-full gradient-bg px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-white">Marketplace</h1>
            <p className="mt-2 text-slate-300">
              Install apps into your workspace. Next step: connect this to Firestore so installs are per-workspace.
            </p>
          </div>
          <Link href="/platform" className="text-slate-300 underline hover:text-white">
            ← Back
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {APPS.map((app) => (
            <div key={app.id} className="glass-card rounded-3xl p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-white text-xl font-bold">{app.name}</div>
                  <div className="mt-1 text-sm text-slate-400">{app.tag}</div>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                  {app.id}
                </span>
              </div>

              <p className="mt-4 text-slate-300 leading-relaxed">{app.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-indigo-600 px-5 py-2.5 font-semibold text-white hover:bg-indigo-500">
                  Install (stub)
                </button>

                <Link
                  href={`/platform/apps/${app.id}`}
                  className="glass-card rounded-full px-5 py-2.5 font-medium text-white transition-all hover:bg-white/10"
                >
                  Open →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
