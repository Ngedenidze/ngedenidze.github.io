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
      footer={<StudioFooter note="© 2026 Nika Gedenidze" />}
    >
      <Masthead lede="The design systems and brand guidelines behind the products I build — logo, color, type, and component standards, documented in one place." />

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
      </main>
    </StudioShell>
  )
}
