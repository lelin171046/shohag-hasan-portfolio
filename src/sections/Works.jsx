import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import SectionImage from '../components/SectionImage'
import site from '../data/site'

export default function Works({ onOpenProject }) {
  const { projects, content } = site
  const copy = content.works
  const [activeFilter, setActiveFilter] = useState(copy.allLabel)

  const filters = useMemo(
    () =>
      copy.filters.filter(
        (filter) => filter === copy.allLabel || projects.some((project) => project.category === filter),
      ),
    [copy.allLabel, copy.filters, projects],
  )

  const visibleProjects =
    activeFilter === copy.allLabel
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="works" className="section section--base" aria-labelledby="works-heading">
      <div className="section__container">
        <SectionHeading
          id="works-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <SectionImage image={site.sectionImages.works} className="section-image--banner" />

        {filters.length > 1 && (
          <div className="filter-row" role="group" aria-label={content.a11y.filterProjects}>
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={activeFilter === filter ? 'filter-chip is-active' : 'filter-chip'}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        {visibleProjects.length > 0 ? (
          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={onOpenProject} />
            ))}
          </div>
        ) : (
          <p className="empty-state">{copy.emptyState}</p>
        )}
      </div>
    </section>
  )
}
