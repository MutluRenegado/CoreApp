export default function LandingPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden gradient-bg">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="glow-effect flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-white">Velocity</span>
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
            <a
              href="/platform"
              className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-indigo-500"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-20">
        {/* Decorative blobs */}
        <div className="animate-float absolute left-10 top-1/4 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
        <div
          className="animate-float absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"
          style={{ animationDelay: "-3s" }}
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="animate-fade-in-up">
            <span className="mb-6 inline-block rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400">
              ✨ Launching Something Amazing
            </span>
          </div>

          <h1 className="animate-fade-in-up-delay-1 mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Build the Future
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Today
            </span>
          </h1>

          <p className="animate-fade-in-up-delay-2 mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-slate-400">
            Transform your ideas into reality with our cutting-edge platform. Fast, reliable, and designed for the
            modern creator.
          </p>

          <div className="animate-fade-in-up-delay-3 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/platform"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Get Started Free →
            </a>

            <button className="glass-card flex items-center justify-center gap-2 rounded-full px-8 py-4 font-medium text-white transition-all hover:bg-white/10">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up-delay-3 mx-auto mt-16 grid max-w-lg grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-sm text-slate-500">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-sm text-slate-500">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-slate-500">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400">
              Features
            </span>
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Why Choose Us</h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              Everything you need to build, launch, and scale your next big idea.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="glass-card group rounded-3xl p-8 transition-all hover:bg-white/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 transition-transform group-hover:scale-110">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Lightning Fast</h3>
              <p className="leading-relaxed text-slate-400">
                Optimized performance that loads in milliseconds, keeping your users engaged and happy.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card group rounded-3xl p-8 transition-all hover:bg-white/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 transition-transform group-hover:scale-110">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Secure by Design</h3>
              <p className="leading-relaxed text-slate-400">
                Enterprise-grade security with end-to-end encryption protecting your data around the clock.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card group rounded-3xl p-8 transition-all hover:bg-white/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 transition-transform group-hover:scale-110">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Fully Customizable</h3>
              <p className="leading-relaxed text-slate-400">
                Tailor every aspect to match your brand with our flexible customization options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="glass-card relative overflow-hidden rounded-3xl p-12 text-center md:p-16">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20" />
            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to Get Started?</h2>
              <p className="mx-auto mb-8 max-w-xl text-slate-400">
                Join thousands of creators and businesses already building with our platform.
              </p>
              <a
                href="/platform"
                className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition-all hover:scale-105 hover:bg-slate-100"
              >
                Start Building Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
              <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-medium text-white">Velocity</span>
          </div>

          <p className="text-sm text-slate-500">© 2026 Velocity. All rights reserved.</p>

          <div className="flex gap-4">
            <a
              href="#"
              className="glass-card flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-all hover:bg-white/10 hover:text-white"
              aria-label="Twitter"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>

            <a
              href="#"
              className="glass-card flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-all hover:bg-white/10 hover:text-white"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="#"
              className="glass-card flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-all hover:bg-white/10 hover:text-white"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
