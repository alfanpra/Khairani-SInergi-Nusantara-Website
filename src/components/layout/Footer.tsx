import { Link } from 'react-router-dom'
import { COMPANY, NAV_LINKS } from '../../constants/site'

export function Footer() {
  return (
    <footer className="relative border-t border-amber-500/30 bg-blue-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-heading text-2xl font-bold">
            <span className="text-amber-500">{COMPANY.shortName}</span>
          </p>
          <p className="mt-3 max-w-xs font-display text-lg italic text-white-soft/70">
            {COMPANY.footerTagline}
          </p>
        </div>

        <div>
          <p className="section-label mb-4">Quick Links</p>
          <ul className="space-y-2">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="text-sm text-white-soft/70 hover:text-amber-400"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-label mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-white-soft/70">
            <li>
              <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="hover:text-amber-400">
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-amber-400">
                {COMPANY.email}
              </a>
            </li>
            <li>{COMPANY.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-6 text-center text-xs text-white-soft/40 lg:px-8">
        © {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
      </div>
    </footer>
  )
}
