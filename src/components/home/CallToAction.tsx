import { COMPANY } from '../../constants/site'
import { Reveal } from '../ui/Reveal'

export function CallToAction() {
  return (
    <section className="section-pad relative overflow-hidden bg-blue-800">
      <div className="absolute inset-x-0 top-0 h-1 bg-amber-500" />
      <div className="grain-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 container-pad lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className="lg:col-span-7" variant="left">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="section-index">07</span>
            <span className="accent-rule" />
            <p className="section-label">Get In Touch</p>
          </div>
          <h2 className="mt-5 font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.02em] sm:mt-6 sm:leading-[1.05]">
            Ready to Partner?
          </h2>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={120} variant="fade">
          <p className="text-base leading-[1.7] text-white-soft/70 sm:text-[1.05rem] sm:leading-[1.75]">
            Connect with our team for boiler inspection, maintenance, emergency
            response, or spare parts supply — available 24/7 for critical situations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Chat on WhatsApp
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <a href={`mailto:${COMPANY.email}`} className="btn-ghost w-full sm:w-auto">
              Send Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
