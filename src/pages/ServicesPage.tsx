import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { COMPANY, IMAGES, SERVICES } from '../constants/site'

const PROCESS_STEPS = [
  'Inquiry',
  'Assessment',
  'Mobilization',
  'Execution',
  'Certification',
] as const

export function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="What We Do"
        image={IMAGES.services}
        imageAlt="Worker welding at industrial site"
      />

      <section className="section-pad bg-blue-900">
        <div className="mx-auto max-w-7xl space-y-12 container-pad sm:space-y-16">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.id}
              as="article"
              id={service.id}
              className={`scroll-mt-24 grid items-center gap-8 sm:scroll-mt-28 sm:gap-10 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
              delay={index * 80}
              variant={index % 2 === 0 ? 'up' : 'left'}
            >
              <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <p className="section-label">Service {String(index + 1).padStart(2, '0')}</p>
                <h2 className="mt-3 font-heading text-2xl font-semibold sm:mt-4 sm:text-3xl">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white-soft/70 sm:mt-4 sm:text-base">{service.description}</p>
                <ul className="mt-5 space-y-2 sm:mt-6">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-white-soft/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`overflow-hidden ${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-cream text-blue-950">
        <div className="mx-auto max-w-7xl container-pad">
          <Reveal variant="right">
            <p className="section-label !text-amber-500">Process</p>
            <h2 className="mt-4 font-heading text-2xl font-semibold text-blue-900 sm:text-3xl">
              From Inquiry to Certification
            </h2>
          </Reveal>

          <ol className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, index) => (
              <Reveal
                key={step}
                as="li"
                className="flex flex-col border border-blue-900/10 bg-white p-5 sm:p-6"
                delay={index * 70}
                variant="up"
              >
                <span className="font-heading text-xl font-bold text-amber-500 sm:text-2xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="mt-2 font-heading text-sm font-medium sm:text-base">{step}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue-800 py-12 sm:py-16">
        <div className="absolute inset-x-0 top-0 h-px bg-amber-500/50" />
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 container-pad lg:flex-row lg:items-center">
          <Reveal variant="left">
            <h2 className="font-display text-xl font-bold sm:text-2xl">Need Emergency Response?</h2>
            <p className="mt-2 text-sm text-white-soft/65 sm:text-base">Available 24/7 for critical boiler situations.</p>
          </Reveal>
          <Reveal delay={120} variant="fade" className="w-full sm:w-auto">
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Contact Now
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
