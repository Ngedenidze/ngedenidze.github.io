import { useParams, Link, Navigate } from 'react-router-dom'
import Masthead from '../components/Masthead.jsx'
import StudioFooter from '../components/StudioFooter.jsx'
import StudioShell from '../components/StudioShell.jsx'
import RailNav from '../components/RailNav.jsx'
import { GuideSection, Card, Palette, TypeScale, Principles, DoDont, Mockup, AppIconRow } from '../components/brandkit.jsx'
import { Showcase } from '../components/Devices.jsx'
import { getGuide, nextGuide } from '../data/brandGuides.jsx'

export default function BrandGuide() {
  const { slug } = useParams()
  const g = getGuide(slug)
  if (!g) return <Navigate to="/brand-book" replace />
  const next = nextGuide(slug)

  // Sequential section numbering across whatever sections this brand has.
  let count = 0
  const num = () => String(++count).padStart(2, '0')

  // Rail nav — only the sections this brand actually renders, in order.
  const railSections = [
    ['foundation', 'foundation', g.principles],
    ['logo', 'logo', g.logo],
    ['clear-space', 'clear space', g.clearspace],
    ['color', 'color', g.colors],
    ['type', 'type', g.type],
    ['graphic', 'graphic', g.icons],
    ['components', 'components', g.components],
    ['applications', 'in product', g.showcase],
    ['voice', 'voice', g.voice],
    ['rules', "do & don't", g.donts],
  ]
    .filter(([, , when]) => when)
    .map(([id, label]) => ({ id, label }))

  return (
    <StudioShell
      rail={<RailNav sections={railSections} />}
      footer={
        <>
          <nav className="case-next">
            <Link to={`/brand-book/${next.slug}`}>
              <span>next brand /</span> <b>{next.name} →</b>
            </Link>
          </nav>
          <StudioFooter note="© 2026 Nika Gedenidze" link={<Link to="/brand-book">all brands →</Link>} />
        </>
      }
    >
      <Masthead lede={`${g.name} — ${g.tagline}.`} />

      <main>
        <p className="studio-label">
          <b>brand book</b> &nbsp;<span>— {g.name}</span>
        </p>
        <h1 className="case-title">{g.title}</h1>
        <p className="case-tag">{g.tag}</p>
        <p className="case-lede">{g.intro}</p>
        <hr className="case-divider" />

        {/* Foundation */}
        {g.principles && (
          <GuideSection id="foundation" n={num()} kicker="foundation" title="Brand foundation" intro={g.foundationIntro}>
            <Principles items={g.principles} />
          </GuideSection>
        )}

        {/* Logo system */}
        {g.logo && (
          <GuideSection id="logo" n={num()} kicker="logo system" title="Lockups & variants" intro={g.logo.note}>
            <Showcase tall>
              <div className="board" style={{ marginBottom: 14 }}>
                <Card cap={<><b>Primary lockup</b>The approved lockup — use it for most marketing and product surfaces.</>}>
                  {g.logo.primary}
                </Card>
              </div>
              <div className={`board cols-${g.logo.variants.length}`}>
                {g.logo.variants.map((v) => (
                  <Card key={v.label} cap={<b>{v.label}</b>}>
                    {v.body}
                  </Card>
                ))}
              </div>
              {g.appIcon && (
                <div className="board" style={{ marginTop: 14 }}>
                  <Card cap={<><b>App icon</b>How the mark sits inside the rounded-square icon shape on a home screen.</>}>
                    <AppIconRow {...g.appIcon} />
                  </Card>
                </div>
              )}
            </Showcase>
          </GuideSection>
        )}

        {/* Clear space & sizing */}
        {g.clearspace && (
          <GuideSection id="clear-space" n={num()} kicker="clear space & sizing" title="Construction" intro={g.clearspace.note}>
            {g.clearspace.sizes && (
              <Showcase>
                <Card cap={<><b>Minimum sizes</b>Never reduce the mark below these thresholds.</>}>
                  {g.clearspace.sizes.map((s) => (
                    <div className="sizerow" key={s.label}>
                      <span className="glyph">
                        <img src={g.clearspace.markImg} alt="" style={{ height: s.scale, display: 'block' }} />
                      </span>
                      <div>
                        <b>{s.label}</b>
                        <span>{s.detail}</span>
                      </div>
                    </div>
                  ))}
                </Card>
              </Showcase>
            )}
          </GuideSection>
        )}

        {/* Color */}
        {g.colors && (
          <GuideSection id="color" n={num()} kicker="color" title="Color palette" intro={g.colorIntro}>
            <Palette colors={g.colors} />
          </GuideSection>
        )}

        {/* Typography */}
        {g.type && (
          <GuideSection id="type" n={num()} kicker="typography" title="Type system" intro={g.type.intro}>
            <Showcase>
              <Card>
                <TypeScale rows={g.type.rows} />
              </Card>
            </Showcase>
          </GuideSection>
        )}

        {/* Graphic language / iconography */}
        {g.icons && (
          <GuideSection id="graphic" n={num()} kicker="graphic language" title="Icon system" intro={g.icons.note}>
            <Showcase>
              <div className="board cols-3">
                {g.icons.items.map((ic) => (
                  <div className="stage-card iconcell" key={ic.label}>
                    {ic.svg}
                    <small>{ic.label}</small>
                  </div>
                ))}
              </div>
            </Showcase>
          </GuideSection>
        )}

        {/* Components */}
        {g.components && (
          <GuideSection id="components" n={num()} kicker="components" title="UI components" intro={g.componentsIntro}>
            {g.components}
          </GuideSection>
        )}

        {/* Applications / in product — mockup showcase.
            Only show steps that have at least one real screenshot; placeholder-only
            steps are hidden, and the whole section hides if nothing real remains. */}
        {g.showcase && (() => {
          const appSteps = g.showcase.steps.filter(
            (s) => s.devices.some((d) => d.img),
          )
          if (appSteps.length === 0) return null
          return (
            <GuideSection id="applications" n={num()} kicker="in product" title="Applications" intro={g.showcase.intro}>
              {appSteps.map((s, i) => (
                <div key={i} style={{ marginBottom: 22 }}>
                  {s.copy && <p className="case-copy">{s.copy}</p>}
                  <Showcase tall={s.devices.some((d) => d.device === 'phone')}>
                    <div className="mock-deck">
                      {s.devices.map((d, j) => (
                        <Mockup key={j} {...d} />
                      ))}
                    </div>
                  </Showcase>
                </div>
              ))}
            </GuideSection>
          )
        })()}

        {/* Voice & tone */}
        {g.voice && (
          <GuideSection id="voice" n={num()} kicker="voice & tone" title="Voice & messaging">
            <Showcase>
              <div className="board cols-2">
                <Card cap={<b>Core line</b>}>
                  <div style={{ minHeight: 96, display: 'flex', alignItems: 'center', fontSize: '1.15rem', fontWeight: 600, lineHeight: 1.4 }}>
                    {g.voice.core}
                  </div>
                </Card>
                <Card cap={<b>Plain description</b>}>
                  <div style={{ minHeight: 96, display: 'flex', alignItems: 'center' }}>
                    <p style={{ fontSize: '0.92rem', color: 'var(--ink-soft)', lineHeight: 1.6 }}>{g.voice.plain}</p>
                  </div>
                </Card>
                <Card cap={<b>Tone rules</b>}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, minHeight: 80 }}>
                    {g.voice.tone.map((t, i) => (
                      <li key={i} style={{ fontSize: '0.86rem', color: 'var(--ink-soft)', padding: '4px 0', borderBottom: i < g.voice.tone.length - 1 ? '1px solid var(--hairline)' : 'none' }}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card cap={<b>Avoid</b>}>
                  <div style={{ minHeight: 80, display: 'flex', alignItems: 'center' }}>
                    <p style={{ fontSize: '0.86rem', color: 'var(--ink-faint)', lineHeight: 1.6 }}>{g.voice.avoid}</p>
                  </div>
                </Card>
              </div>
            </Showcase>
          </GuideSection>
        )}

        {/* Do & don't */}
        {g.donts && (
          <GuideSection id="rules" n={num()} kicker="do & don't" title="Usage rules">
            <DoDont items={g.donts} />
          </GuideSection>
        )}
      </main>
    </StudioShell>
  )
}
