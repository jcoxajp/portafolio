import { cn } from '../../lib/utils'

interface TechBadgeProps {
  label: string
  className?: string
}

export default function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium',
        'bg-blue-500/10 text-blue-500 dark:text-blue-400',
        'border border-blue-500/20',
        className,
      )}
    >
      {label}
    </span>
  )
}
