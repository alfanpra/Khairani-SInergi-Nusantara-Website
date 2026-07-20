import { Link } from 'react-router-dom'
import { COMPANY, FOOTER_COLUMNS, FOOTER_DESCRIPTION } from '../../constants/site'

function FooterLinkItem({ label, path, external }: { label: string; path: string; external?: boolean }) {
  const className = 'text-sm text-white-soft/50 transition-colors hover:text-white-soft/80'

  if (external || path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    const opensInNewTab = path.startsWith('http')

    return (
      <a
        href={path}
        target={opensInNewTab ? '_blank' : undefined}
        rel={opensInNewTab ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {label}
        {opensInNewTab && <span className="sr-only"> (opens in new tab)</span>}
      </a>
    )
  }

  return (
    <Link to={path} className={className}>
      {label}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-blue-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-lg">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src="/favicon.svg" alt="" className="h-8 w-8 shrink-0" />
            <span className="font-heading text-sm font-semibold text-white-soft">{COMPANY.shortName}</span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-white-soft/50">{FOOTER_DESCRIPTION}</p>
        </div>

        <nav aria-label="Footer" className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-4 sm:gap-8 lg:mt-20">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h2 className="font-heading text-sm font-semibold text-white-soft">{column.title}</h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLinkItem {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-white-soft/40">
            © {new Date().getFullYear()} {COMPANY.name}. {COMPANY.footerTagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
