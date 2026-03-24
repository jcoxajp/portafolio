import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import SectionWrapper from '../ui/SectionWrapper'

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      className="py-24 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
          <span className="font-mono text-blue-500 text-lg mr-2 select-none">
            06.
          </span>
          Contacto
        </h2>

        <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-sm mx-auto text-base">
          ¿Tienes un proyecto en mente o quieres contactarme?
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:placeholder@email.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors duration-200 shadow-lg shadow-blue-500/20"
          >
            <Mail size={15} />
            Email
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors duration-200"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors duration-200"
          >
            <GithubIcon />
            GitHub
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
