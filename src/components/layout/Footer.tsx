import { Link } from 'react-router-dom'
import {
  COMPANY,
  FOOTER_COLUMNS,
  FOOTER_DESCRIPTION,
  FOOTER_LEGAL_LINKS,
  FOOTER_QUICK_LINKS,
  FOOTER_SOCIAL_LINKS,
} from '../../constants/site'

function FooterLinkItem({ label, path, external }: { label: string; path: string; external?: boolean }) {
  const className = 'text-sm text-white-soft/55 transition-colors hover:text-white-soft'

  if (external || path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return (
      <a
        href={path}
        target={path.startsWith('http') ? '_blank' : undefined}
        rel={path.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {label}
      </a>
    )
  }

  return (
    <Link to={path} className={className}>
      {label}
    </Link>
  )
}

function SocialIcon({ icon }: { icon: string }) {
  if (icon === 'whatsapp') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    )
  }

  if (icon === 'email') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 7l8 5 8-5M4 7v10h16V7"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.6 4.5h10.8c.99 0 1.8.81 1.8 1.8v11.4c0 .99-.81 1.8-1.8 1.8H6.6c-.99 0-1.8-.81-1.8-1.8V6.3c0-.99.81-1.8 1.8-1.8z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 7.5h7" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-blue-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src="/favicon.svg" alt="" className="h-10 w-10 rounded-md" />
            <span className="font-heading text-lg font-bold tracking-tight">
              <span className="text-amber-500">{COMPANY.shortName}</span>
              <span className="text-white-soft/80"> — Sinergi Nusantara</span>
            </span>
          </Link>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white-soft/55">
            {FOOTER_DESCRIPTION}
          </p>
        </div>

        <div className="mt-14 grid gap-12 xl:grid-cols-[minmax(0,1fr)_18rem] xl:gap-16">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="font-heading text-sm font-semibold text-white-soft">{column.title}</p>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <FooterLinkItem {...link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 xl:sticky xl:top-24 xl:self-start">
            <aside className="rounded-2xl border border-white/10 bg-blue-900/50 p-6">
              <p className="font-heading text-sm font-semibold text-white-soft">
                For Power Plants &amp; Industry
              </p>
              <Link
                to="/contact"
                className="mt-4 flex w-full items-center justify-center rounded-xl bg-cream px-4 py-3 font-heading text-sm font-semibold text-blue-950 transition-colors hover:bg-white"
              >
                Get In Touch
              </Link>
            </aside>

            <aside className="rounded-2xl border border-white/10 bg-blue-900/50 p-6">
              <p className="font-heading text-sm font-semibold text-white-soft">Quick Links</p>
              <ul className="mt-4 space-y-3">
                {FOOTER_QUICK_LINKS.map(({ label, path }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className="text-sm text-white-soft/55 transition-colors hover:text-white-soft"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="font-heading text-sm font-semibold text-white-soft">Follow Us</p>
                <div className="mt-4 flex items-center gap-3">
                  {FOOTER_SOCIAL_LINKS.map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-blue-950/60 text-white-soft/60 transition-colors hover:border-amber-500/40 hover:text-amber-400"
                    >
                      <SocialIcon icon={icon} />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-white-soft/40 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            {FOOTER_LEGAL_LINKS.map(({ label, path }) => (
              <Link key={label} to={path} className="transition-colors hover:text-white-soft/70">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
