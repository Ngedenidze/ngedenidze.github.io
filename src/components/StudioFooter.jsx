import { Link } from 'react-router-dom'

export default function StudioFooter({ note = '© 2026 — design, distilled.', link }) {
  return (
    <footer className="studio-foot">
      <p>{note}</p>
      {link ?? (
        <Link to="/#work">all work →</Link>
      )}
    </footer>
  )
}
