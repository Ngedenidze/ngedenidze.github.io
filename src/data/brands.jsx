import { Showcase, Pill, Btn } from '../components/Devices.jsx'

const Swatch = ({ bg, color, hex }) => (
  <div className="swatch" style={{ background: bg, color }}>
    <small>{hex}</small>
  </div>
)

const Lockup = ({ glyph, word, bg }) => (
  <div className="lockup">
    <span className="lockup-mark">
      <span className="lockup-glyph" style={{ background: bg }}>{glyph}</span>
      {word}
    </span>
  </div>
)

// Real-logo lockup tile (image)
const LogoLock = ({ img, bg = '#fff', invert, h = 42 }) => (
  <div className="lockup" style={{ background: bg, borderRadius: 10, padding: '24px 18px' }}>
    <img
      src={img}
      alt=""
      style={{ maxHeight: h, maxWidth: '82%', width: 'auto', objectFit: 'contain', filter: invert ? 'brightness(0) invert(1)' : undefined }}
    />
  </div>
)

const Tile = ({ children, cap }) => (
  <div className="stage-card tile">
    {children}
    <p className="tile-cap">{cap}</p>
  </div>
)

export const brands = [
  {
    id: 'wox',
    number: '01',
    name: 'wox',
    logo: '/brands/wox/logo.png',
    desc:
      'an AI-powered restaurant operating system — deliberate, editorial, and calm; serious infrastructure, not a SaaS template. Purple is the accent, never a flood.',
    board: (
      <Showcase tall>
        <div className="board" style={{ marginBottom: 14 }}>
          <Tile cap={<><b>Primary lockup</b>All-caps WOX where the O is the eye-mark — a ring with a purple center dot — over a letterspaced "POS SYSTEM" sublabel. The approved lockup for most surfaces.</>}>
            <div className="lockup" style={{ minHeight: 168 }}>
              <img src="/brands/wox/wox-long-1.png" alt="WOX primary lockup" style={{ height: 116, maxWidth: '82%', objectFit: 'contain', display: 'block' }} />
            </div>
          </Tile>
        </div>

        <div className="board" style={{ marginBottom: 14 }}>
          <Tile cap={<><b>Logo lockups</b>Four approved expressions — primary, on purple, the eye-mark alone, and reversed on near-black. Keep the eye-mark geometry; recolor only within these.</>}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, minHeight: 270 }}>
              <div style={{ display: 'grid', placeItems: 'center', background: '#FAF9F5', borderRadius: 10, padding: 20 }}>
                <img src="/brands/wox/wox-long-1.png" alt="Primary on cream" style={{ height: 44, maxWidth: '82%', objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'grid', placeItems: 'center', background: '#7C5CDC', borderRadius: 10, padding: 20 }}>
                <img src="/brands/wox/wox-long-2.png" alt="On purple" style={{ height: 60, maxWidth: '82%', objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'grid', placeItems: 'center', background: '#fff', borderRadius: 10, padding: 20, boxShadow: 'inset 0 0 0 1px rgba(20, 30, 50, 0.06)' }}>
                <img src="/brands/wox/mark.png" alt="Eye-mark" style={{ height: 56, objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'grid', placeItems: 'center', background: '#0A0A0A', borderRadius: 10, padding: 20 }}>
                <img src="/brands/wox/logo-white.png" alt="Reversed on near-black" style={{ height: 40, maxWidth: '82%', objectFit: 'contain' }} />
              </div>
            </div>
          </Tile>
        </div>

        <div className="board cols-2" style={{ marginBottom: 14 }}>
          <Tile cap={<><b>Color</b>Purple is the single accent, never a flood · near-black and charcoal carry the theatre · cream keeps surfaces calm · solid fills, no gradients.</>}>
            <div className="swatches">
              <Swatch bg="#5C49C8" color="#efe9ff" hex="#5C49C8" />
              <Swatch bg="#0A0A0A" color="#cfd4da" hex="#0A0A0A" />
              <Swatch bg="#2B2B2B" color="#cfd4da" hex="#2B2B2B" />
              <Swatch bg="#FAF9F5" color="#8a877c" hex="#FAF9F5" />
            </div>
          </Tile>
          <Tile cap={<><b>Typography</b>Urbanist across the whole system — heavy for the wordmark down to regular for UI. Weight carries hierarchy; one family, no exceptions.</>}>
            <div style={{ minHeight: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="type-row"><span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '0.04em' }}>WOX</span><em>Wordmark · Urbanist 800</em></div>
              <div className="type-row"><span style={{ fontSize: '1.05rem', fontWeight: 600 }}>One system, not seven.</span><em>Headline · Urbanist 600</em></div>
              <div className="type-row"><span style={{ fontSize: '0.92rem', fontWeight: 400, color: 'var(--ink-soft)' }}>Serious infrastructure for service.</span><em>Body · Urbanist 400</em></div>
            </div>
          </Tile>
        </div>

        <div className="board">
          <Tile cap={<><b>Components</b>Solid surfaces, generous radius, one purple action per view · status lives inside the product, never the marketing.</>}>
            <div style={{ minHeight: 150, display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
              <div className="chiprow">
                <Btn bg="#5C49C8" color="#fff">New order</Btn>
                <Btn ghost>View floor</Btn>
                <Pill bg="#EDE9FE" color="#5C49C8">Table 4 · open</Pill>
              </div>
              <div style={{ background: '#0A0A0A', borderRadius: 14, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i style={{ width: 14, height: 14, borderRadius: '50%', background: '#5C49C8', boxShadow: '0 0 0 4px rgba(92,73,200,0.25)', display: 'block' }} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#fff' }}>POS terminal</span>
                </span>
                <span style={{ fontSize: '0.78rem', color: '#cfd4da' }}>Near-black theatre, purple eye-mark, thumb-speed targets.</span>
              </div>
            </div>
          </Tile>
        </div>
      </Showcase>
    ),
  },

  {
    id: 'vellin',
    number: '02',
    name: 'vellin',
    logo: '/brands/vellin/logo.png',
    desc:
      'inventory, purchasing, and cost intelligence for multi-location restaurants — calm, premium, low-noise; hierarchy from type and tone, not color.',
    board: (
      <Showcase tall>
        <div className="board" style={{ marginBottom: 14 }}>
          <Tile cap={<><b>Primary lockup</b>An isometric cube mark beside the "Vellin" wordmark in Urbanist Thin, wide tracking. The approved horizontal lockup for most surfaces.</>}>
            <div className="lockup" style={{ minHeight: 168 }}>
              <img src="/brands/vellin/logo.png" alt="Vellin primary lockup" style={{ height: 52, maxWidth: '82%', objectFit: 'contain', display: 'block' }} />
            </div>
          </Tile>
        </div>

        <div className="board" style={{ marginBottom: 14 }}>
          <Tile cap={<><b>Logo lockups</b>Four approved expressions — primary, reversed on charcoal, the cube mark alone, and the mark on a soft purple tint. Switch lockup, never redraw.</>}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, minHeight: 270 }}>
              <div style={{ display: 'grid', placeItems: 'center', background: '#FAF9F5', borderRadius: 10, padding: 20 }}>
                <img src="/brands/vellin/logo.png" alt="Primary on warm surface" style={{ height: 34, maxWidth: '82%', objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'grid', placeItems: 'center', background: '#2B2B2B', borderRadius: 10, padding: 20 }}>
                <img src="/brands/vellin/logo-white.png" alt="Reversed on charcoal" style={{ height: 34, maxWidth: '82%', objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'grid', placeItems: 'center', background: '#fff', borderRadius: 10, padding: 20, boxShadow: 'inset 0 0 0 1px rgba(20, 30, 50, 0.06)' }}>
                <img src="/brands/vellin/mark.png" alt="Cube mark" style={{ height: 56, objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'grid', placeItems: 'center', background: '#EDE9FE', borderRadius: 10, padding: 20 }}>
                <img src="/brands/vellin/mark.png" alt="Cube mark on tint" style={{ height: 56, objectFit: 'contain' }} />
              </div>
            </div>
          </Tile>
        </div>

        <div className="board cols-2" style={{ marginBottom: 14 }}>
          <Tile cap={<><b>Color</b>A warm off-white canvas, near-black ink, and a single purple accent — one accent per screen, no gradients. Hierarchy comes from type and tone.</>}>
            <div className="swatches">
              <Swatch bg="#5C49C8" color="#efe9ff" hex="#5C49C8" />
              <Swatch bg="#2B2B2B" color="#cfd4da" hex="#2B2B2B" />
              <Swatch bg="#FAF9F5" color="#8a877c" hex="#FAF9F5" />
              <Swatch bg="#EDE9FE" color="#5C49C8" hex="#EDE9FE" />
            </div>
          </Tile>
          <Tile cap={<><b>Typography</b>Urbanist across the system — Thin and wide for the wordmark, regular for dense back-of-house data. Calm, premium, low-noise.</>}>
            <div style={{ minHeight: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="type-row"><span style={{ fontSize: '1.5rem', fontWeight: 200, letterSpacing: '0.22em' }}>VELLIN</span><em>Wordmark · Urbanist Thin</em></div>
              <div className="type-row"><span style={{ fontSize: '1.05rem', fontWeight: 600 }}>Cost you can see.</span><em>Headline · Urbanist 600</em></div>
              <div className="type-row"><span style={{ fontSize: '0.92rem', fontWeight: 400, color: 'var(--ink-soft)' }}>Built to hold up under a live kitchen.</span><em>Body · Urbanist 400</em></div>
            </div>
          </Tile>
        </div>

        <div className="board">
          <Tile cap={<><b>Components</b>White cards on warm paper, one purple action per view, status pills for the kitchen — calm under the pressure of service.</>}>
            <div style={{ minHeight: 150, display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
              <div className="chiprow">
                <Btn bg="#5C49C8" color="#fff">Send to vendor</Btn>
                <Btn ghost>Edit count</Btn>
                <Pill bg="#dff1e8" color="#157A5B">matched</Pill>
                <Pill bg="#fbeacb" color="#9a6a14">review</Pill>
              </div>
              <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(140, 130, 110, 0.18)', boxShadow: '0 6px 18px rgba(23, 23, 23, 0.06)', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i style={{ width: 22, height: 2, borderRadius: 2, background: '#5C49C8', display: 'block' }} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--ink)' }}>Total COGS</span>
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--ink-soft)' }}>Live per location, one calm number per glance.</span>
              </div>
            </div>
          </Tile>
        </div>
      </Showcase>
    ),
  },

  {
    id: 'fixify',
    logo: '/brands/fixify/logo-long.png',
    number: '03',
    name: 'fixify',
    desc:
      'an automotive marketplace connecting drivers with verified mechanics in Georgia — warm-editorial, with trust at the center and blue reserved for action.',
    board: (
      <Showcase tall>
        <div className="board" style={{ marginBottom: 14 }}>
          <Tile cap={<><b>Primary lockup</b>A location-pin + wrench mark beside the "Fixify" wordmark set in Instrument Serif. The approved lockup for most surfaces.</>}>
            <div className="lockup" style={{ minHeight: 168 }}>
              <img src="/brands/fixify/logo-long.png" alt="Fixify primary lockup" style={{ height: 64, maxWidth: '82%', objectFit: 'contain', display: 'block' }} />
            </div>
          </Tile>
        </div>

        <div className="board" style={{ marginBottom: 14 }}>
          <Tile cap={<><b>Logo lockups</b>Four approved expressions — primary, reversed on near-black, the pin mark alone, and the lockup on warm cream. Keep the mark; switch lockup, never redraw.</>}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, minHeight: 270 }}>
              <div style={{ display: 'grid', placeItems: 'center', background: '#fff', borderRadius: 10, padding: 20, boxShadow: 'inset 0 0 0 1px rgba(20, 30, 50, 0.06)' }}>
                <img src="/brands/fixify/logo-long.png" alt="Primary on white" style={{ height: 34, maxWidth: '82%', objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'grid', placeItems: 'center', background: '#14110C', borderRadius: 10, padding: 20 }}>
                <img src="/brands/fixify/logo-white.webp" alt="Reversed on near-black" style={{ height: 30, maxWidth: '82%', objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'grid', placeItems: 'center', background: '#FAF7F2', borderRadius: 10, padding: 20 }}>
                <img src="/brands/fixify/bitmap.png" alt="Pin mark" style={{ height: 56, objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'grid', placeItems: 'center', background: '#FAF7F2', borderRadius: 10, padding: 20 }}>
                <img src="/brands/fixify/logo.png" alt="Lockup on cream" style={{ height: 38, maxWidth: '82%', objectFit: 'contain' }} />
              </div>
            </div>
          </Tile>
        </div>

        <div className="board cols-2" style={{ marginBottom: 14 }}>
          <Tile cap={<><b>Color</b>Warm cream canvas, warm near-black ink, refined Fixify blue reserved for action, and a verified green that only ever means trust.</>}>
            <div className="swatches">
              <Swatch bg="#1F7DF0" color="#e8f0ff" hex="#1F7DF0" />
              <Swatch bg="#14110C" color="#cfc7ba" hex="#14110C" />
              <Swatch bg="#FAF7F2" color="#867c6e" hex="#FAF7F2" />
              <Swatch bg="#0F7A4C" color="#e6f4ec" hex="#0F7A4C" />
            </div>
          </Tile>
          <Tile cap={<><b>Typography</b>Instrument Serif for the editorial wordmark and headlines, a clean sans for UI and dense listings. Warmth up top, clarity in the product.</>}>
            <div style={{ minHeight: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="type-row"><span style={{ fontSize: '1.6rem', fontFamily: 'Georgia, "Times New Roman", serif' }}>Fixify</span><em>Wordmark · Instrument Serif</em></div>
              <div className="type-row"><span style={{ fontSize: '1.05rem', fontFamily: 'Georgia, serif' }}>What's actually wrong?</span><em>Headline · serif</em></div>
              <div className="type-row"><span style={{ fontSize: '0.92rem', fontWeight: 400, color: 'var(--ink-soft)' }}>Verified mechanics, clear quotes.</span><em>Body · sans</em></div>
            </div>
          </Tile>
        </div>

        <div className="board">
          <Tile cap={<><b>Components</b>Blue is the one action, green is the trust signal, everything else stays warm and neutral — no decorative color anywhere.</>}>
            <div style={{ minHeight: 150, display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
              <div className="chiprow">
                <Btn bg="#1F7DF0" color="#fff">Find mechanics</Btn>
                <Btn ghost>See quote</Btn>
                <Pill bg="#e6f4ec" color="#0F7A4C">Verified</Pill>
              </div>
              <div style={{ background: '#fff', borderRadius: 14, border: '1px solid rgba(20, 17, 12, 0.1)', boxShadow: '0 6px 18px rgba(20, 17, 12, 0.06)', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <i style={{ width: 34, height: 34, borderRadius: '50%', background: '#FAF7F2', boxShadow: 'inset 0 0 0 1px rgba(20,17,12,0.08)', flex: 'none', display: 'block' }} />
                <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)' }}>Mechanic · 4.9 ★</span>
                  <span style={{ fontSize: '0.74rem', color: 'var(--ink-soft)' }}>Transparent rating, written quote, clear price.</span>
                </span>
              </div>
            </div>
          </Tile>
        </div>
      </Showcase>
    ),
  },

  {
    id: 'synapse',
    logo: '/brands/synapse/logo.svg',
    number: '04',
    name: 'synapse studio',
    desc:
      'a product design & engineering studio — “Clear design. Fast engineering.” A quiet system that frames the work, with one frozen cobalt CTA.',
    board: (
      <Showcase tall>
        <div className="board" style={{ marginBottom: 14 }}>
          <Tile cap={<><b>Primary lockup</b>The continuous-line "S" with the "synapse — tech company" wordmark, in deep navy · the approved horizontal lockup for most marketing and product surfaces.</>}>
            <div className="lockup" style={{ minHeight: 168 }}>
              <img
                src="/brands/synapse/logo.svg"
                alt="Synapse primary horizontal lockup"
                style={{ height: 70, maxWidth: '82%', objectFit: 'contain', display: 'block' }}
              />
            </div>
          </Tile>
        </div>

        <div className="board" style={{ marginBottom: 14 }}>
          <Tile cap={<><b>Logo lockups</b>Four approved expressions of the mark — primary, reversed, mark-only, and on action blue. Never redraw; switch lockup, not geometry.</>}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 10,
                minHeight: 270,
              }}
            >
              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  background: '#FAF9F5',
                  borderRadius: 10,
                  padding: 20,
                }}
              >
                <img
                  src="/brands/synapse/logo.svg"
                  alt="Horizontal lockup on warm surface"
                  style={{ height: 38, maxWidth: '82%', objectFit: 'contain' }}
                />
              </div>
              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  background: '#052343',
                  borderRadius: 10,
                  padding: 20,
                }}
              >
                <img
                  src="/brands/synapse/app-mark.png"
                  alt="Reversed mark on deep navy"
                  style={{
                    height: 64,
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                  }}
                />
              </div>
              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  background: '#fff',
                  borderRadius: 10,
                  padding: 20,
                  boxShadow: 'inset 0 0 0 1px rgba(20, 30, 50, 0.06)',
                }}
              >
                <img
                  src="/brands/synapse/app-mark.png"
                  alt="Mark on white"
                  style={{ height: 64, objectFit: 'contain' }}
                />
              </div>
              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  background: '#2F4BFF',
                  borderRadius: 10,
                  padding: 20,
                }}
              >
                <img
                  src="/brands/synapse/app-mark.png"
                  alt="Mark on action blue"
                  style={{
                    height: 64,
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                  }}
                />
              </div>
            </div>
          </Tile>
        </div>

        <div className="board cols-2" style={{ marginBottom: 14 }}>
          <Tile cap={<><b>Color</b>Cobalt #2F4BFF is the frozen action CTA — identical in light and dark · navy carries identity · warm paper carries the UI · ink is near-black, never pure.</>}>
            <div className="swatches">
              <Swatch bg="#2F4BFF" color="#e8ecff" hex="#2F4BFF" />
              <Swatch bg="#052343" color="#aebccf" hex="#052343" />
              <Swatch bg="#FAF9F5" color="#8a877c" hex="#FAF9F5" />
              <Swatch bg="#171717" color="#cfcfcf" hex="#171717" />
            </div>
          </Tile>
          <Tile cap={<><b>Typography</b>Azonix for the display wordmark · DM Sans across the UI · weight does the work, italic only for emphasis within the same family.</>}>
            <div style={{ minHeight: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="type-row">
                <span style={{ fontSize: '1.55rem', fontWeight: 400, letterSpacing: '0.12em', color: '#052343' }}>SYNAPSE</span>
                <em>Display · Azonix</em>
              </div>
              <div className="type-row">
                <span style={{ fontSize: '1.05rem', fontWeight: 500, letterSpacing: '-0.01em' }}>Clear design. Fast engineering.</span>
                <em>Headline · DM Sans 500</em>
              </div>
              <div className="type-row">
                <span style={{ fontSize: '0.92rem', fontWeight: 400, color: 'var(--ink-soft)' }}>One family. Weight carries hierarchy.</span>
                <em>Body · DM Sans 400</em>
              </div>
            </div>
          </Tile>
        </div>

        <div className="board">
          <Tile cap={<><b>Components</b>White cards on warm paper · taupe hairline borders · rounded-2xl corners · soft tinted elevation · one pill CTA in frozen cobalt.</>}>
            <div style={{ minHeight: 150, display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
              <div className="chiprow">
                <Btn bg="#2F4BFF" color="#fff">Start a project</Btn>
                <Btn ghost>Read case studies</Btn>
                <Pill bg="#EEF1FF" color="#2F4BFF">Available · Q1</Pill>
              </div>
              <div
                style={{
                  background: '#fff',
                  borderRadius: 14,
                  border: '1px solid rgba(140, 130, 110, 0.18)',
                  boxShadow: '0 6px 18px rgba(23, 23, 23, 0.06)',
                  padding: '14px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i style={{ width: 22, height: 2, borderRadius: 2, background: '#2F4BFF', display: 'block' }} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--ink)' }}>Card surface</span>
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--ink-soft)' }}>
                  Warm paper background, hairline border, soft elevation.
                </span>
              </div>
            </div>
          </Tile>
        </div>
      </Showcase>
    ),
  },

  {
    id: 'rentlab',
    number: '05',
    name: 'rentlab',
    logo: '/brands/rentlab.png',
    desc:
      'a peer-to-peer rental marketplace for everyday items across Georgia — a calm, high-trust identity built on access over ownership, never real estate.',
    board: (
      <Showcase tall>
        <div className="board" style={{ marginBottom: 14 }}>
          <Tile cap={<><b>Primary lockup</b>RL monogram + Rentlab wordmark · the approved horizontal lockup for most marketing and product surfaces.</>}>
            <div className="lockup" style={{ minHeight: 168 }}>
              <img
                src="/brands/rentlab.png"
                alt="Rentlab primary horizontal lockup"
                style={{ height: 66, width: 'auto', display: 'block' }}
              />
            </div>
          </Tile>
        </div>

        <div className="board" style={{ marginBottom: 14 }}>
          <Tile cap={<><b>Logo lockups</b>Four approved expressions of the mark — primary, reversed, mark-only, and stacked. Never redraw; switch lockup, not geometry.</>}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 10,
                minHeight: 270,
              }}
            >
              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  background: '#F0FAF4',
                  borderRadius: 10,
                  padding: 20,
                }}
              >
                <img
                  src="/brands/rentlab.png"
                  alt="Horizontal lockup on mint"
                  style={{ height: 36, maxWidth: '82%', objectFit: 'contain' }}
                />
              </div>
              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  background: '#0A3D2E',
                  borderRadius: 10,
                  padding: 20,
                }}
              >
                <img
                  src="/brands/rentlab_rl_mark_white.png"
                  alt="Reversed mark on forest"
                  style={{ height: 50, objectFit: 'contain' }}
                />
              </div>
              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  background: '#fff',
                  borderRadius: 10,
                  padding: 20,
                  boxShadow: 'inset 0 0 0 1px rgba(20, 30, 50, 0.06)',
                }}
              >
                <img
                  src="/brands/rentlab_rl_mark_emerald.png"
                  alt="Emerald mark on white"
                  style={{ height: 54, objectFit: 'contain' }}
                />
              </div>
              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  background: '#F0FAF4',
                  borderRadius: 10,
                  padding: '20px 16px',
                  gap: 10,
                }}
              >
                <img
                  src="/brands/rentlab_rl_mark_emerald.png"
                  alt="Stacked lockup"
                  style={{ height: 44, objectFit: 'contain' }}
                />
                <span
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    color: '#0A3D2E',
                  }}
                >
                  rentlab
                </span>
              </div>
            </div>
          </Tile>
        </div>

        <div className="board cols-2" style={{ marginBottom: 14 }}>
          <Tile cap={<><b>Color</b>Forest Green anchors · Emerald drives every action · Amber appears only for VIP · pale-mint &amp; off-white keep surfaces calm (≈70/20/8/2).</>}>
            <div className="swatches">
              <Swatch bg="#0A3D2E" color="#cfe9dd" hex="#0A3D2E" />
              <Swatch bg="#059669" color="#eafff5" hex="#059669" />
              <Swatch bg="#F59E0B" color="#3a2406" hex="#F59E0B" />
              <Swatch bg="#F0FAF4" color="#5b7d6c" hex="#F0FAF4" />
            </div>
          </Tile>
          <Tile cap={<><b>Typography</b>FiraGO — one family for Latin and Georgian · Heavy 800 wordmark down to Regular 400 UI · Noto Sans as the safety fallback.</>}>
            <div style={{ minHeight: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="type-row"><span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Aa</span><em>Wordmark · FiraGO 800</em></div>
              <div className="type-row"><span style={{ fontSize: '1.05rem', fontWeight: 600 }}>Find what you need.</span><em>Headline · 700</em></div>
              <div className="type-row"><span style={{ fontSize: '1rem' }}>იქირავე ნივთები მარტივად</span><em>Georgian · same family</em></div>
            </div>
          </Tile>
        </div>

        <div className="board">
          <Tile cap={<><b>Components</b>Rounded, tactile marketplace UI · one forest primary action per view · amber reserved for VIP · trust pills carry status.</>}>
            <div style={{ minHeight: 150, display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center' }}>
              <div className="chiprow">
                <Btn bg="#0A3D2E" color="#fff">List an item</Btn>
                <Btn ghost>Explore rentals</Btn>
                <Btn bg="#F59E0B" color="#3a2406">VIP</Btn>
              </div>
              <div className="chiprow">
                <Pill bg="#e7f6ee" color="#059669">Nearby</Pill>
                <Pill bg="#e7f6ee" color="#059669">Verified</Pill>
                <Pill bg="#e7f6ee" color="#059669">Popular</Pill>
              </div>
              <input className="ui-field" defaultValue="Search cameras, tools, bikes…" readOnly />
            </div>
          </Tile>
        </div>
      </Showcase>
    ),
  },
]
