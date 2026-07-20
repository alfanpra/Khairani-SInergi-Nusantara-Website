import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { IMAGES, SINERGI_VALUES } from '../constants/site'

export function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Who We Are"
        image={IMAGES.about}
        compact
      />

      <section className="section-pad bg-cream text-blue-950">
        <div className="mx-auto grid max-w-7xl gap-10 container-pad lg:grid-cols-2 lg:gap-12">
          <Reveal
            as="blockquote"
            className="font-display text-[clamp(1.5rem,4.5vw,1.875rem)] font-bold leading-[1.15] text-blue-900 sm:text-3xl sm:leading-[1.12]"
            variant="right"
          >
            &ldquo;Becoming the leading, reliable provider of PLTU boiler maintenance
            and inspection — delivering peace of mind through the highest safety
            standards.&rdquo;
          </Reveal>
          <Reveal className="space-y-6 text-blue-800/80" delay={120} variant="fade">
            <div>
              <p className="section-label !text-green-500">Vision</p>
              <p className="mt-3 leading-relaxed">
                To become an excellent, leading, and reliable provider of PLTU boiler
                maintenance and inspection services — giving business partners peace of
                mind through the highest workplace safety standards for safe, productive,
                accident-free operations.
              </p>
            </div>
            <div>
              <p className="section-label !text-amber-500">Mission</p>
              <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed">
                <li>Deliver inspection, maintenance, repair, and retubing per regulations</li>
                <li>Prioritize zero accident through strict LOTO, confined space, and hot work</li>
                <li>Deploy competent, integrity-driven, synergistic workforce</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-blue-900">
        <div className="mx-auto max-w-7xl container-pad">
          <Reveal variant="left">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="h-px w-8 bg-amber-500" />
              <p className="section-label">Core Values</p>
            </div>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,2.5rem)] font-bold sm:text-4xl">SINERGI</h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {SINERGI_VALUES.map((value, index) => (
              <Reveal
                key={value.letter}
                as="article"
                className="border border-white/10 bg-blue-800/30 p-6 sm:p-8"
                delay={index * 70}
                variant={index % 2 === 0 ? 'up' : 'scale'}
              >
                <span className="font-heading text-2xl font-bold text-amber-500 sm:text-3xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold sm:mt-4 sm:text-xl">
                  <span className="text-amber-400">{value.letter}</span>
                  {value.title.slice(1)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white-soft/70 sm:mt-3">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
