import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { IMAGES, SINERGI_VALUES } from '../constants/site'

export function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Who We Are"
        image={IMAGES.hero}
        imageAlt="Boiler refinery facility"
        compact
      />

      <section className="bg-cream py-24 text-blue-950 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal as="blockquote" className="font-display text-3xl font-bold leading-tight text-blue-900">
            &ldquo;Becoming the leading, reliable provider of PLTU boiler maintenance
            and inspection — delivering peace of mind through the highest safety
            standards.&rdquo;
          </Reveal>
          <Reveal className="space-y-6 text-blue-800/80" delay={150}>
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

      <section className="bg-blue-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="section-label">Core Values</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold">SINERGI</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SINERGI_VALUES.map((value, index) => (
              <Reveal
                key={value.letter}
                as="article"
                className="rounded-2xl border border-white/10 bg-blue-800/40 p-8"
                delay={index * 100}
              >
                <span className="font-heading text-3xl font-bold text-amber-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-xl font-semibold">
                  <span className="text-amber-400">{value.letter}</span>
                  {value.title.slice(1)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white-soft/70">
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
