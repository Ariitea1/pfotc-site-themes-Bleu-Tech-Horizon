"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-20 bg-[#0a0f1f] text-slate-400">
      {/* Liseré lumineux horizon */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] shadow-[0_0_10px_rgba(0,180,255,0.6)] bg-[rgba(0,180,255,0.25)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="text-gray-400">
          © PFOTC — <span className="text-cyan-400">Pacific Hub Tahiti</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:contact@pfotc.com"
            className="hover:text-cyan-400 transition-colors"
          >
            contact@pfotc.com
          </a>
          <a
            href="https://pfotc.com"
            className="hover:text-cyan-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            pfotc.com
          </a>
          <a
            href="https://www.linkedin.com/company/pfotc"
            className="hover:text-cyan-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
