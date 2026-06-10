import { Link } from 'react-router-dom'
import Masthead from '../components/Masthead.jsx'
import StudioFooter from '../components/StudioFooter.jsx'
import StudioShell from '../components/StudioShell.jsx'
import RailNav from '../components/RailNav.jsx'
import Reveal from '../components/Reveal.jsx'
import { brands } from '../data/brands.jsx'

export default function BrandBook() {
  const railSections = brands.map((b) => ({ id: b.id, label: b.name }))

  return (
    <StudioShell
      rail={<RailNav sections={railSections} />}
      footer={<StudioFooter note="© 2026 — design systems, distilled." />}
    >
      <Masthead lede="design systems and brand guidelines, distilled — the logo, color, type, and component standards behind the products I help build." />

      <main>
        {brands.map((brand) => (
          <Reveal as="section" className="studio-block" key={brand.id} id={brand.id}>
            <p className="studio-label">
              <b>brand / {brand.number}</b> &nbsp;<span>— {brand.name}</span>
            </p>
            <p className="studio-desc">{brand.desc}</p>
            {brand.board}
            <Link className="brand-more" to={`/brand-book/${brand.id}`}>
              view full guidelines →
            </Link>
          </Reveal>
        ))}

        <Reveal as="section" className="studio-block">
          <p className="studio-label"><b>brand / next</b> &nbsp;<span>— in progress</span></p>
          <p className="studio-desc">
            new guidelines land here. Each book follows the same spine: logo system,
            color, typography, components, and voice — so every brand reads
            consistently while staying unmistakably its own.
          </p>
          <div className="showcase" style={{ display: 'grid', placeItems: 'center', minHeight: 160 }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--signal-ink)' }}>add the next brand →</p>
          </div>
        </Reveal>
      </main>
    </StudioShell>
  )
}
