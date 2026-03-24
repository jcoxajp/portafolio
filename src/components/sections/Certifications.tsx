import { Award } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import { certifications } from '../../data/certifications'

export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      className="py-16 bg-white dark:bg-slate-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-8">
          <span className="font-mono text-blue-500 text-lg mr-2 select-none">
            05.
          </span>
          Certificaciones
        </h2>

        <div className="flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
            >
              <Award size={15} className="text-blue-500 shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                  {cert.name}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
