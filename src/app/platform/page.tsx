import Link from "next/link";

export default function PlatformPage() {
  return (
    <div className="min-h-screen w-full gradient-bg px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="glass-card rounded-3xl p-8">
          <h1 className="text-3xl font-black text-white">CaelumHQ Platform</h1>
          <p className="mt-3 text-slate-300">
            This page exists so /platform does not 404. Next we will add Firebase Auth, workspaces, and app installation.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/platform/marketplace"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 font-semibold text-white transition-all hover:scale-105"
            >
              Open Marketplace →
            </Link>

            <Link
              href="/"
              className="glass-card rounded-full px-5 py-2.5 font-medium text-white transition-all hover:bg-white/10"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
