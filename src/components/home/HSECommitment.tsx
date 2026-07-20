import { Link } from 'react-router-dom'
import { IMAGES } from '../../constants/site'
import { Reveal } from '../ui/Reveal'

const HSE_ITEMS = ['LOTO Procedures', 'Confined Space Entry', 'Hot Work Permits', 'Working at Heights'] as const

export function HSECommitment() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden sm:min-h-[70vh] lg:min-h-[75vh]">
      <img
        src={IMAGES.hse}
        alt="Worker with safety harness at industrial site"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-950/80" />
      <div className="grain-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto grid min-h-[60vh] max-w-7xl grid-cols-1 items-center gap-10 container-pad py-16 sm:min-h-[70vh] sm:py-20 lg:min-h-[75vh] lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-7">
          <Reveal variant="left">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="section-index">06</span>
              <span className="accent-rule" />
              <p className="section-label">HSE Commitment</p>
            </div>
          </Reveal>
          <Reveal delay={80} variant="up">
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(1.75rem,5.5vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.02em] sm:mt-6 sm:leading-[1.06]">
              Zero Accident Is Not a Goal — It&apos;s Our Standard
            </h2>
          </Reveal>
          <Reveal delay={160} variant="fade">
            <p className="mt-6 max-w-xl text-base leading-[1.7] text-white-soft/70 sm:mt-8 sm:text-[1.05rem] sm:leading-[1.75]">
              Every operation follows strict LOTO, confined space entry, hot work, and
              working-at-heights protocols. Our competent, integrity-driven workforce
              ensures safe, productive, accident-free operations.
            </p>
          </Reveal>
          <Reveal delay={240} variant="up">
            <Link
              to="/about"
              className="btn-ghost mt-8 inline-flex w-full border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-blue-950 sm:mt-10 sm:w-auto"
            >
              View Our Safety Standards
            </Link>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-4 lg:col-start-9" delay={200} variant="right">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:block lg:space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
            {HSE_ITEMS.map((item) => (
              <p
                key={item}
                className="border border-white/10 bg-blue-950/40 px-4 py-3 font-heading text-xs font-medium text-white-soft/55 sm:text-sm lg:border-0 lg:bg-transparent lg:p-0"
              >
                {item}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
