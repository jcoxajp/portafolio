import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText } from 'lucide-react'

export default function Blog() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 transition-colors duration-200 mb-16"
        >
          <ArrowLeft size={15} />
          Volver al inicio
        </Link>

        <div className="flex flex-col items-center text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6">
            <FileText size={26} className="text-blue-500" />
          </div>

          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-3">
            Blog
          </h1>

          <p className="text-slate-500 text-base max-w-xs">
            Próximamente &mdash; notas técnicas y aprendizajes
          </p>
        </div>
      </div>
    </motion.main>
  )
}
