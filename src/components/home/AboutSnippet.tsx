import { Reveal } from '../ui/Reveal'

export function AboutSnippet() {
  return (
    <section className="section-pad bg-cream text-blue-950">
      <div className="mx-auto grid max-w-7xl gap-10 container-pad lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5" variant="right">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="section-index !text-blue-900/30">02</span>
            <span className="h-px w-10 bg-amber-500 sm:w-12" />
            <p className="section-label !text-amber-600">About KSN</p>
          </div>
          <blockquote className="mt-6 font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-[1.14] tracking-[-0.01em] text-blue-900 sm:mt-8 sm:leading-[1.12]">
            &ldquo;A trusted partner in energy maintenance — ensuring your plant
            operates safely, efficiently, and sustainably.&rdquo;
          </blockquote>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7 lg:pt-16" delay={120} variant="up">
          <p className="text-base leading-[1.75] text-blue-800/85 sm:text-[1.05rem] sm:leading-[1.85]">
            PT Khairani Sinergi Nusantara specializes in inspection, maintenance,
            and repair of PLTU boiler systems, backed by experienced technicians and
            comprehensive spare parts supply. Through the synergy of skilled
            workforce and quality components, we keep power generation operations
            running with zero-compromise safety standards.
          </p>
          <p className="mt-5 leading-[1.75] text-blue-800/65 sm:mt-6 sm:leading-[1.85]">
            Headquartered in Surabaya, East Java, we serve power plants and heavy
            industries nationwide — prioritizing zero accident policy through strict
            LOTO, confined space, and hot work procedures.
          </p>
          <div className="mt-8 flex items-center gap-5 sm:mt-10 sm:gap-6">
            <span className="font-heading text-3xl font-bold text-amber-500 sm:text-4xl">15+</span>
            <span className="text-sm leading-snug text-blue-800/60">
              Years of field-proven boiler expertise
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
