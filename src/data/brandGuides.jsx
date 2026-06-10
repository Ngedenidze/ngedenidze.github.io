import { IconTools, IconCamera, IconBike, IconArmchair, IconBox, IconHeart } from '@tabler/icons-react'
import { Showcase, Win, Btn, Pill } from '../components/Devices.jsx'
import { Mark, LogoTile } from '../components/brandkit.jsx'

/* ---- small render helpers ---- */

const stroke = { fill: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

// mark image + wordmark text (used by RentLab)
const MarkWord = ({ img, word, color, h = 40 }) => (
  <div className="lockup">
    <span className="lockup-mark" style={{ color }}>
      <img src={img} alt="" style={{ height: h, width: 'auto', display: 'block' }} />
      {word}
    </span>
  </div>
)

const IconImg = ({ img, bg, invert, h = 46 }) => (
  <div style={{ display: 'grid', placeItems: 'center', minHeight: 128, background: bg, borderRadius: 16, padding: 16 }}>
    <img src={img} alt="" style={{ maxHeight: h, maxWidth: '78%', width: 'auto', objectFit: 'contain', filter: invert ? 'brightness(0) invert(1)' : undefined }} />
  </div>
)

const Wordmark = ({ word, color }) => (
  <div style={{ display: 'grid', placeItems: 'center', minHeight: 128, fontSize: '1.6rem', fontWeight: 700, fontStyle: 'italic', letterSpacing: '-0.02em', color }}>
    {word}
  </div>
)

// a single product window holding a real screenshot
const Shot = ({ img, alt }) => (
  <div className="win">
    <div className="win-bar"><i /><i /><i /></div>
    <div className="shot-screen"><img src={img} alt={alt} className="shot-img" /></div>
  </div>
)

/* ============================================================= */

export const guides = [
  /* ----------------------------- RENTLAB ----------------------------- */
  {
    slug: 'rentlab',
    name: 'rentlab',
    title: 'Rentlab identity guidelines',
    tag: 'marketplace · brand system · v1.0',
    tagline: 'a peer-to-peer rental marketplace for everyday items across Georgia',
    intro:
      'A clean identity system for a peer-to-peer rental platform built around everyday items, local trust, and simple exchange. The direction is Apple-clean structure with Airbnb-like warmth — calm, high-trust, never real-estate.',
    foundationIntro:
      'Rentlab is not a real-estate brand. It is a marketplace for everyday items — tools, cameras, bikes, event gear, appliances — that people can turn into income.',
    principles: [
      { n: '01', title: 'Access, not ownership', text: 'Get temporary access to practical things without buying them.' },
      { n: '02', title: 'Local trust', text: 'Rent from nearby people, on a platform that makes the exchange feel safer.' },
      { n: '03', title: 'Everyday income', text: 'Unused items become productive assets for ordinary households.' },
      { n: '04', title: 'Simple utility', text: 'The brand should feel useful, modern, and calm — not decorative or gimmicky.' },
    ],
    logo: {
      note: 'A compact RL monogram — an R curve over an L base. Separation comes from color, never redrawing. Never add roofs, houses, or keys.',
      primary: <MarkWord img="/brands/rentlab_rl_mark_emerald.png" word="Rentlab" color="#0A3D2E" h={46} />,
      variants: [
        { label: 'App icon', body: <IconImg img="/brands/rentlab_rl_mark_white.png" bg="#0A3D2E" /> },
        { label: 'Wordmark', body: <Wordmark word="Rentlab" color="#0A3D2E" /> },
        { label: 'Emerald on mint', body: <IconImg img="/brands/rentlab_rl_mark_emerald.png" bg="#F0FAF4" /> },
      ],
    },
    appIcon: { img: '/brands/rentlab_rl_mark_white.png', bg: '#0A3D2E' },
    clearspace: {
      note: 'The logo needs quiet space — keep surrounding UI, copy, or partner marks outside a clear-space zone equal to the height of the L base. Never reduce the monogram so far that the gap between the R curve and the L base disappears.',
      markImg: '/brands/rentlab_rl_mark_emerald.png',
      sizes: [
        { label: 'Digital icon', detail: '24 px minimum', scale: 22 },
        { label: 'App icon / avatar', detail: '48 px minimum', scale: 30 },
        { label: 'Print mark', detail: '8 mm minimum', scale: 38 },
        { label: 'Full lockup', detail: '120 px wide minimum', scale: 46 },
      ],
    },
    colorIntro:
      'Emerald is the active rental/action color; Forest Green anchors. Target ratio: ≈70% off-white / pale-mint surfaces, 20% forest / slate structure, 8% emerald actions, 2% amber for VIP only.',
    colors: [
      { name: 'Forest Green', hex: '#0A3D2E', role: 'Primary / anchor' },
      { name: 'Emerald', hex: '#059669', role: 'Action / rental' },
      { name: 'Soft Sage', hex: '#5FAF72', role: 'Secondary green' },
      { name: 'Pale Mint', hex: '#F0FAF4', role: 'Page tint' },
      { name: 'Off-white', hex: '#F8FAFC', role: 'Main background' },
      { name: 'Slate Ink', hex: '#0F172A', role: 'Text / structure' },
      { name: 'Muted Gray', hex: '#64748B', role: 'Secondary text' },
      { name: 'Amber', hex: '#F59E0B', role: 'VIP / premium only' },
    ],
    type: {
      intro: 'FiraGO works for both English and Georgian — modern, highly legible, with enough warmth for a consumer marketplace. Noto Sans + Noto Sans Georgian are the safety fallback.',
      rows: [
        { sample: 'Aa', spec: 'Wordmark · FiraGO Heavy 800', style: { fontSize: '1.7rem', fontWeight: 800, letterSpacing: '-0.02em' } },
        { sample: 'Find what you need.', spec: 'Headline · Bold 700', style: { fontSize: '1.1rem', fontWeight: 700 } },
        { sample: 'Rent out what you don’t use.', spec: 'Subhead · SemiBold 600', style: { fontSize: '0.98rem', fontWeight: 600 } },
        { sample: 'იქირავე ნივთები მარტივად', spec: 'Georgian · same family', style: { fontSize: '1rem' } },
        { sample: 'Body and UI copy, neutral and readable.', spec: 'Body / UI · Regular 400', style: { fontSize: '0.9rem' } },
      ],
    },
    icons: {
      note: 'Show practical object access, not housing. Thin 2px line icons, round caps, rounded cards, small marketplace cues. Avoid sharp cyber-tech geometry.',
      items: [
        { label: 'Tools', svg: <IconTools size={30} stroke={2} color="#059669" /> },
        { label: 'Cameras', svg: <IconCamera size={30} stroke={2} color="#059669" /> },
        { label: 'Bikes', svg: <IconBike size={30} stroke={2} color="#059669" /> },
        { label: 'Furniture', svg: <IconArmchair size={30} stroke={2} color="#059669" /> },
        { label: 'Gear', svg: <IconBox size={30} stroke={2} color="#059669" /> },
        { label: 'Saved', svg: <IconHeart size={30} stroke={2} color="#059669" /> },
      ],
    },
    componentsIntro:
      'A clean marketplace: calm, high-trust, easy to scan. One forest primary action per view; amber only for VIP.',
    components: (
      <Showcase>
        <Win>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', border: '1px solid var(--hairline)', borderRadius: 999, marginBottom: 20, color: 'var(--ink-faint)', fontSize: '0.85rem' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="#059669" style={stroke}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
            Search cameras, tools, bikes, party gear…
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Btn bg="#0A3D2E" color="#fff">List an item</Btn>
            <Btn ghost>Explore rentals</Btn>
            <Btn bg="#F59E0B" color="#3a2406">VIP</Btn>
            <Pill bg="#e7f6ee" color="#059669">Nearby</Pill>
            <Pill bg="#e7f6ee" color="#059669">Verified</Pill>
          </div>
        </Win>
      </Showcase>
    ),
    showcase: {
      intro: 'How Rentlab shows up across the marketplace, listings, and trust surfaces. Drop final screens into the frames below.',
      steps: [
        { copy: 'Landing & marketplace — search, categories, listings near you.', devices: [{ device: 'browser', label: 'Marketplace landing' }] },
        { copy: 'Listing detail and the rental request flow.', devices: [{ device: 'phone', label: 'Listing detail' }, { device: 'phone', label: 'Request flow' }] },
      ],
    },
    voice: {
      core: (<><span style={{ color: 'var(--ink)' }}>Find what you need.</span>{' '}<span style={{ color: '#059669' }}>Rent out what you don’t use.</span></>),
      plain: 'Rent everyday items from people nearby, or list your unused items to earn money.',
      tone: ['Useful, clear, human, local, calm', 'CTAs: Browse rentals · List an item · Message owner', 'No hype, no jargon, no real-estate framing'],
      avoid: 'House rental, property management, luxury assets, crypto-like language, overpromising income.',
    },
    donts: [
      { ok: true, label: 'Use approved color separation' },
      { ok: true, label: 'Keep the clear-space zone' },
      { ok: true, label: 'Use white on dark' },
      { ok: false, label: 'Don’t stretch the mark' },
      { ok: false, label: 'Don’t add house or roof cues' },
      { ok: false, label: 'Don’t use random gradients' },
    ],
  },

  /* ----------------------------- WOX ----------------------------- */
  {
    slug: 'wox',
    name: 'wox',
    title: 'WOX identity guidelines',
    tag: 'restaurant OS · brand system',
    tagline: 'turning restaurant POS data into operational intelligence',
    intro:
      'An AI-powered restaurant operating system that unifies POS, inventory, suppliers, multi-location, and an AI assistant in one. The identity is deliberate, editorial, and calm — it must read as serious infrastructure, not a SaaS template.',
    foundationIntro: 'The visual identity optimizes for deliberate, editorial, calm, confident, regional (Georgia / Caucasus) — never playful, never “vibrant SaaS purple”.',
    principles: [
      { n: '01', title: 'One system, not seven', text: 'POS, inventory, suppliers, team, and analytics live in a single platform.' },
      { n: '02', title: 'Serious infrastructure', text: 'The brand reads as infrastructure, not a SaaS template — deliberate and editorial.' },
      { n: '03', title: 'Accent, never flood', text: 'Purple appears as the accent only — headline italic, icon, CTA — never solid blocks.' },
      { n: '04', title: 'Proof, not promise', text: 'UI screenshots are proof; photography carries emotion — never mix the two in one panel.' },
    ],
    logo: {
      note: 'All-caps WOX wordmark where the O is the eye-mark — a thick ring with a purple center dot — over a letterspaced “POS SYSTEM” sublabel. Keep the eye-mark geometry intact; recolor only within approved variants.',
      primary: <LogoTile img="/brands/wox/logo.png" bg="#faf9f5" h={54} />,
      variants: [
        { label: 'Eye-mark', body: <IconImg img="/brands/wox/mark.png" bg="#faf9f5" /> },
        { label: 'On dark', body: <IconImg img="/brands/wox/logo-white.png" bg="#0a0a0a" h={40} /> },
        { label: 'On brand tint', body: <IconImg img="/brands/wox/logo.png" bg="#f1f0eb" h={40} /> },
      ],
    },
    appIcon: { img: '/brands/wox/mark.png', bg: '#FAF9F5' },
    colorIntro:
      'Solid surfaces only — no gradients. Cream warmth, near-black theatre, and a single purple accent that never floods. Status colors live in the app, not the marketing site.',
    colors: [
      { name: 'Purple', hex: '#5C49C8', role: 'Brand accent (accent only)' },
      { name: 'Cream', hex: '#FAF9F5', role: 'Page background' },
      { name: 'Near-black', hex: '#0A0A0A', role: 'Ink / dark sections' },
      { name: 'Card dark', hex: '#151515', role: 'Cards on dark' },
      { name: 'Text', hex: '#2B2B2B', role: 'Body text on light' },
      { name: 'Muted', hex: '#626A78', role: 'Secondary text' },
      { name: 'Success', hex: '#16A34A', role: 'Success (in-app)' },
      { name: 'Error', hex: '#DC2626', role: 'Error (in-app)' },
    ],
    type: {
      intro: 'One typeface only — Urbanist (variable). The signature move is large-light + small-dense: headlines at Light/ExtraLight, labels small and SemiBold. font-bold (700) is never used.',
      rows: [
        { sample: 'Aa', spec: 'Display · Urbanist Light 300', style: { fontSize: '1.7rem', fontWeight: 300, letterSpacing: '-0.022em' } },
        { sample: 'One system, not seven.', spec: 'Headline · Light, italic accent', style: { fontSize: '1.05rem', fontWeight: 300 } },
        { sample: 'WOX INTELLIGENCE', spec: 'Eyebrow · SemiBold 600 · 0.32em', style: { fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.32em' } },
        { sample: 'Schedule demo', spec: 'Button · SemiBold 600 · 0.04em', style: { fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.04em' } },
      ],
    },
    componentsIntro:
      'Large radii (28–36px) on cards, full-pill CTAs, Tabler icons at stroke 1.7. The purple primary CTA carries a soft glow; a white variant inverts on dark.',
    components: (
      <Showcase>
        <Win>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', color: '#5C49C8', marginBottom: 14 }}>WOX INTELLIGENCE</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            <Btn bg="#5C49C8" color="#fff">Schedule demo →</Btn>
            <Btn ghost>See pricing</Btn>
            <Pill bg="#efe9ff" color="#5C49C8">Multi-location</Pill>
          </div>
        </Win>
      </Showcase>
    ),
    showcase: {
      intro: 'How WOX shows up across the landing site, the POS terminal, and operator apps. Real assets are wired in; placeholders mark where final screens go.',
      steps: [
        { copy: 'The marketing surface — serious infrastructure, not a SaaS template.', devices: [{ device: 'browser', img: '/brands/wox/og.png', label: 'Landing / social' }] },
        { copy: 'The POS terminal and product screens — UI as proof.', devices: [{ device: 'browser', img: '/brands/wox/pos.png', label: 'POS screen' }] },
        { copy: 'Operator and vendor apps on mobile.', devices: [{ device: 'phone', label: 'Operator app' }, { device: 'tablet', label: 'Vendor portal' }] },
      ],
    },
    voice: {
      core: (<><span style={{ color: 'var(--ink)' }}>One system,</span>{' '}<span style={{ color: '#5C49C8', fontStyle: 'italic' }}>not seven.</span></>),
      plain: 'Turning restaurant POS data into operational intelligence.',
      tone: ['Deliberate, editorial, calm, confident', 'Headlines are two-part with an italic accent', 'CTAs are verb phrases — never “Get started” or “Learn more”'],
      avoid: 'Backend jargon (multi-tenant, .NET, JWT), “all-in-one”, stacked “real-time”, vibrant SaaS purple floods, gradients, emoji.',
    },
    donts: [
      { ok: true, label: 'Purple as accent only' },
      { ok: true, label: 'Solid surfaces, no gradients' },
      { ok: true, label: 'Keep the eye-mark geometry' },
      { ok: false, label: 'Don’t use font-bold (700)' },
      { ok: false, label: 'Don’t flood purple in blocks' },
      { ok: false, label: 'Don’t mix photo + UI in one panel' },
    ],
  },

  /* ----------------------------- VELLIN ----------------------------- */
  {
    slug: 'vellin',
    name: 'vellin',
    title: 'Vellin identity guidelines',
    tag: 'back-of-house OS · brand system',
    tagline: 'inventory, purchasing, and cost intelligence for multi-location restaurants',
    intro:
      'Calm, premium, low-noise UI where hierarchy comes from typography and tonal contrast — not heavy borders, shadows, or saturated color. It feels iOS-native and “soft UI” without skeuomorphism.',
    foundationIntro: 'A warm off-white canvas, near-black ink, and a single purple accent — the core palette identity for a tool used under pressure.',
    principles: [
      { n: '01', title: 'Calm & premium', text: 'Hierarchy comes from type and tone, not borders, shadows, or saturated color.' },
      { n: '02', title: 'One accent per screen', text: 'A single purple accent against warm neutral and near-black ink.' },
      { n: '03', title: 'Soft UI, no skeuomorphism', text: 'Pillowy radii and tonal elevation — iOS-native, never glossy.' },
      { n: '04', title: 'Numbers lead', text: 'Oversized display numerals with muted suffixes; counts and costs are first-class.' },
    ],
    logo: {
      note: 'An isometric cube mark with the “Vellin” wordmark in Urbanist Thin, wide tracking. Lockups sit on the dark-gray #2B2B2B brand surface; purple primary, white on dark.',
      primary: <LogoTile img="/brands/vellin/logo.png" bg="#FAF9F5" h={46} />,
      variants: [
        { label: 'App icon', body: <IconImg img="/brands/vellin/mark.png" bg="#2B2B2B" /> },
        { label: 'On dark', body: <IconImg img="/brands/vellin/logo-white.png" bg="#2B2B2B" h={40} /> },
        { label: 'On light', body: <IconImg img="/brands/vellin/logo.png" bg="#fff" h={40} /> },
      ],
    },
    appIcon: { img: '/brands/vellin/mark.png', bg: '#2B2B2B' },
    colorIntro:
      'A warm off-white canvas, near-black ink, and a single purple accent. No gradients, no heavy shadows, one accent per screen.',
    colors: [
      { name: 'Purple', hex: '#5C49C8', role: 'Primary accent' },
      { name: 'Warm white', hex: '#FAF9F5', role: 'App background' },
      { name: 'Dark gray', hex: '#2B2B2B', role: 'Ink / logo surface / CTA' },
      { name: 'Strong ink', hex: '#111111', role: 'Headings' },
      { name: 'Muted', hex: '#626A78', role: 'Secondary text' },
      { name: 'Purple tint', hex: '#EDE9FE', role: 'Selected / badges' },
      { name: 'Success', hex: '#16A34A', role: 'Success' },
      { name: 'Error', hex: '#DC2626', role: 'Error' },
    ],
    type: {
      intro: 'Urbanist (variable), one family. Weight and color set hierarchy, not many sizes. Thin/ExtraLight for the wordmark and hero; oversized numerals for KPIs.',
      rows: [
        { sample: 'Vellin', spec: 'Wordmark · Urbanist Thin, wide tracking', style: { fontSize: '1.6rem', fontWeight: 200, letterSpacing: '0.08em' } },
        { sample: 'Aa', spec: 'Display · Urbanist 300', style: { fontSize: '1.6rem', fontWeight: 300 } },
        { sample: 'Counts, purchasing, cost.', spec: 'Body · Regular 400', style: { fontSize: '1rem' } },
        { sample: '128 /100', spec: 'KPI · oversized + muted suffix', style: { fontSize: '1.3rem', fontWeight: 600 } },
      ],
    },
    componentsIntro:
      'Pillowy cards (16–24px radius), hairline borders, minimal shadows. A dark-gray #2B2B2B primary CTA (uppercase, wide tracking) with subtle tint hovers.',
    components: (
      <Showcase>
        <Win>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            <Btn bg="#2B2B2B" color="#fff">CREATE PO</Btn>
            <Btn ghost>Edit count</Btn>
            <Pill bg="#ECFDF5" color="#0F766E">approved</Pill>
            <Pill bg="#FEF9C3" color="#8A5A00">pending</Pill>
            <Pill bg="#EDE9FE" color="#5C49C8">offline</Pill>
          </div>
        </Win>
      </Showcase>
    ),
    showcase: {
      intro: 'Vellin across the web admin and the chef’s mobile app. Real mockups are wired in; phone screens are placeholders to provide.',
      steps: [
        { copy: 'Web admin and mobile, calm and legible.', devices: [{ device: 'browser', img: '/brands/vellin/mockup.png', label: 'Product' }] },
        { copy: 'Social / brand card.', devices: [{ device: 'browser', img: '/brands/vellin/og.png', label: 'OG card' }] },
        { copy: 'Chef mobile app — fast offline counts.', devices: [{ device: 'phone', label: 'Counts' }, { device: 'phone', label: 'Purchase orders' }] },
      ],
    },
    voice: {
      core: <span style={{ color: 'var(--ink)' }}>Calm, premium, low-noise.</span>,
      plain: 'Inventory, purchasing, and cost intelligence for multi-location restaurants.',
      tone: ['Hierarchy from type and tone', 'One accent per screen', 'Never emojis — Lucide icons only'],
      avoid: 'Gradients, heavy shadows, thick borders, saturated fills, multi-color progress bars, emoji.',
    },
    donts: [
      { ok: true, label: 'One accent per screen' },
      { ok: true, label: 'Tonal elevation over shadows' },
      { ok: true, label: 'Warm off-white, not pure white' },
      { ok: false, label: 'Don’t use gradients or heavy shadows' },
      { ok: false, label: 'Don’t use emojis' },
      { ok: false, label: 'Don’t ship the placeholder logo.svg' },
    ],
  },

  /* ----------------------------- FIXIFY ----------------------------- */
  {
    slug: 'fixify',
    name: 'fixify',
    title: 'Fixify identity guidelines',
    tag: 'automotive marketplace · brand system',
    tagline: 'find an auto mechanic easily — ratings, reviews, and booking, only on Fixify',
    intro:
      'A premium, warm-editorial marketplace for Georgian drivers — verified mechanics, transparent quotes, and trust at the center. Blue is a sharp action accent against warm neutrals, not a generic tech-blue SaaS look.',
    foundationIntro: 'Verification and trust are the core brand pillar. The whole system is built to feel dependable and transparent at a glance.',
    principles: [
      { n: '01', title: 'Trust at the center', text: '“Verified by Fixify”, transparent quotes, ratings and reviews — safety first.' },
      { n: '02', title: 'Warm editorial', text: 'A cream canvas and serif display — deliberately not generic tech-blue SaaS.' },
      { n: '03', title: 'Blue means action', text: 'Fixify blue is reserved for the one action; warm neutrals carry everything else.' },
      { n: '04', title: 'Bilingual by default', text: 'Georgian-first copy with full English parity.' },
    ],
    logo: {
      note: 'A location-pin + wrench mark with the “Fixify” wordmark. The wordmark is set in Instrument Serif; the square pin mark doubles as the app icon.',
      primary: <LogoTile img="/brands/fixify/logo.png" bg="#fff" h={48} />,
      variants: [
        { label: 'App icon', body: <IconImg img="/brands/fixify/bitmap.png" bg="#fff" /> },
        { label: 'On dark', body: <IconImg img="/brands/fixify/logo-white.webp" bg="#14110c" h={36} /> },
        { label: 'On cream', body: <IconImg img="/brands/fixify/logo.png" bg="#f4eee3" h={40} /> },
      ],
    },
    appIcon: { img: '/brands/fixify/bitmap.png', bg: '#fff' },
    colorIntro:
      'A warm cream canvas, near-black warm ink, and a refined Fixify blue reserved for actions. A three-tier semantic system: blue = action, green = verified, orange = fast/soon, red = cancelled.',
    colors: [
      { name: 'Fixify Blue', hex: '#1F7DF0', role: 'Action' },
      { name: 'Cream', hex: '#FAF7F2', role: 'Background' },
      { name: 'Warm Ink', hex: '#14110C', role: 'Text / dark UI' },
      { name: 'Sand', hex: '#F4EEE3', role: 'Sunken surface' },
      { name: 'Verified', hex: '#0F7A4C', role: 'Success / verified' },
      { name: 'Warm', hex: '#FF8B3A', role: 'Fast / due-soon' },
      { name: 'Danger', hex: '#C63030', role: 'Error / cancelled' },
      { name: 'Muted', hex: '#867C6E', role: 'Captions' },
    ],
    type: {
      intro: 'Instrument Serif for display (italic for emphasis), Manrope for body and UI, and TBC Contractica for Georgian. Oversized serif numerals for scores and odometers.',
      rows: [
        { sample: 'What’s actually wrong?', spec: 'Display · Instrument Serif', style: { fontFamily: 'Georgia, serif', fontSize: '1.35rem' } },
        { sample: 'Aa', spec: 'Body / UI · Manrope', style: { fontSize: '1.5rem', fontWeight: 600 } },
        { sample: '4.9', spec: 'Score · Instrument Serif 64px', style: { fontFamily: 'Georgia, serif', fontSize: '2rem' } },
        { sample: 'რა ნამდვილად სჭირდება?', spec: 'Georgian · TBC Contractica', style: { fontSize: '1rem' } },
      ],
    },
    componentsIntro:
      '999px pills, 12–14px button radius, dashed internal dividers. A dark-ink “book now” CTA, a blue primary, and soft warm shadows.',
    components: (
      <Showcase>
        <Win>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            <Btn bg="#14110C" color="#fff">Book now</Btn>
            <Btn bg="#1F7DF0" color="#fff">Find mechanics</Btn>
            <Pill bg="#e6f4ec" color="#0F7A4C">Verified</Pill>
            <Pill bg="#fff1e3" color="#9a5212">Fast</Pill>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: '#0F7A4C' }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#0F7A4C', display: 'inline-block' }} />4 open now</span>
          </div>
        </Win>
      </Showcase>
    ),
    showcase: {
      intro: 'Fixify across the marketplace, mechanic detail, and partner onboarding. Real assets wired in; app screens are placeholders to provide.',
      steps: [
        { copy: 'Social / brand card.', devices: [{ device: 'browser', img: '/brands/fixify/og.png', label: 'OG card' }] },
        { copy: 'The marketplace — browse mechanic listings and locate them on the map.', devices: [{ device: 'browser', img: '/brands/fixify/product-screenshot.png', label: 'Marketplace map view', alt: 'Fixify marketplace with mechanic listings beside a map of Georgia' }] },
        { copy: 'Driver app — discover, book, manage your garage.', devices: [{ device: 'phone', label: 'Discover map' }, { device: 'phone', label: 'Mechanic detail' }] },
      ],
    },
    voice: {
      core: (<><span style={{ color: 'var(--ink)' }}>What’s </span><span style={{ fontStyle: 'italic', color: '#1F7DF0' }}>actually</span><span style={{ color: 'var(--ink)' }}> wrong?</span></>),
      plain: 'Find a trusted mechanic, see a written quote, and book — only on Fixify.',
      tone: ['Trust-forward (“Verified by Fixify”)', 'Conversational and diagnostic', 'Georgian-first, English parity'],
      avoid: 'Generic tech-blue SaaS framing, hype, hidden-fee language.',
    },
    donts: [
      { ok: true, label: 'Blue for action only' },
      { ok: true, label: 'Warm cream, not white' },
      { ok: true, label: 'Serif display + sans body' },
      { ok: false, label: 'Don’t use the stale #2563EB blue' },
      { ok: false, label: 'Don’t lose Georgian parity' },
      { ok: false, label: 'Don’t crowd the mark' },
    ],
  },

  /* ----------------------------- SYNAPSE ----------------------------- */
  {
    slug: 'synapse',
    name: 'synapse studio',
    title: 'Synapse identity guidelines',
    tag: 'product studio · brand system',
    tagline: 'turning complexity into clarity through design, technology, and intelligence',
    intro:
      'A product design and engineering studio: “Clear design. Fast engineering.” Calm-confidence, anti-fluff, KPI-driven. A warm off-white UI with a single cobalt action color, a deep-navy logo identity, and a geometric Azonix wordmark.',
    foundationIntro: 'The studio frames the work; it never competes with it. Concise, outcome-led, calm.',
    principles: [
      { n: '01', title: 'Clarity first', text: '“Fewer slides, more signal.” Cut the fluff.' },
      { n: '02', title: 'Design in context', text: 'Every choice fits the roadmap.' },
      { n: '03', title: 'Keep momentum', text: 'Rituals and clear metrics — ship fast without endless decks.' },
      { n: '04', title: 'Recede for the work', text: 'The studio is the frame; client work leads.' },
    ],
    logo: {
      note: 'A continuous-line interlocking “S” with the “SYNAPSE — TECH COMPANY” wordmark, in deep navy #052343. On dark surfaces the mark inverts to white.',
      primary: <LogoTile img="/brands/synapse/mark.png" bg="#fff" h={70} />,
      variants: [
        { label: 'Wordmark', body: <IconImg img="/brands/synapse/logo.svg" bg="#fff" h={30} /> },
        { label: 'On dark', body: <IconImg img="/brands/synapse/mark.png" bg="#0B0B0D" invert h={64} /> },
        { label: 'On surface', body: <IconImg img="/brands/synapse/mark.png" bg="#FAF9F5" h={64} /> },
      ],
    },
    appIcon: { img: '/brands/synapse/app-mark.png', bg: '#052343', invert: true },
    colorIntro:
      'Two palettes: a warm off-white UI with a single frozen cobalt CTA, and a deep-navy identity. The button blue #2F4BFF is identical in light and dark.',
    colors: [
      { name: 'Cobalt', hex: '#2F4BFF', role: 'Action / CTA (frozen)' },
      { name: 'Navy', hex: '#052343', role: 'Logo / identity' },
      { name: 'Off-white', hex: '#FAF9F5', role: 'Surface' },
      { name: 'Ink', hex: '#171717', role: 'Headings' },
      { name: 'Body', hex: '#404040', role: 'Body text' },
      { name: 'Taupe line', hex: '#8C826E', role: 'Borders (low alpha)' },
      { name: 'Periwinkle', hex: '#7C8CFF', role: 'Dark-mode accent' },
      { name: 'Near-black', hex: '#0B0B0D', role: 'Dark surface' },
    ],
    type: {
      intro: 'Urbanist for UI and body, Source Serif 4 for long-form, JetBrains Mono for code, and Azonix (all-caps geometric) for the display wordmark. Light weights, tight negative tracking.',
      rows: [
        { sample: 'SYNAPSE', spec: 'Wordmark · Azonix, tight', style: { fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.04em' } },
        { sample: 'Aa', spec: 'UI / body · Urbanist', style: { fontSize: '1.6rem', fontWeight: 400 } },
        { sample: 'Clear design. Fast engineering.', spec: 'Headline · light, tight tracking', style: { fontSize: '1.05rem', fontWeight: 300, letterSpacing: '-0.02em' } },
        { sample: 'const ship = true', spec: 'Code · JetBrains Mono', style: { fontFamily: 'var(--font-mono)', fontSize: '0.95rem' } },
      ],
    },
    componentsIntro:
      'Fully-rounded pills, 24px cards, soft layered shadows. The cobalt #2F4BFF filled CTA is the one constant; secondary is an outline with a trailing arrow.',
    components: (
      <Showcase>
        <Win>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            <Btn bg="#2F4BFF" color="#fff">Start a brief</Btn>
            <Btn ghost>Our work ↗</Btn>
            <Pill bg="#eef0ff" color="#2F4BFF">Design</Pill>
            <Pill bg="#eef0ff" color="#2F4BFF">Engineering</Pill>
          </div>
        </Win>
      </Showcase>
    ),
    showcase: {
      intro: 'Synapse across its own site, brand collateral, and client work. Real assets wired in; client screens are placeholders to provide.',
      steps: [
        { copy: 'The studio’s own brand card.', devices: [{ device: 'browser', img: '/brands/synapse/og.png', label: 'OG card' }] },
        { copy: 'Brand collateral — the embossed mark.', devices: [{ device: 'browser', img: '/brands/synapse/stationery.png', label: 'Stationery' }] },
        { copy: 'Selected client work, shown on device.', devices: [{ device: 'tablet', label: 'Case study' }, { device: 'phone', label: 'Mobile' }] },
      ],
    },
    voice: {
      core: <span style={{ color: 'var(--ink)' }}>Clear design. Fast engineering.</span>,
      plain: 'Turning complexity into clarity through design, technology, and intelligence.',
      tone: ['Concise, anti-fluff, KPI-driven', 'Outcome-led, calm confidence', '“Fewer slides, more signal.”'],
      avoid: 'Buzzwords, endless decks, decorative fluff.',
    },
    donts: [
      { ok: true, label: 'Cobalt CTA stays #2F4BFF' },
      { ok: true, label: 'Light weights, tight tracking' },
      { ok: true, label: 'Invert the mark on dark' },
      { ok: false, label: 'Don’t recolor the navy mark' },
      { ok: false, label: 'Don’t outshine client work' },
      { ok: false, label: 'Don’t go bold/heavy on headlines' },
    ],
  },
]

export const getGuide = (slug) => guides.find((g) => g.slug === slug)
export const nextGuide = (slug) => {
  const i = guides.findIndex((g) => g.slug === slug)
  return guides[(i + 1) % guides.length]
}
