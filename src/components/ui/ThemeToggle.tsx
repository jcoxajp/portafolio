import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={
        theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
      }
      className="relative w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
      </motion.div>
    </button>
  )
}
