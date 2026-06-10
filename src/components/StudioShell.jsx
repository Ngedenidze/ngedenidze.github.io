/**
 * The paper + floating white column frame shared by every studio page.
 * By default the left rail is a decorative tick-mark column; pass `rail`
 * (e.g. the landing page's <RailNav/>) to make it a functional section nav.
 */
export default function StudioShell({ children, footer, rail }) {
  return (
    <div className="studio">
      <div className="studio-shell">
        {rail ?? (
          <div className="studio-rail" aria-hidden="true">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>
        )}

        <div className="studio-inner">{children}</div>

        {footer}
      </div>
    </div>
  )
}
