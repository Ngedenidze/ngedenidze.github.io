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
      <Showcase>
        <div className="board cols-2">
          <Tile cap={<><b>Primary lockup</b>All-caps WOX where the O is the eye-mark — ring + purple center dot — over a “POS SYSTEM” sublabel.</>}>
            <LogoLock img="/brands/wox/logo.png" bg="#faf9f5" h={48} />
          </Tile>
          <Tile cap={<><b>Color</b>Purple accent · cream warmth · near-black theatre · one typeface (Urbanist), solid surfaces, no gradients.</>}>
            <div className="swatches">
              <Swatch bg="#5C49C8" color="#efe9ff" hex="#5C49C8" />
              <Swatch bg="#0A0A0A" color="#cfd4da" hex="#0A0A0A" />
              <Swatch bg="#2B2B2B" color="#cfd4da" hex="#2B2B2B" />
              <Swatch bg="#FAF9F5" color="#8a877c" hex="#FAF9F5" />
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
      <Showcase>
        <div className="board cols-2">
          <Tile cap={<><b>Primary lockup</b>An isometric cube mark with the “Vellin” wordmark in Urbanist Thin, wide tracking.</>}>
            <LogoLock img="/brands/vellin/logo.png" bg="#FAF9F5" h={42} />
          </Tile>
          <Tile cap={<><b>Color</b>A warm off-white canvas, near-black ink, and a single purple accent — one accent per screen, no gradients.</>}>
            <div className="swatches">
              <Swatch bg="#5C49C8" color="#efe9ff" hex="#5C49C8" />
              <Swatch bg="#2B2B2B" color="#cfd4da" hex="#2B2B2B" />
              <Swatch bg="#FAF9F5" color="#8a877c" hex="#FAF9F5" />
              <Swatch bg="#EDE9FE" color="#5C49C8" hex="#EDE9FE" />
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
      <Showcase>
        <div className="board cols-2">
          <Tile cap={<><b>Primary lockup</b>A location-pin + wrench mark with the “Fixify” wordmark set in Instrument Serif.</>}>
            <LogoLock img="/brands/fixify/logo.png" bg="#fff" h={46} />
          </Tile>
          <Tile cap={<><b>Color</b>Warm cream canvas, warm near-black ink, refined Fixify blue for action, and a verified green for trust.</>}>
            <div className="swatches">
              <Swatch bg="#1F7DF0" color="#e8f0ff" hex="#1F7DF0" />
              <Swatch bg="#14110C" color="#cfc7ba" hex="#14110C" />
              <Swatch bg="#FAF7F2" color="#867c6e" hex="#FAF7F2" />
              <Swatch bg="#0F7A4C" color="#e6f4ec" hex="#0F7A4C" />
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
      <Showcase>
        <div className="board cols-2">
          <Tile cap={<><b>Primary lockup</b>A continuous-line interlocking “S” with the “SYNAPSE — TECH COMPANY” wordmark, in deep navy.</>}>
            <LogoLock img="/brands/synapse/logo.svg" bg="#fff" h={76} />
          </Tile>
          <Tile cap={<><b>Color</b>A warm off-white UI with a single frozen cobalt CTA, against a deep-navy logo identity.</>}>
            <div className="swatches">
              <Swatch bg="#2F4BFF" color="#e8ecff" hex="#2F4BFF" />
              <Swatch bg="#052343" color="#aebccf" hex="#052343" />
              <Swatch bg="#FAF9F5" color="#8a877c" hex="#FAF9F5" />
              <Swatch bg="#171717" color="#cfcfcf" hex="#171717" />
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
          <Tile cap={<><b>Primary lockup</b>An RL monogram — R curve over an L base · separation comes from color, never redrawing · no roofs, keys, or house cues.</>}>
            <div className="lockup">
              <span className="lockup-mark">
                <img
                  src="/brands/rentlab.png"
                  alt="Rentlab RL monogram"
                  style={{ height: 56, width: 'auto', display: 'block' }}
                />
                rentlab
              </span>
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

        <div className="board cols-2">
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
          <Tile cap={<><b>Voice &amp; tone</b>Useful, local, calm · no hype, no real-estate framing.</>}>
            <div style={{ minHeight: 150, display: 'flex', alignItems: 'center' }}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                <span style={{ color: 'var(--ink)' }}>Find what you need.</span>{' '}
                <span style={{ color: '#059669' }}>Rent out what you don't use.</span> Rent everyday items from people nearby — or list the ones you don't use to earn.
              </p>
            </div>
          </Tile>
        </div>
      </Showcase>
    ),
  },
]
