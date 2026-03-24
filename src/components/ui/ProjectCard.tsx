import { motion } from 'framer-motion'
import type { Project } from '../../types'
import TechBadge from './TechBadge'
import { cn } from '../../lib/utils'

const statusStyles: Record<Project['statusVariant'], string> = {
  internal:
    'bg-slate-500/10 text-slate-500 dark:text-slate-400 border-slate-500/20',
  production:
    'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  desktop:
    'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  utility:
    'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group flex flex-col h-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 transition-shadow duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50 leading-snug">
          {project.title}
        </h3>
        <span
          className={cn(
            'shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border',
            statusStyles[project.statusVariant],
          )}
        >
          {project.status}
        </span>
      </div>

      <p className="text-xs font-medium text-blue-500 mb-3">{project.type}</p>

      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.stack.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
    </motion.article>
  )
}
