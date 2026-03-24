import SectionWrapper from '../ui/SectionWrapper'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      className="py-24 bg-white dark:bg-slate-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-12">
          <span className="font-mono text-blue-500 text-lg mr-2 select-none">
            03.
          </span>
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
