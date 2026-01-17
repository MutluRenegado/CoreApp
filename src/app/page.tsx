import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden gradient-bg">
      <nav className="fixed left-0 right-0 top-0 z-50 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="glow-effect flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-white">CaelumHQ</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-slate-300 transition-colors hover:text-white">
              Features
            </a>
            <a href="#about" className="text-sm text-slate-300 transition-colors hover:text-white">
              About
            </a>
            <a href="#contact" className="text-sm text-slate-300 transition-colors hover:text-white">
              Contact
            </a>

            <Link
              href="/platform"
              className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-indigo-500"
            >
              Enter Platform
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-20">
        <div className="animate-float absolute left-10 top-1/4 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
        <div
          className="animate-float absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"
          style={{ animationDelay: "-3s" }}
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="animate-fade-in-up">
            <span className="mb-6 inline-block rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400">
              ✨ Core Platform + Installable Apps
            </span>
          </div>

          <h1 className="animate-fade-in-up-delay-1 mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Start with a{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Core
            </span>
            <br />
            Scale with Apps
          </h1>

          <p className="animate-fade-in-up-delay-2 mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-slate-400">
            CaelumHQ is your modular workspace hub: keep the core simple, then add apps only when you need them.
          </p>

          <div className="animate-fade-in-up-delay-3 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/platform"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Get Started →
            </Link>

            <a
              href="#features"
              className="glass-card flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium text-white transition-all hover:bg-white/10"
            >
              See Features
            </a>
          </div>

          {/* Quick stats (product-fit, not fake numbers) */}
          <div className="animate-fade-in-up-delay-3 mx-auto mt-16 grid max-w-xl grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Core</div>
              <div className="text-sm text-slate-500">Stable foundation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Apps</div>
              <div className="text-sm text-slate-500">Install anytime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Workspaces</div>
              <div className="text-sm text-slate-500">Teams or personal</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400">
              Features
            </span>
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Why CaelumHQ</h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              A clean core you can trust — with a marketplace of apps to scale your system as you grow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="glass-card rounded-3xl p-8 transition-all hover:bg-white/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Tiny Core</h3>
              <p className="leading-relaxed text-slate-400">
                Start simple: auth, workspaces, permissions, and app installation. No bloat.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 transition-all hover:bg-white/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600">
                <span className="text-2xl">🧩</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Installable Apps</h3>
              <p className="leading-relaxed text-slate-400">
                Add tools like calculator, tasks, CRM, invoices, or social scheduling — when you’re ready.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 transition-all hover:bg-white/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Workspace Security</h3>
              <p className="leading-relaxed text-slate-400">
                Multi-tenant by design: each workspace controls its own members, apps, and data.
              </p>
            </div>
          </div>

          {/* About */}
          <div id="about" className="mt-16 glass-card rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-white">About</h3>
            <p className="mt-3 leading-relaxed text-slate-400">
              <span className="text-white">Caelum</span> means “sky/heavens” in Latin —{" "}
              <span className="text-white">CaelumHQ</span> is your headquarters to build a system that grows with you.
            </p>
            <p className="mt-3 leading-relaxed text-slate-400">
              Domain: <span className="text-white">caelumhq.space</span>
            </p>
          </div>

          {/* Contact */}
          <div id="contact" className="mt-6 glass-card rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-white">Contact</h3>
            <p className="mt-3 text-slate-400">
              Email: <span className="text-white">space@caelumhq.space</span>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <span className="text-sm text-slate-500">© 2026 CaelumHQ. All rights reserved.</span>
          <Link href="/platform" className="text-sm text-slate-300 underline hover:text-white">
            Enter Platform →
          </Link>
        </div>
      </footer>
    </div>
  );
}
