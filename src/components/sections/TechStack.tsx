import { Server, Globe, Monitor, GitBranch, Wrench, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import { techStack } from '../../data/stack'
import type { ReactNode } from 'react'

const CATEGORY_ICONS: Record<string, ReactNode> = {
  Backend: <Server size={15} />,
  Frontend: <Globe size={15} />,
  Desktop: <Monitor size={15} />,
  'DevOps / Infra': <GitBranch size={15} />,
  Herramientas: <Wrench size={15} />,
  Adicional: <BookOpen size={15} />,
}

export default function TechStack() {
  return (
    <SectionWrapper
      id="stack"
      className="py-24 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-12">
          <span className="font-mono text-blue-500 text-lg mr-2 select-none">
            02.
          </span>
          Stack Tecnológico
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((category) => (
            <div
              key={category.name}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-500">{CATEGORY_ICONS[category.name]}</span>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <motion.span
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-transparent hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 cursor-default select-none"
                  >
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
