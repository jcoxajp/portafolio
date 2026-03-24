import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionWrapperProps {
  id?: string
  children: React.ReactNode
  className?: string
}

export default function SectionWrapper({
  id,
  children,
  className = '',
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section id={id} className={className}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
