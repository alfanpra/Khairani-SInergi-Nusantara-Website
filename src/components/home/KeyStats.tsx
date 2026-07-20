import { STATS } from '../../constants/site'
import { Reveal } from '../ui/Reveal'

export function KeyStats() {
  return (
    <section className="section-pad bg-cream text-blue-950">
      <div className="mx-auto max-w-7xl container-pad">
        <Reveal variant="right">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="section-index !text-blue-900/30">05</span>
            <span className="h-px w-10 bg-amber-500 sm:w-12" />
            <p className="section-label !text-amber-600">By The Numbers</p>
          </div>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.75rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.01em] text-blue-900 sm:mt-6 sm:leading-[1.08]">
            Trusted Across Indonesia&apos;s Industrial Landscape
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:mt-16 sm:gap-10 lg:grid-cols-4 lg:gap-8">
          {STATS.map((stat, index) => (
            <Reveal
              key={stat.label}
              className="stat-cell"
              delay={index * 70}
              variant={index % 2 === 0 ? 'up' : 'fade'}
            >
              <span className="font-heading text-[clamp(2rem,8vw,4.5rem)] font-bold leading-none tracking-[-0.03em] text-amber-500">
                {stat.value}
                {stat.suffix}
              </span>
              <p className="mt-2 font-heading text-[10px] font-medium uppercase tracking-[0.1em] text-blue-800/55 sm:mt-3 sm:text-xs sm:tracking-[0.12em]">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
