import { PageHero } from '../components/ui/PageHero'
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

      <section className="reveal-up bg-blue-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl space-y-16 px-6 lg:px-8">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className={`scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <p className="section-label">Service {String(index + 1).padStart(2, '0')}</p>
                <h2 className="mt-4 font-heading text-3xl font-semibold">{service.title}</h2>
                <p className="mt-4 leading-relaxed text-white-soft/70">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-sm text-white-soft/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal-up bg-cream py-24 text-blue-950 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="section-label !text-amber-500">Process</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-blue-900">
            From Inquiry to Certification
          </h2>

          <ol className="mt-12 flex flex-wrap gap-4">
            {PROCESS_STEPS.map((step, index) => (
              <li
                key={step}
                className="flex min-w-[140px] flex-1 flex-col rounded-xl border border-blue-900/10 bg-white p-6"
              >
                <span className="font-heading text-2xl font-bold text-amber-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="mt-2 font-heading font-medium">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="reveal-up bg-gradient-to-r from-blue-800 to-blue-700 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold">Need Emergency Response?</h2>
            <p className="mt-2 text-white-soft/70">Available 24/7 for critical boiler situations.</p>
          </div>
          <a
            href={COMPANY.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-amber-500 px-8 py-3 font-heading text-sm font-bold text-blue-950 hover:bg-amber-400"
          >
            Contact Now
          </a>
        </div>
      </section>
    </>
  )
}
