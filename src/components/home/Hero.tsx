import { COMPANY, IMAGES } from '../../constants/site'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <video
        src={IMAGES.hero}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/80 to-blue-900/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pb-32">
        <p className="section-label mb-6">PT Khairani Sinergi Nusantara</p>
        <h1 className="font-display text-[clamp(2.75rem,10vw,7rem)] font-bold leading-[0.95] tracking-tight text-balance">
          <span className="sr-only">{COMPANY.name} — </span>
          <span className="block">Engineering Safety.</span>
          <span className="block text-amber-500">Powering Nusantara.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-white-soft/80">
          Premier boiler inspection, maintenance, repair, and retubing services for
          power generation facilities across Indonesia.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={COMPANY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-amber-500 px-8 py-3 font-heading text-sm font-semibold text-blue-950 hover:bg-amber-400"
          >
            Partner With Us
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/20 px-8 py-3 font-heading text-sm font-medium hover:border-amber-500/50 hover:text-amber-400"
          >
            Our Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-white-soft/50">
          <span>Scroll</span>
          <div className="h-10 w-px bg-amber-500/50" />
        </div>
      </div>
    </section>
  )
}
