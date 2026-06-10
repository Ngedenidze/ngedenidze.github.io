import { useEffect, useState } from 'react'

const HOME_SECTIONS = [
  { id: 'work', label: 'work' },
  { id: 'brand-book', label: 'brand book' },
  { id: 'research', label: 'research' },
  { id: 'about', label: 'about' },
]

/**
 * The left tick-mark rail, repurposed as a section nav. Pass `sections`
 * ([{ id, label }]) to drive it (defaults to the landing page's sections).
 * Ticks are always visible; the active/hovered one widens, darkens, and
 * reveals its label. Clicking smooth-scrolls; a scrollspy keeps the active
 * state in sync while scrolling.
 */
export default function RailNav({ sections = HOME_SECTIONS }) {
  const [active, setActive] = useState(sections[0]?.id)
  const key = sections.map((s) => s.id).join('|')

  useEffect(() => {
    setActive(sections[0]?.id)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  const go = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', `#${id}`)
      setActive(id)
    }
  }

  return (
    <nav className="rail-nav" aria-label="Sections">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          onClick={(e) => go(e, s.id)}
          className={`rail-link${active === s.id ? ' is-active' : ''}`}
          aria-current={active === s.id ? 'true' : undefined}
        >
          <span className="rail-tick" />
          <span className="rail-name">{s.label}</span>
        </a>
      ))}
    </nav>
  )
}
