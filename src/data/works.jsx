import {
  Showcase, Win,
  Line, Pill, MockBtn, Table, TableRow,
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
            <b>I led with the POS as the system's heart.</b> The terminal had to
            survive thumb-speed during peak service, so I designed the tenant
            model and the core ordering flow from there outward — every other
            surface had to share its source of truth, not duplicate it.
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
            </div>
          </Showcase>
        ),
      },
      {
        copy: (
          <>
            <b>Next I scoped the operator's mobile.</b> I cut what wasn't load-bearing —
            cost of goods, low stock, the last order, the team chat — so owners
            could read the floor without opening a laptop. Deciding what
            <i> not</i> to put on the home screen was the harder problem.
          </>
        ),
        panel: (
          <Showcase tall>
            <div className="mock-deck">
              <img
                className="case-shot case-shot-phone"
                src="/brands/wox/wox-mobile.png"
                alt="WOX operator mobile application"
              />
            </div>
          </Showcase>
        ),
      },
      {
        copy: (
          <>
            <b>Then I designed the floor view.</b> The tablet table-management
            surface is built for hosts and servers, not back-office — live
            status per table, order in progress, who's where. It reads the same
            tenant data the POS writes, so service, inventory, and purchasing
            never drift.
          </>
        ),
        panel: (
          <Showcase tall>
            <div className="mock-deck">
              <img
                className="case-shot case-shot-tablet"
                src="/brands/wox/wox-ipad.png"
                alt="WOX tablet table management view"
              />
            </div>
          </Showcase>
        ),
      },
      {
        copy: (
          <>
            <b>Finally I layered the AI on real operational data.</b> Not a
            chatbot grafted on — a reasoning layer with read access to POS,
            inventory, and purchasing, so its answers are something a manager
            can act on mid-service. I owned the prompt design, the data
            grounding, and the fall-back rules.
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
                screenBg="#0A0A0A"
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
    tech: '.NET 8 · PostgreSQL · React 19 · TypeScript · React Native · SignalR · Hangfire · OpenAI',
    title: 'Enterprise back-of-house OS',
    tag: 'web · mobile · ai',
    description:
      'Designed and built an AI-powered back-of-house operating system for restaurants — count sessions and par levels, idempotent cart-to-PO purchasing, a supplier-side vendor portal, GPT-4 Vision invoice extraction, and live COGS reporting.',
    lede:
      "As CTO and founding engineer I build Vellin end-to-end — a .NET 8 + PostgreSQL backend and a React 19 + TypeScript app, joined by a generated API client, SignalR real-time, and Hangfire background jobs. 133 migrations and 133 integration tests in, and counting.",
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
            <b>I started with the model everything else stands on.</b>
            Organizations and locations first, then items, storages, count
            sessions, and a stock-movement history that every later feature
            reads from. The home screen is just the first thing to sit on top —
            Total COGS, the last order, a Vellin AI insight — scoped to the
            location you're standing in. Get the ledger wrong and nothing above
            it can be trusted.
          </>
        ),
        panel: (
          <Showcase tall>
            <img
              className="case-shot case-shot-photo"
              src="/brands/vellin/vellin-mobile.png"
              alt="Vellin operator home dashboard — Total COGS, last order, and Vellin AI insight"
            />
          </Showcase>
        ),
      },
      {
        copy: (
          <>
            <b>Next I layered purchasing on the ledger.</b> Par levels — min,
            reorder, target, preferred vendor — watch stock and suggest reorders
            on a sweep job. A cart checks out into one purchase order per vendor
            behind an idempotency key, a unique index in PostgreSQL, so a crashed
            or retried request can't double-order. Orders dispatch over email,
            WhatsApp, or SMS and move Draft → Sent → Accepted → In Delivery →
            Delivered. I owned the checkout idempotency and the status state
            machine.
          </>
        ),
        panel: (
          <Showcase>
            <div className="mock-deck">
              <Mockup
                device="browser"
                img="/brands/vellin/parts/vellin-PO.png"
                label="Purchase order detail"
                alt="Vellin purchase order detail — fulfillment status, line items, and delivery window"
              />
            </div>
          </Showcase>
        ),
      },
      {
        copy: (
          <>
            <b>Then I wired up invoice capture, once there were orders to
            reconcile against.</b> Uploads land in S3; a Hangfire job turns PDFs
            into images and parses them with a vision model against a JSON
            schema, falling back to a looser pass when the strict one fails.
            Nothing imports unreviewed — vendor, dates, terms, and every line
            item stay editable until the operator confirms. I designed it so a
            bad parse degrades to a quick correction, never a wrong import.
          </>
        ),
        panel: (
          <Showcase>
            <div className="mock-deck">
              <Mockup
                device="browser"
                img="/brands/vellin/parts/vellin-invoice.png"
                label="Review invoice"
                alt="Vellin invoice review — matched vendor, parsed fields, and editable line items before import"
              />
            </div>
          </Showcase>
        ),
      },
      {
        copy: (
          <>
            <b>From that same data, I made COGS a live query.</b> Invoices are
            the preferred cost basis, receiving records fill the gaps, and
            delivery timestamps are the last resort — computed per location with
            period-over-period deltas, no nightly job to wait on. A
            price-variance report flags where quoted and received prices drift
            apart. Real-time was a database decision, not a UI one.
          </>
        ),
        panel: (
          <Showcase>
            <div className="mock-deck">
              <Mockup
                device="browser"
                img="/brands/vellin/parts/vellin-reports.png"
                label="Reports"
                alt="Vellin reports — price variance with total price impact, items tracked, and top invoice price changes"
              />
            </div>
          </Showcase>
        ),
      },
      {
        copy: (
          <>
            <b>Finally I shipped the other side of the marketplace.</b> Suppliers
            got their own portal — separate auth, a catalog with import batches
            and price agreements, webhooks pushing order-state changes into their
            systems, and "catalog gaps": the things restaurants searched for and
            didn't find, surfaced back as suggestions. SignalR groups keep both
            sides live, pushing updates to exactly the right org, location, or
            vendor. I built and own both halves of this two-sided product.
          </>
        ),
        panel: (
          <Showcase>
            <div className="mock-deck">
              <Mockup
                device="browser"
                img="/brands/vellin/parts/vellin-supplier-portal.png"
                label="Vendor portal"
                alt="Vellin vendor portal — purchase orders with totals, delivery windows, and Gantt timeline"
              />
            </div>
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
    period: 'July 2025 to November 2025',
    tech: 'GraphQL · Prisma · TypeScript · PostgreSQL',
    title: 'Automotive marketplace',
    tag: 'web · mobile · marketplace',
    description:
      'Co-founded and engineered Fixify as Georgia\'s automotive marketplace, defining the driver request flow, mechanic discovery map, verification model, matching logic, and GraphQL/Prisma foundation behind 5,000+ monthly service requests.',
    lede:
      'As founding engineer, I turned Fixify into a working mechanic marketplace for Georgia. I defined the driver flow, built the discovery and matching systems, and helped grow the partner network to 150+ verified mechanics handling 5,000+ monthly service requests.',
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
            <b>I started with discovery and request intent.</b> Drivers needed
            to move from a map of nearby mechanics to a service request without
            feeling like they were filling out a form. I shaped the mobile flow
            around search, filters, shop cards, and a short path from problem
            to match.
          </>
        ),
        panel: (
          <Showcase tall>
            <div className="mock-deck">
              <img
                className="case-shot case-shot-fixify-mobile"
                src="/brands/fixify/mobile-product-screenshot.png"
                alt="Fixify mobile marketplace map and mechanic listings"
              />
            </div>
          </Showcase>
        ),
      },
      {
        copy: (
          <>
            <b>Then I built the trust and matching layer.</b> The marketplace
            only works if the supply side is credible, so I modeled verified
            mechanics, ratings, shop profiles, distance, categories, and routing
            logic on top of a GraphQL and Prisma stack. That foundation
            supported 150+ partners and 5,000+ monthly requests.
          </>
        ),
        panel: (
          <Showcase>
            <div className="mock-deck">
              <Mockup
                device="browser"
                img="/brands/fixify/web-product-screenshot.png"
                label="Marketplace map view"
                alt="Fixify web marketplace with mechanic listings and map"
              />
            </div>
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
            <b>I codified the studio's foundation.</b> Auth, data, and API
            layers as a repeatable starter — each new client product picked it
            up and shipped in weeks, not months, without accumulating the kind
            of debt that kills small teams. The architecture is what made the
            studio sellable.
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
            <b>I designed and built the portal end-to-end.</b> Registration,
            roles, and activity in one surface, on a Prisma + Apollo GraphQL
            data layer I tuned for response time. Database calls dropped 30%
            and the portal felt 50% faster end-to-end — the team kept using
            the same query patterns after I left.
          </>
        ),
        panel: (
          <Showcase>
            <div className="mock-deck">
              <Mockup
                device="browser"
                img="/brands/redhawk/product-preview.png"
                label="Admin portal"
                alt="Redhawk admin portal — asset table with status and pending actions"
              />
            </div>
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
            <b>I built the component system the rest of the site was made of.</b>
            Fifteen-plus pages on one reusable, accessible component set —
            with SEO structural from the markup up, not bolted on after.
            Engagement lifted 40% and conversion 25% over the previous build.
          </>
        ),
        panel: (
          <Showcase>
            <div className="mock-deck">
              <Mockup
                device="browser"
                img="/brands/aerodefense/product-mockup.png"
                label="AeroDefense site"
                alt="AeroDefense AirWarden Essentials and Spectrum product pages"
              />
            </div>
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
