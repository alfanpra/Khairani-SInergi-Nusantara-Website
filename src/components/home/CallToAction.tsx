import { COMPANY } from '../../constants/site'

export function CallToAction() {
  return (
    <section className="reveal-up relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-blue-500 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.15),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="section-label">Get In Touch</p>
        <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4rem)] font-bold">
          Ready to Partner?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white-soft/80">
          Connect with our team for boiler inspection, maintenance, emergency
          response, or spare parts supply — available 24/7 for critical situations.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={COMPANY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-amber-500 px-10 py-4 font-heading text-sm font-bold text-blue-950 hover:bg-amber-400"
          >
            Chat on WhatsApp
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="rounded-full border border-white/20 px-10 py-4 font-heading text-sm font-semibold hover:border-amber-500/50 hover:text-amber-400"
          >
            {COMPANY.email}
          </a>
        </div>
      </div>
    </section>
  )
}
