import { Link, useLocation } from 'react-router-dom'

/** The one site tagline, shown in the masthead on every page for parity. */
export const SITE_LEDE =
  'nika gedenidze is a software engineer crafting backend, AI, and full-stack systems — scalable products built for efficiency and automation.'

const NAV = [
  { to: '/', label: 'home', active: (p) => p === '/' || p.startsWith('/work') },
  { to: '/brand-book', label: 'brand book', active: (p) => p.startsWith('/brand-book') },
]

/**
 * Wordmark + site lede + minimal lowercase nav.
 * Top-level destinations only (home, brand book) — section navigation on the
 * landing page is handled by the left rail (see RailNav).
 */
export default function Masthead({ lede = SITE_LEDE, className }) {
  const { pathname } = useLocation()

  return (
    <header className={className}>
      <Link to="/" className="studio-mast" style={{ textDecoration: 'none' }}>
        <span className="studio-mark" />
        <span className="studio-word">
          nika gedenidze <sup>°</sup>
        </span>
      </Link>

      {lede && <p className="studio-lede">{lede}</p>}

      <nav className="studio-nav">
        {NAV.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            aria-current={item.active && item.active(pathname) ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
