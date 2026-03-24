export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
        <p>José Coxaj &copy; 2025 &middot; Backend Developer &middot; Guatemala</p>
        <p className="font-mono text-xs text-slate-400 dark:text-slate-600">
          {'// built with React + TypeScript'}
        </p>
      </div>
    </footer>
  )
}
