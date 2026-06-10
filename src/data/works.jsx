import {
  Showcase, Win, Phone, Tablet,
  Line, Pill, Btn, Brand, MockH, MockLabel, Input, MockBtn, Table, TableRow,
} from '../components/Devices.jsx'
import { Mockup } from '../components/brandkit.jsx'

/**
 * Every work entry — drives both the landing list and the /work/:slug pages.
 * `steps[].panel` returns the light-blue Showcase stage for that step.
 */
export const works = [
  {
    slug: 'wox',
    number: '01',
    name: 'WOX',
    href: 'https://wox.ge',
    role: 'Chief Architect · Product Vision · Brand Design',
    period: '2025 — Present',
    tech: '.NET 8 · React 19 · React Native · Electron · PostgreSQL · SignalR · OpenAI',
    title: 'Restaurant operating system',
    tag: 'pos · web · mobile · ai',
    description:
      'Defined the product vision, system architecture, and brand direction for an AI-powered restaurant operating system spanning POS, inventory, purchasing, supplier workflows, analytics, and an operational AI assistant.',
    lede:
      'As chief architect, I defined the product vision, system architecture, and brand direction for WOX — an AI-powered restaurant operating system spanning POS, inventory, purchasing, supplier workflows, and operational intelligence.',
    homePanel: (
      <Showcase tall>
        <img
          className="home-shot home-shot-bare"
          src="/brands/wox/wox-mockup.png"
          alt="WOX POS terminal on a tablet"
        />
      </Showcase>
    ),
    steps: [
      {
        copy: (
          <>
            <b>One system across four surfaces.</b> POS terminal, mobile app, web
            dashboard, and supplier portal all run on the same tenant model and
            live operational data.
          </>
        ),
        panel: (
          <Showcase tall>
            <div className="mock-deck">
              <Mockup
                device="browser"
                img="/brands/wox/pos.png"
                label="POS terminal"
                alt="WOX point of sale interface"
              />
              <Mockup
                device="phone"
                img="/brands/wox/mobile-app-phone.png"
                label="Operator mobile app"
                alt="WOX operator mobile application"
              />
              <Mockup
                device="tablet"
                img="/brands/wox/vendor-portal-tablet.png"
                label="Vendor portal"
                alt="WOX vendor portal on tablet"
              />
            </div>
          </Showcase>
        ),
      },
      {
        copy: (
          <>
            <b>Service, inventory, and purchasing stay in sync.</b> Orders hit the
            POS, stock moves in real time, and purchasing workflows react from the
            same source of truth instead of disconnected tools.
          </>
        ),
        panel: (
          <Showcase tall>
            <div className="mock-deck">
              <Mockup
                device="browser"
                img="/brands/wox/pos.png"
                label="Quick order — every tap moves stock in real time"
                alt="WOX point of sale quick order screen"
              />
            </div>
          </Showcase>
        ),
      },
      {
        copy: (
          <>
            <b>An AI layer grounded in real operations.</b> WOX turns POS,
            inventory, and purchasing data into answers, reorder suggestions, and
            action plans that managers can actually use during service.
          </>
        ),
        panel: (
          <Showcase tall>
            <div className="mock-deck">
              <Mockup
                device="browser"
                img="/brands/wox/wox-ai.webp"
                label="WOX intelligence"
                alt="WOX AI and operational intelligence section"
              />
            </div>
          </Showcase>
        ),
      },
    ],
  },

  {
    slug: 'vellin',
    number: '02',
    name: 'Vellin',
    href: 'https://vellinapp.com',
    role: 'CTO, Co-founder & Founding Engineer',
    period: 'November 2025 — Present',
    tech: 'React · React Native · Next.js · TypeScript · .NET · PostgreSQL · AI',
    title: 'Enterprise back-of-house OS',
    tag: 'web · mobile · ai',
    description:
      'Building an AI-powered back-of-house operating system for restaurants that unifies inventory, purchasing, vendor collaboration, and analytics. Modular architecture with offline-first counts, auto-generated purchase orders, AI invoice extraction, and real-time COGS visibility.',
    lede:
      'Vellin unifies inventory, purchasing, vendor collaboration, and analytics into one calm operating system — designed to hold up under the pressure of a live kitchen, online or off.',
    homePanel: (
      <Showcase tall>
        <img
          className="home-shot home-shot-bare"
          src="/brands/vellin/app-mockup.png"
          alt="Vellin mobile app on a phone"
        />
      </Showcase>
    ),
    steps: [
      {
        copy: (
          <>
            <b>Counts that work offline.</b> Walk-ins have no signal, so counting is
            local-first — every tap is instant, and the ledger syncs the moment a
            connection returns.
          </>
        ),
        panel: (
          <Showcase tall>
            <Phone>
              <Brand color="#157A5B">vellin</Brand>
              <MockH>Cooler · count</MockH>
              <Table>
                {[0, 1, 2, 3].map((i) => (
                  <TableRow key={i}>
                    <Line s /><Line m={i % 2 === 0} l={i % 2 === 1} /><Line s /><Line s />
                  </TableRow>
                ))}
              </Table>
              <MockBtn style={{ background: '#157A5B' }}>Save count</MockBtn>
            </Phone>
          </Showcase>
        ),
      },
      {
        copy: (
          <>
            <b>Purchase orders, generated.</b> Par levels and live counts turn into
            vendor-ready POs automatically — the buyer reviews, not retypes.
          </>
        ),
        panel: (
          <Showcase>
            <Win>
              <Table>
                <TableRow head><Line s /><Line m /><Line s /><Line s /></TableRow>
                {[0, 1, 2, 3].map((i) => (
                  <TableRow key={i}><Line s /><Line l={i % 2 === 0} m={i % 2 === 1} /><Line s /><Line s /></TableRow>
                ))}
              </Table>
              <div style={{ display: 'flex', gap: 10, marginTop: 18, justifyContent: 'flex-end' }}>
                <Btn ghost>Edit</Btn>
                <Btn bg="#157A5B" color="#fff">Send to vendor</Btn>
              </div>
            </Win>
          </Showcase>
        ),
      },
      {
        copy: (
          <>
            <b>Invoices read themselves.</b> A photographed invoice is parsed
            line-by-line — quantities, prices, and pack sizes land structured, ready
            to reconcile.
          </>
        ),
        panel: (
          <Showcase>
            <Win>
              <div className="mock-row" style={{ alignItems: 'stretch' }}>
                <div style={{ flex: 1, minWidth: 140, background: '#f4f6f9', borderRadius: 8, minHeight: 150, display: 'grid', placeItems: 'center', color: 'var(--ink-faint)', fontSize: '0.72rem' }}>
                  invoice.jpg
                </div>
                <div style={{ flex: 1.3, minWidth: 160, display: 'flex', flexDirection: 'column', gap: 11, justifyContent: 'center' }}>
                  <div className="mock-tr" style={{ border: 'none', padding: 0 }}><Pill bg="#dff1e8" color="#157A5B">matched</Pill><Line l /><Line s /></div>
                  <div className="mock-tr" style={{ border: 'none', padding: 0 }}><Pill bg="#dff1e8" color="#157A5B">matched</Pill><Line m /><Line s /></div>
                  <div className="mock-tr" style={{ border: 'none', padding: 0 }}><Pill bg="#fbeacb" color="#9a6a14">review</Pill><Line l /><Line s /></div>
                </div>
              </div>
            </Win>
          </Showcase>
        ),
      },
      {
        copy: (
          <>
            <b>Costs you can see.</b> Real-time COGS and price-variance roll up from
            the same counts and invoices — no spreadsheet, no lag.
          </>
        ),
        panel: (
          <Showcase tall>
            <Tablet>
              <MockH style={{ textAlign: 'left' }}>Food cost · this week</MockH>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', height: 120, paddingTop: 10 }}>
                {[60, 80, 95, 70, 55, 78, 64].map((h, i) => (
                  <div key={i} style={{ flex: 1, background: i === 2 ? '#E8A13C' : '#157A5B', height: `${h}%`, borderRadius: '5px 5px 0 0' }} />
                ))}
              </div>
            </Tablet>
          </Showcase>
        ),
      },
    ],
  },

  {
    slug: 'fixify',
    number: '03',
    name: 'Fixify',
    href: 'https://fixify.ge',
    role: 'Co-founder & Founding Engineer',
    period: 'July 2025 — November 2025',
    tech: 'GraphQL · Prisma · TypeScript · PostgreSQL',
    title: 'Automotive marketplace',
    tag: 'web · mobile · marketplace',
    description:
      'Co-founded and built an automotive marketplace in Georgia from scratch as Founding Engineer. Scaled to 5,000+ monthly service requests, connecting car owners with a network of 150+ verified mechanics.',
    lede:
      'Built from scratch in Georgia as founding engineer — a marketplace that scaled to 5,000+ monthly service requests, connecting car owners with a network of 150+ verified mechanics.',
    homePanel: (
      <Showcase tall>
        <img
          className="home-shot home-shot-bare"
          src="/brands/fixify/app-screenshot.png"
          alt="Fixify mobile app on two phones"
        />
      </Showcase>
    ),
    steps: [
      {
        copy: (
          <>
            <b>Book a mechanic in minutes.</b> Drivers describe the problem, pick a
            time, and get matched — no calls, no haggling, no guessing who to trust.
          </>
        ),
        panel: (
          <Showcase tall>
            <Phone>
              <Brand color="#2F6DF0">fixify</Brand>
              <MockH>Request a fix</MockH>
              <MockLabel>Vehicle</MockLabel>
              <Input />
              <MockLabel>What's wrong?</MockLabel>
              <Input style={{ height: 54 }} />
              <MockBtn>Find mechanics</MockBtn>
            </Phone>
          </Showcase>
        ),
      },
      {
        copy: (
          <>
            <b>A network you can trust.</b> Verified mechanics, transparent ratings,
            and clear pricing — the matching layer that made the platform scale.
          </>
        ),
        panel: (
          <Showcase>
            <Win>
              <Table>
                {['4.9', '4.8', '4.7'].map((r, i) => (
                  <TableRow key={i}>
                    <i style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--showcase-deep)', display: 'block' }} />
                    <Line l={i !== 1} m={i === 1} />
                    <Pill>{r} ★</Pill>
                    <Line s />
                  </TableRow>
                ))}
              </Table>
            </Win>
          </Showcase>
        ),
      },
    ],
  },

  {
    slug: 'synapse',
    number: '04',
    name: 'Synapse Studio',
    href: 'https://synapse.ge',
    role: 'Co-founder & Founding Engineer',
    period: 'January 2025 — November 2025',
    tech: 'Full-Stack Development · Product Engineering',
    title: 'Product studio',
    tag: 'strategy · architecture · engineering',
    description:
      'Co-founded a product studio and served as Founding Engineer across multiple startup projects. Led technical architecture and implementation for early-stage ventures.',
    lede:
      'Co-founded a product studio and served as founding engineer across multiple startup projects — leading technical architecture and implementation for early-stage ventures.',
    homePanel: (
      <Showcase tall>
        <div className="stage-card ds-board">
          <div className="ds-grid">
            <div>
              <div className="ds-stage" style={{ background: '#FAF9F5' }}>
                <img
                  src="/brands/synapse/logo.svg"
                  alt="Synapse wordmark"
                  style={{ maxHeight: 24, maxWidth: '78%' }}
                />
              </div>
              <p className="ds-cap"><b>Wordmark</b>azonix display</p>
            </div>
            <div>
              <div className="ds-stage" style={{ background: '#FAF9F5' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 34,
                    padding: '0 18px',
                    borderRadius: 999,
                    background: '#2F4BFF',
                    color: '#fff',
                    fontSize: '0.74rem',
                    fontWeight: 500,
                  }}
                >
                  Start a project
                </span>
              </div>
              <p className="ds-cap"><b>Button</b>pill · fixed brand blue</p>
            </div>
            <div>
              <div className="ds-stage" style={{ background: '#F4F4F1' }}>
                <span
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    width: '78%',
                    padding: '14px 14px 12px',
                    background: '#fff',
                    borderRadius: 14,
                    border: '1px solid rgba(140, 130, 110, 0.18)',
                    boxShadow: '0 6px 18px rgba(23, 23, 23, 0.06)',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <i style={{ width: 22, height: 2, borderRadius: 2, background: '#2F4BFF', display: 'block' }} />
                    <i style={{ width: '34%', height: 7, borderRadius: 4, background: '#171717', opacity: 0.85, display: 'block' }} />
                  </span>
                  <i style={{ width: '88%', height: 6, borderRadius: 4, background: '#E4E2DB', display: 'block' }} />
                  <i style={{ width: '62%', height: 6, borderRadius: 4, background: '#E4E2DB', display: 'block' }} />
                </span>
              </div>
              <p className="ds-cap"><b>Card</b>paper surface · hairline · soft elevation</p>
            </div>
            <div>
              <div className="ds-stage" style={{ background: '#FAF9F5', padding: 12 }}>
                <span style={{ display: 'flex', gap: 6, width: '100%', justifyContent: 'center' }}>
                  {['#2F4BFF', '#171717', '#FAF9F5', '#7C8CFF'].map((c) => (
                    <i
                      key={c}
                      style={{
                        width: 30,
                        height: 44,
                        borderRadius: 6,
                        background: c,
                        display: 'block',
                        boxShadow: 'inset 0 0 0 1px rgba(20, 30, 50, 0.08)',
                      }}
                    />
                  ))}
                </span>
              </div>
              <p className="ds-cap"><b>Color</b>paper · ink · brand blue</p>
            </div>
            <div>
              <div className="ds-stage" style={{ background: '#FAF9F5' }}>
                <span style={{ textAlign: 'center', lineHeight: 1 }}>
                  <span style={{ fontSize: '1.7rem', color: '#171717', letterSpacing: '-0.02em' }}>Aa</span>
                  <small style={{ display: 'block', fontSize: '0.6rem', color: '#5F5F5F', marginTop: 6 }}>
                    DM Sans
                  </small>
                </span>
              </div>
              <p className="ds-cap"><b>Typography</b>one family · weight does the work</p>
            </div>
            <div>
              <div className="ds-stage" style={{ background: '#0B0B0D' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 30,
                    padding: '0 16px',
                    borderRadius: 999,
                    background: '#17171B',
                    color: '#7C8CFF',
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    boxShadow: 'inset 0 0 0 1px rgba(124, 140, 255, 0.35)',
                  }}
                >
                  Dark mode
                </span>
              </div>
              <p className="ds-cap"><b>Theme</b>dark twin · periwinkle accent</p>
            </div>
          </div>
        </div>
      </Showcase>
    ),
    steps: [
      {
        copy: (
          <>
            <b>Architecture for early ventures.</b> A repeatable foundation — auth,
            data, and API layers — so each new product ships fast without
            accumulating debt.
          </>
        ),
        panel: (
          <Showcase tall>
            <Win>
              <div className="mock-row" style={{ gap: 14 }}>
                {['client', 'api', 'services', 'data'].map((t, i, a) => (
                  <span key={t} style={{ display: 'contents' }}>
                    <Pill bg="#eef1f5" color="var(--ink-soft)">{t}</Pill>
                    {i < a.length - 1 && <span style={{ color: 'var(--ink-faint)' }}>→</span>}
                  </span>
                ))}
              </div>
              <Table style={{ marginTop: 22 }}>
                {[0, 1, 2].map((i) => (
                  <TableRow key={i}><Line s /><Line l={i !== 1} m={i === 1} /><Line m={i === 0} l={i === 1} s={i === 2} /><Line s /></TableRow>
                ))}
              </Table>
            </Win>
          </Showcase>
        ),
      },
    ],
  },

  {
    slug: 'redhawk',
    number: '05',
    name: 'Redhawk Research LLC',
    href: 'https://redhawkresearch.com',
    role: 'Software Engineer Intern',
    period: 'May 2024 — September 2024',
    tech: 'Prisma · Apollo Server · GraphQL · Node.js',
    title: 'Admin portal',
    tag: 'graphql · prisma · apollo',
    description:
      'Designed and built a full-stack admin portal using Prisma, Apollo Server, and GraphQL — user registration, permission inspection, and activity tracking — cutting database response time 30% and lifting performance 50%.',
    lede:
      'Designed and built a full-stack admin portal — user registration, permission inspection, and activity tracking — cutting database response time by 30% and lifting system performance by 50%.',
    homePanel: (
      <Showcase tall>
        <img
          className="home-shot home-shot-bare"
          style={{ maxWidth: 720 }}
          src="/brands/redhawk/product-preview.png"
          alt="Redhawk admin portal interface"
        />
      </Showcase>
    ),
    steps: [
      {
        copy: (
          <>
            <b>One portal to run it all.</b> Registration, roles, and activity in a
            single surface — built on an efficient GraphQL data layer.
          </>
        ),
        panel: (
          <Showcase tall>
            <Win>
              <div className="mock-row" style={{ justifyContent: 'flex-start', gap: 10, marginBottom: 18 }}>
                <Pill bg="#eef1f5" color="var(--ink)">Users</Pill>
                <Pill bg="transparent" color="var(--ink-faint)">Roles</Pill>
                <Pill bg="transparent" color="var(--ink-faint)">Activity</Pill>
              </div>
              <Table>
                <TableRow head><Line s /><Line m /><Line s /><Line s /></TableRow>
                <TableRow><Line s /><Line l /><Pill bg="#dff1e8" color="#157A5B">active</Pill><Line s /></TableRow>
                <TableRow><Line s /><Line m /><Pill bg="#dff1e8" color="#157A5B">active</Pill><Line s /></TableRow>
                <TableRow><Line s /><Line l /><Pill bg="#eef1f5" color="var(--ink-faint)">invited</Pill><Line s /></TableRow>
              </Table>
            </Win>
          </Showcase>
        ),
      },
    ],
  },

  {
    slug: 'aerodefense',
    number: '06',
    name: 'AeroDefense',
    href: 'https://aerodefense.tech',
    role: 'Web Development Intern',
    period: 'June 2024 — August 2024',
    tech: 'WordPress · JavaScript · HTML · CSS · SEO',
    title: 'Marketing site & components',
    tag: 'web · wordpress · seo',
    description:
      "Engineered and maintained 15+ pages on the company's main site with custom plugins and accessible, responsive components — lifting engagement 40% and conversion 25%, with SEO baked in.",
    lede:
      "Engineered and maintained 15+ pages on the company's main site — custom plugins and components for responsive, accessible design that lifted engagement 40% and conversion 25%.",
    homePanel: (
      <Showcase tall>
        <img
          className="home-shot home-shot-bare"
          style={{ maxWidth: 640 }}
          src="/brands/aerodefense/mockup.png"
          alt="AeroDefense website on a desktop display"
        />
      </Showcase>
    ),
    steps: [
      {
        copy: (
          <>
            <b>Fifteen pages, one system.</b> Reusable, accessible components kept
            every page consistent — and search-optimized from the markup up.
          </>
        ),
        panel: (
          <Showcase tall>
            <Win>
              <div className="mock-line l" style={{ height: 18, width: '55%', margin: '0 auto 14px', background: 'var(--showcase-deep)' }} />
              <div className="mock-line m" style={{ margin: '0 auto 24px' }} />
              <div className="board cols-3" style={{ gap: 12 }}>
                {[0, 1, 2].map((i) => (
                  <div key={i} style={{ background: '#f4f6f9', borderRadius: 8, minHeight: 80 }} />
                ))}
              </div>
              <MockBtn style={{ width: 140, margin: '22px auto 0' }}>Learn more</MockBtn>
            </Win>
          </Showcase>
        ),
      },
    ],
  },

]

export const getWork = (slug) => works.find((w) => w.slug === slug)
export const nextWork = (slug) => {
  const i = works.findIndex((w) => w.slug === slug)
  return works[(i + 1) % works.length]
}
