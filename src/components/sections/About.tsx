import { MapPin } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'

export default function About() {
  return (
    <SectionWrapper
      id="about"
      className="py-24 bg-white dark:bg-slate-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-10">
          <span className="font-mono text-blue-500 text-lg mr-2 select-none">
            01.
          </span>
          Sobre mí
        </h2>

        <div className="max-w-2xl space-y-6">
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Desarrollador backend con ~2 años de experiencia construyendo sistemas
            internos y públicos para entornos empresariales reales. Me especializo
            en Node.js con Express, APIs RESTful, PostgreSQL e integración con SAP.
            Trabajo en un ecosistema donde los sistemas deben ser seguros,
            eficientes y tolerantes a fallos. También desarrollo el frontend
            necesario con React cuando el proyecto lo requiere.
          </p>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <MapPin size={13} className="text-blue-500" />
              Guatemala
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
