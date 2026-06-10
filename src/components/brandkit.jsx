import Reveal from './Reveal.jsx'
import { Showcase } from './Devices.jsx'

/* The mark: a real image, or a CSS glyph square. */
export function Mark({ img, imgAlt, glyph, bg, color = '#fff', size = 40 }) {
  if (img) {
    return <img src={img} alt={imgAlt} style={{ height: size, width: 'auto', display: 'block' }} />
  }
  return (
    <span
      className="lockup-glyph"
      style={{ background: bg, color, width: size, height: size, fontSize: size * 0.5, borderRadius: size * 0.26 }}
    >
      {glyph}
    </span>
  )
}

/* Mark + wordmark lockup. */
export function Lockup({ mark, word, wordColor, size = 40 }) {
  return (
    <div className="lockup">
      <span className="lockup-mark" style={{ color: wordColor }}>
        <Mark {...mark} size={size} />
        {word}
      </span>
    </div>
  )
}

/* One section of a brand guide: kicker label, heading, intro, body. */
export function GuideSection({ n, kicker, title, intro, children, id }) {
  return (
    <Reveal as="section" className="studio-block" id={id}>
      <p className="studio-label">
        <b>{n}</b> &nbsp;<span>— {kicker}</span>
      </p>
      {title && <h2 className="guide-h">{title}</h2>}
      {intro && <p className="studio-desc">{intro}</p>}
      {children}
    </Reveal>
  )
}

/* A white card on the blue stage. */
export function Card({ children, cap, style }) {
  return (
    <div className="stage-card tile" style={style}>
      {children}
      {cap && <p className="tile-cap">{cap}</p>}
    </div>
  )
}

/* App-icon presentation: the mark inside rounded-square icon tiles,
   shown at descending sizes like a home-screen icon set. */
export function AppIconRow({ img, bg, invert, pad = 0.2 }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 26,
        alignItems: 'flex-end',
        justifyContent: 'center',
        minHeight: 128,
        flexWrap: 'wrap',
        padding: '10px 0',
      }}
    >
      {[96, 64, 44].map((s) => (
        <span
          key={s}
          style={{
            width: s,
            height: s,
            borderRadius: Math.round(s * 0.224),
            background: bg,
            display: 'grid',
            placeItems: 'center',
            flex: 'none',
            boxShadow:
              'inset 0 0 0 1px rgba(20, 30, 50, 0.07), 0 8px 22px rgba(20, 30, 50, 0.14)',
          }}
        >
          <img
            src={img}
            alt=""
            style={{
              width: Math.round(s * (1 - pad * 2)),
              height: Math.round(s * (1 - pad * 2)),
              objectFit: 'contain',
              filter: invert ? 'brightness(0) invert(1)' : undefined,
            }}
          />
        </span>
      ))}
    </div>
  )
}

/* Full color palette grid. */
export function Palette({ colors }) {
  return (
    <Showcase>
      <div className="palette">
        {colors.map((c) => (
          <div className="palette-chip" key={c.hex + c.name}>
            <div className="palette-color" style={{ background: c.hex }} />
            <b>{c.name}</b>
            <code>{c.hex}</code>
            {c.role && <span>{c.role}</span>}
          </div>
        ))}
      </div>
    </Showcase>
  )
}

/* Type scale rows. */
export function TypeScale({ rows }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {rows.map((r, i) => (
        <div className="type-row" key={i} style={{ padding: '12px 0' }}>
          <span style={r.style}>{r.sample}</span>
          <em>{r.spec}</em>
        </div>
      ))}
    </div>
  )
}

/* Principle / foundation cards. */
export function Principles({ items, cols = 'cols-2' }) {
  return (
    <Showcase>
      <div className={`guide-grid ${cols}`}>
        {items.map((p, i) => (
          <div className="stage-card tile principle" key={i}>
            <span className="num">{p.n}</span>
            <b>{p.title}</b>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </Showcase>
  )
}

/* A logo on a tile background; `invert` whitens a dark mark for reversed use. */
export function LogoTile({ img, bg = '#fff', invert, h = 46 }) {
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: 132, background: bg, borderRadius: 10, padding: 18 }}>
      <img
        src={img}
        alt=""
        style={{ maxHeight: h, maxWidth: '82%', width: 'auto', objectFit: 'contain', display: 'block', filter: invert ? 'brightness(0) invert(1)' : undefined }}
      />
    </div>
  )
}

/* A device frame holding a real screenshot, or a labeled placeholder. */
export function Mockup({ device = 'browser', img, label, alt }) {
  const screen = img ? (
    <img src={img} alt={alt || label} className="shot-img" />
  ) : (
    <div className="shot-ph">
      <span>{label}</span>
      <small>screenshot placeholder — provide image</small>
    </div>
  )

  if (device === 'phone') return <div className="phone"><div className="phone-screen shot-screen">{screen}</div></div>
  if (device === 'tablet') return <div className="tablet"><div className="tablet-screen shot-screen">{screen}</div></div>
  return (
    <div className="win">
      <div className="win-bar"><i /><i /><i /></div>
      <div className="shot-screen">{screen}</div>
    </div>
  )
}

/* Do & don't checklist. */
export function DoDont({ items, cols = 'cols-3' }) {
  return (
    <Showcase>
      <div className={`guide-grid ${cols}`}>
        {items.map((d, i) => (
          <div className="stage-card tile" key={i}>
            <div className="dont">
              <span className={`ic ${d.ok ? 'yes' : 'no'}`}>{d.ok ? '✓' : '✕'}</span>
              <b>{d.label}</b>
            </div>
          </div>
        ))}
      </div>
    </Showcase>
  )
}
