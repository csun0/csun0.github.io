const App = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 selection:bg-[#00FF00] selection:text-black">
      {/* Brand Header */}
      <header className="mb-20">
        <h1 className="text-4xl font-extrabold tracking-tighter mb-4">
          CSUN0<span className="animate-pulse">_</span>
        </h1>
        <div className="flex gap-4 text-xs text-[#888888] font-bold uppercase tracking-widest">
          <a href="https://github.com/csun0" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">github ↗</a>
          <a href="#" className="hover:text-white transition-colors">twitter ↗</a>
          <a href="mailto:csun0@university.edu" className="hover:text-white transition-colors">email ↗</a>
        </div>
      </header>

      {/* Identity Section */}
      <section className="mb-20">
        <h2 className="text-[#888888] font-bold text-xs uppercase tracking-[0.2em] mb-8 select-none">
          // IDENTITY
        </h2>
        <div className="space-y-6 text-[15px] leading-relaxed">
          <p>
            PhD student at University, focused on machine learning and its applications in the real world. 
            Passionate about building efficient, scalable systems and sharing progress along the way.
          </p>
          <p className="text-[#888888]">
            Current research: Optimizing transformer architectures for low-resource environments.
          </p>
        </div>
      </section>

      {/* Journal Section */}
      <section>
        <h2 className="text-[#888888] font-bold text-xs uppercase tracking-[0.2em] mb-12 select-none">
          // JOURNAL
        </h2>

        {/* Day 10 */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8">Day 10</h3>
          
          <div className="space-y-10">
            {/* Log Entry 1 */}
            <div className="group">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[#888888] text-xs font-bold tabular-nums">09:12 —</span>
                <span className="text-sm font-bold uppercase tracking-tight">baseline implementation</span>
                <span className="text-[#00FF00] text-xs font-bold ml-1">✓ (0.8s)</span>
              </div>
              <p className="text-[#888888] text-[14px] leading-relaxed pl-4 border-l border-white/5 group-hover:border-[#00FF00]/30 transition-colors">
                Achieved initial results on the new dataset. The model converges faster than expected. 
                Running a full sweep tonight.
              </p>
            </div>

            {/* Log Entry 2 */}
            <div className="group">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[#888888] text-xs font-bold tabular-nums">14:45 —</span>
                <span className="text-sm font-bold uppercase tracking-tight">data cleaning pipeline</span>
                <span className="text-[#00FF00] text-xs font-bold ml-1">✓</span>
              </div>
              <p className="text-[#888888] text-[14px] leading-relaxed pl-4 border-l border-white/5 group-hover:border-[#00FF00]/30 transition-colors">
                Removed outliers and normalized features. Accuracy improved by 2.4% across all metrics.
              </p>
            </div>
          </div>
        </div>

        {/* Day 09 */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8">Day 09</h3>
          
          <div className="space-y-10">
            <div className="group">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[#888888] text-xs font-bold tabular-nums">11:30 —</span>
                <span className="text-sm font-bold uppercase tracking-tight">new website launch</span>
              </div>
              <p className="text-[#888888] text-[14px] leading-relaxed pl-4 border-l border-white/5 group-hover:border-[#00FF00]/30 transition-colors">
                Decided to keep a public log of my PhD journey. Built this site using React + Tailwind. 
                Keeping it minimal, focusing on raw progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 pt-12 border-t border-white/5 flex justify-between items-center text-[10px] text-[#888888] font-bold uppercase tracking-widest">
        <span>© 2026 CSUN0</span>
        <div className="flex gap-6">
          <span className="text-[#00FF00]">growing up in public</span>
        </div>
      </footer>
    </div>
  )
}

export default App
