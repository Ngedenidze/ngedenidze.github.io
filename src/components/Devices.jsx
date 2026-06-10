/**
 * CSS-built device mockups and UI atoms (no images), styled by studio.css.
 * Used inside the light-blue <Showcase> stages on case-study / brand pages.
 */

export function Showcase({ tall, children, style }) {
  return (
    <div className={`showcase${tall ? ' tall' : ''}`} style={style}>
      {children}
    </div>
  )
}

export function Win({ children, style }) {
  return (
    <div className="win" style={style}>
      <div className="win-bar">
        <i />
        <i />
        <i />
      </div>
      <div className="win-body">{children}</div>
    </div>
  )
}

export function Phone({ children }) {
  return (
    <div className="phone">
      <div className="phone-screen">{children}</div>
    </div>
  )
}

export function Tablet({ children }) {
  return (
    <div className="tablet">
      <div className="tablet-screen">{children}</div>
    </div>
  )
}

/* --- atoms --- */

export const Line = ({ s, m, l, style }) => (
  <span className={`mock-line${s ? ' s' : ''}${m ? ' m' : ''}${l ? ' l' : ''}`} style={style} />
)

export const Pill = ({ children, bg, color }) => (
  <span className="ui-pill" style={{ background: bg, color }}>
    {children}
  </span>
)

export const Btn = ({ children, ghost, bg, color }) => (
  <span className={`ui-btn${ghost ? ' ghost' : ''}`} style={ghost ? undefined : { background: bg, color }}>
    {children}
  </span>
)

export const Field = ({ children }) => (
  <div className="ui-field">{children}</div>
)

export const Brand = ({ children, color }) => (
  <div className="mock-brand" style={{ color }}>
    {children}
  </div>
)

export const MockH = ({ children, style }) => (
  <div className="mock-h" style={style}>
    {children}
  </div>
)

export const MockLabel = ({ children }) => <div className="mock-label">{children}</div>
export const Input = ({ style }) => <div className="mock-input" style={style} />
export const MockBtn = ({ children, style }) => (
  <div className="mock-btn" style={style}>
    {children}
  </div>
)

export const TableRow = ({ head, children }) => (
  <div className={`mock-tr${head ? ' head' : ''}`}>{children}</div>
)
export const Table = ({ children, style }) => (
  <div className="mock-table" style={style}>
    {children}
  </div>
)
