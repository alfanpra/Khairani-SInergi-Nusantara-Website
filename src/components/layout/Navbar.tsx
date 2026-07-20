import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COMPANY, NAV_LINKS } from '../../constants/site'

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden>
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  )
}

export function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const onScroll = () => {
      nav.classList.toggle('glass-nav', window.scrollY > 40)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header ref={navRef} className="fixed inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="group min-w-0 font-heading text-base font-bold tracking-tight sm:text-lg"
        >
          <span className="text-amber-500">{COMPANY.shortName}</span>
          <span className="hidden text-white-soft/60 transition-colors group-hover:text-white-soft/80 sm:inline">
            {' '}
            / Sinergi Nusantara
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
          {NAV_LINKS.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`relative font-heading text-[13px] font-medium uppercase tracking-[0.12em] transition-colors hover:text-amber-400 ${
                  location.pathname === path ? 'text-amber-500' : 'text-white-soft/60'
                }`}
              >
                {label}
                {location.pathname === path && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-amber-500" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={COMPANY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-sm hidden sm:inline-flex"
          >
            WhatsApp
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white-soft/80 transition-colors hover:border-amber-500/40 hover:text-amber-400 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-blue-950/95 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-24">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, path }, index) => (
              <li
                key={path}
                className="border-b border-white/10"
                style={{ animationDelay: menuOpen ? `${index * 60 + 80}ms` : undefined }}
              >
                <Link
                  to={path}
                  className={`block py-4 font-heading text-2xl font-semibold tracking-tight transition-colors ${
                    location.pathname === path ? 'text-amber-500' : 'text-white-soft/80'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-4">
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className="btn-ghost w-full"
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
