import type { CSSProperties } from 'react'
import { COMPANY, IMAGES } from '../../constants/site'

export function Hero() {
  return (
    <section className="grain-overlay relative flex min-h-[100svh] items-end overflow-hidden">
      <video
        src={IMAGES.hero}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/85 to-blue-900/25" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 container-pad pb-28 pt-28 sm:pb-32 sm:pt-32 lg:grid-cols-12 lg:gap-12 lg:pb-32">
        <div className="lg:col-span-8">
          <div
            className="hero-enter mb-6 flex flex-wrap items-center gap-3 sm:mb-8 sm:gap-4"
            style={{ '--hero-delay': '120ms' } as CSSProperties}
          >
            <span className="section-index">01</span>
            <span className="accent-rule" />
            <p className="section-label !tracking-[0.18em] sm:!tracking-[0.22em]">{COMPANY.shortName}</p>
          </div>

          <h1 className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            <span className="sr-only">{COMPANY.name} — </span>
            <span className="hero-line">
              <span className="hero-line-inner" style={{ '--hero-delay': '280ms' } as CSSProperties}>
                Engineering Safety.
              </span>
            </span>
            <span className="hero-line">
              <span
                className="hero-line-inner text-amber-500"
                style={{ '--hero-delay': '420ms' } as CSSProperties}
              >
                Powering Nusantara.
              </span>
            </span>
          </h1>

          <p
            className="hero-enter mt-6 max-w-lg text-base leading-[1.7] text-white-soft/75 sm:mt-10 sm:text-[1.05rem] sm:leading-[1.75]"
            style={{ '--hero-delay': '580ms' } as CSSProperties}
          >
            Premier boiler inspection, maintenance, repair, and retubing for power
            generation facilities across Indonesia — ASME-compliant, zero-compromise safety.
          </p>

          <div
            className="hero-enter mt-8 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4"
            style={{ '--hero-delay': '720ms' } as CSSProperties}
          >
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Partner With Us
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <a href="#services" className="btn-ghost w-full sm:w-auto">
              Our Services
            </a>
          </div>

          <div
            className="hero-enter mt-8 flex items-center gap-4 border-t border-white/10 pt-6 lg:hidden"
            style={{ '--hero-delay': '860ms' } as CSSProperties}
          >
            <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-white-soft/40">
              Coverage
            </p>
            <p className="font-heading text-lg font-bold text-amber-500">Nationwide</p>
            <p className="text-xs text-white-soft/50">24/7 emergency</p>
          </div>
        </div>

        <div
          className="hero-enter hidden lg:col-span-4 lg:flex lg:flex-col lg:items-end lg:justify-end lg:pb-2"
          style={{ '--hero-delay': '860ms' } as CSSProperties}
        >
          <div className="border-l border-white/10 pl-6 text-right">
            <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-white-soft/40">
              Coverage
            </p>
            <p className="mt-2 font-heading text-2xl font-bold text-amber-500">Nationwide</p>
            <p className="mt-1 text-sm text-white-soft/50">24/7 emergency mobilization</p>
          </div>
        </div>
      </div>

      <div
        className="hero-enter absolute bottom-6 right-4 z-10 sm:bottom-8 sm:left-6 sm:right-auto lg:left-8"
        style={{ '--hero-delay': '980ms' } as CSSProperties}
        aria-hidden="true"
      >
        <div className="flex items-center gap-3 text-[10px] font-heading font-medium uppercase tracking-[0.25em] text-white-soft/40 sm:tracking-[0.3em]">
          <div className="accent-rule-vertical hidden h-12 sm:block" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  )
}
