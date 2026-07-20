import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COMPANY, NAV_LINKS } from '../../constants/site'

export function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()

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

  return (
    <header
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link to="/" className="font-heading text-xl font-bold tracking-tight">
          <span className="text-amber-500">{COMPANY.shortName}</span>
          <span className="hidden text-white-soft/80 sm:inline"> — Sinergi Nusantara</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`font-heading text-sm font-medium hover:text-amber-400 ${
                  location.pathname === path ? 'text-amber-500' : 'text-white-soft/70'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={COMPANY.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-amber-500 px-4 py-2 font-heading text-sm font-semibold text-blue-950 hover:bg-amber-400"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  )
}
