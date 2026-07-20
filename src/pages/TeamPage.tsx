import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { TeamGrid } from '../components/team/TeamGrid'
import { IMAGES } from '../constants/site'

export function TeamPage() {
  return (
    <>
      <PageHero
        label="Our Team"
        title="The People Behind the Work"
        image={IMAGES.team}
        imageAlt="Morning safety induction briefing"
      />

      <section className="bg-cream py-12 text-blue-950 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl container-pad text-center">
          <Reveal
            as="blockquote"
            className="font-display text-[clamp(1.35rem,4vw,1.5rem)] font-bold leading-snug text-blue-900 sm:text-2xl"
            variant="right"
          >
            &ldquo;Competent, integrity-driven, and synergistic — our workforce is our
            greatest asset.&rdquo;
          </Reveal>
          <Reveal as="p" className="mt-5 leading-[1.75] text-blue-800/75 sm:mt-6" delay={120} variant="fade">
            From project directors and NDT inspectors to HSE managers and field engineers,
            every team member is trained, certified, and committed to zero-accident
            operations across Indonesia.
          </Reveal>
        </div>
      </section>

      <TeamGrid />

      <section className="relative min-h-[40vh] overflow-hidden sm:min-h-[50vh]">
        <img
          src="/images/morning-safety-induction-candid.webp"
          alt="Team safety induction"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70" />
        <div className="relative z-10 mx-auto max-w-7xl container-pad py-16 sm:py-24">
          <Reveal variant="left">
            <p className="section-label">Our Culture</p>
          </Reveal>
          <Reveal delay={80} variant="up">
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-tight sm:text-4xl">
              Safety Briefings. Every Morning. Every Site.
            </h2>
          </Reveal>
          <Reveal delay={160} variant="fade">
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white-soft/75 sm:mt-6 sm:text-base">
              Morning safety inductions, LOTO procedures, and continuous training keep
              our teams aligned before every shift begins.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
