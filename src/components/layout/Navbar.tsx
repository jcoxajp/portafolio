import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from '../ui/ThemeToggle'
import { cn } from '../../lib/utils'

const NAV_LINKS = [
  { label: 'Sobre mí', href: '#about', isRoute: false },
  { label: 'Stack', href: '#stack', isRoute: false },
  { label: 'Proyectos', href: '#projects', isRoute: false },
  { label: 'Experiencia', href: '#experience', isRoute: false },
  { label: 'Blog', href: '/blog', isRoute: true },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const handleAnchorClick = (href: string) => {
    setIsOpen(false)
    if (location.pathname !== '/') {
      window.location.href = `/${href}`
      return
    }
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const linkClass =
    'px-3 py-1.5 text-sm rounded-md transition-colors duration-200 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm'
          : 'bg-transparent',
      )}
    >
      <nav
        className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        <Link
          to="/"
          className="flex items-center gap-0.5 text-sm font-semibold text-slate-900 dark:text-slate-50 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          aria-label="Inicio"
        >
          <span className="font-mono text-blue-500 select-none">{'<'}</span>
          <span>JC</span>
          <span className="font-mono text-blue-500 select-none">{' />'}</span>
        </Link>

        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) =>
            link.isRoute ? (
              <Link key={link.href} to={link.href} className={linkClass}>
                {link.label}
              </Link>
            ) : (
              <button
                key={link.href}
                onClick={() => handleAnchorClick(link.href)}
                className={linkClass}
              >
                {link.label}
              </button>
            ),
          )}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="px-3 py-2 text-sm text-left rounded-md text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => handleAnchorClick(link.href)}
                    className="px-3 py-2 text-sm text-left rounded-md text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
