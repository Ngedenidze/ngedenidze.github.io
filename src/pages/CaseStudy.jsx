import { useParams, Link, Navigate } from 'react-router-dom'
import Masthead from '../components/Masthead.jsx'
import StudioFooter from '../components/StudioFooter.jsx'
import StudioShell from '../components/StudioShell.jsx'
import RailNav from '../components/RailNav.jsx'
import Reveal from '../components/Reveal.jsx'
import { getWork, nextWork, works } from '../data/works.jsx'

export default function CaseStudy() {
  const { slug } = useParams()
  const work = getWork(slug)
  if (!work) return <Navigate to="/" replace />

  const next = nextWork(slug)
  const last = works[works.length - 1]?.slug === slug
  const railSections = [
    { id: 'overview', label: '01 — overview' },
    ...work.steps.map((_, i) => ({
      id: `step-${i + 1}`,
      label: `${String(i + 2).padStart(2, '0')} — step ${i + 1}`,
    })),
  ]

  return (
    <StudioShell
      rail={<RailNav sections={railSections} />}
      footer={
        <>
          <nav className="case-next">
            <Link to={`/work/${next.slug}`}>
              <span>{last ? 'back to /' : 'next /'}</span> <b>{next.name.toLowerCase()} →</b>
            </Link>
          </nav>
          <StudioFooter />
        </>
      }
    >
      <Masthead />

      <main>
        <section id="overview">
          <p className="studio-label">
            <b>work / {work.number}</b> &nbsp;<span>— {work.name.toLowerCase()}</span>
          </p>
          <h1 className="case-title">{work.title}</h1>
          <p className="case-tag">{work.tag}</p>
          <p className="case-meta">
            {work.role}
            <br />
            {work.period}
            <br />
            {work.tech}
          </p>
          <p className="case-lede">{work.lede}</p>
        </section>

        {work.steps.map((step, i) => (
          <Reveal as="section" className="case-step" key={i} id={`step-${i + 1}`}>
            <p className="case-copy">{step.copy}</p>
            {step.panel}
          </Reveal>
        ))}
      </main>
    </StudioShell>
  )
}
