import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home.jsx'
import BrandBook from './pages/BrandBook.jsx'
import BrandGuide from './pages/BrandGuide.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import { works } from './data/works.jsx'

/**
 * Keeps scroll position sane across navigation with smooth movement:
 *  - hash jumps land smoothly on the target section
 *  - route changes ease back to the top
 */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand-book" element={<BrandBook />} />
        <Route path="/brand-book/:slug" element={<BrandGuide />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        {/* Legacy static paths → clean routes */}
        <Route path="/brand-book/index.html" element={<Navigate to="/brand-book" replace />} />
        {works.map((w) => (
          <Route
            key={w.slug}
            path={`/work/${w.slug}.html`}
            element={<Navigate to={`/work/${w.slug}`} replace />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
