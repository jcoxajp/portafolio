import SectionWrapper from '../ui/SectionWrapper'
import TimelineItem from '../ui/TimelineItem'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      className="py-24 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-12">
          <span className="font-mono text-blue-500 text-lg mr-2 select-none">
            04.
          </span>
          Experiencia Laboral
        </h2>

        <div className="max-w-2xl">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
