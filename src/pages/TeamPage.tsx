import { PageHero } from '../components/ui/PageHero'
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

      <section className="bg-cream py-16 text-blue-950 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="font-display text-2xl font-bold leading-snug text-blue-900">
            &ldquo;Competent, integrity-driven, and synergistic — our workforce is our
            greatest asset.&rdquo;
          </p>
          <p className="mt-6 leading-relaxed text-blue-800/75">
            From project directors and NDT inspectors to HSE managers and field engineers,
            every team member is trained, certified, and committed to zero-accident
            operations across Indonesia.
          </p>
        </div>
      </section>

      <TeamGrid />

      <section className="relative min-h-[50vh] overflow-hidden">
        <img
          src="/images/morning-safety-induction-candid.webp"
          alt="Team safety induction"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="section-label">Our Culture</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold">
            Safety Briefings. Every Morning. Every Site.
          </h2>
          <p className="mt-6 max-w-xl text-white-soft/75">
            Morning safety inductions, LOTO procedures, and continuous training keep
            our teams aligned before every shift begins.
          </p>
        </div>
      </section>
    </>
  )
}
