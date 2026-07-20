import { Link } from 'react-router-dom'
import { IMAGES } from '../../constants/site'
import { Reveal } from '../ui/Reveal'

export function HSECommitment() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <img
        src={IMAGES.hse}
        alt="Worker with safety harness at industrial site"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-950/75" />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
        <Reveal>
          <p className="section-label">HSE Commitment</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-tight">
            Zero Accident Is Not a Goal — It&apos;s Our Standard
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-lg text-white-soft/80">
            Every operation follows strict LOTO, confined space entry, hot work, and
            working-at-heights protocols. Our competent, integrity-driven workforce
            ensures safe, productive, accident-free operations.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <Link
            to="/about"
            className="mt-10 inline-flex w-fit rounded-full border border-amber-500/50 px-8 py-3 font-heading text-sm font-semibold text-amber-400 hover:bg-amber-500 hover:text-blue-950"
          >
            View Our Safety Standards
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
