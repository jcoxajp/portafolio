import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Experience } from '../../types'
import TechBadge from './TechBadge'

interface TimelineItemProps {
  item: Experience
  index: number
  isLast: boolean
}

export default function TimelineItem({
  item,
  index,
  isLast,
}: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
      className="relative flex gap-6"
    >
      <div className="flex flex-col items-center">
        <div
          className={[
            'flex-shrink-0 w-3 h-3 rounded-full mt-1.5 border-2',
            item.isCurrent
              ? 'bg-blue-500 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
              : 'bg-slate-300 dark:bg-slate-700 border-slate-300 dark:border-slate-600',
          ].join(' ')}
        />
        {!isLast && (
          <div className="w-px flex-1 bg-slate-200 dark:bg-slate-800 mt-2 min-h-8" />
        )}
      </div>

      <div className="pb-10">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
            {item.role}
          </h3>
          {item.isCurrent && (
            <span className="text-xs font-medium text-blue-500 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
              Actual
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm text-slate-500 mb-3">
          <span>{item.company}</span>
          <span aria-hidden>·</span>
          <span>{item.period}</span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
