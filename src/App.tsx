const App = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Header section */}
      <header className="mb-16">
        <h1 className="text-2xl font-bold mb-2">
          <span className="text-accent-green">//</span> csun0.github.io
        </h1>
        <p className="text-muted text-sm italic">
          PhD Student @ University | Growing up in public
          <span className="ml-2 text-accent-green">✓</span>
        </p>
      </header>

      {/* Content Stream */}
      <main className="space-y-12">
        {/* Entry 1 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-lg font-bold"># Day 10: Research Progress</h2>
            <span className="text-muted text-xs">March 11, 2026</span>
          </div>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Successfully implemented the baseline model for my research. The results are looking promising, 
              approaching the performance of SOTA models with significantly less computational overhead.
            </p>
            <p>
              Next steps involve fine-tuning the hyperparameters and conducting a thorough ablation study. 
              The draft for the upcoming conference is coming along nicely.
            </p>
            <div className="pt-2">
              <a href="https://github.com/csun0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 group">
                View on GitHub! 
                <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Entry 2 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-lg font-bold"># Day 9: New Website</h2>
            <span className="text-muted text-xs">March 10, 2026</span>
          </div>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Decided to build a personal portfolio site using React and Tailwind CSS. 
              Aiming for a clean, developer-centric aesthetic inspired by terminal logs and 
              minimalist design patterns.
            </p>
            <p>
              It's hosted on GitHub Pages, which makes the deployment process seamless 
              with GitHub Actions.
            </p>
          </div>
        </section>

        {/* Placeholder for more entries */}
        <div className="pt-8 border-t border-muted/20">
          <p className="text-muted text-xs">
            End of log. More updates coming soon.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-24 text-xs text-muted flex justify-between items-center">
        <div>© 2026 csun0</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Email</a>
        </div>
      </footer>
    </div>
  )
}

export default App
