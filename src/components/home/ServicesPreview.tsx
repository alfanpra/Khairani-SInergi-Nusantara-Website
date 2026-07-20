import { Link } from 'react-router-dom'
import { SERVICES } from '../../constants/site'
import { Reveal } from '../ui/Reveal'

type ServiceCardProps = {
  index: number
  id: string
  title: string
  description: string
  image: string
  bullets: readonly string[]
}

function ServiceCard({ index, id, title, description, image, bullets }: ServiceCardProps) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <Reveal as={Link} to={`/services#${id}`} delay={index * 100} className="relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-blue-800 hover:border-amber-500/60 sm:min-h-[26rem] lg:min-h-[28rem]">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/75 to-blue-900/30" />
      <div className="absolute left-0 top-0 h-1 w-full bg-amber-500" />

      <div className="relative z-10 p-6 sm:p-8">
        <div className="mb-4 flex items-start justify-between gap-4">
          <span className="font-heading text-4xl font-bold leading-none text-amber-500/80">
            {number}
          </span>
          <span className="rounded-full border border-white/10 bg-blue-950/40 px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-white-soft/50 backdrop-blur-sm">
            Service
          </span>
        </div>

        <h3 className="font-heading text-xl font-semibold leading-snug sm:text-2xl">{title}</h3>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-white-soft/65">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="rounded-full border border-white/10 bg-blue-950/50 px-3 py-1 text-xs text-white-soft/75 backdrop-blur-sm"
            >
              {bullet}
            </li>
          ))}
        </ul>

        <span className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-medium text-amber-500">
          Explore service
          <span aria-hidden>→</span>
        </span>
      </div>
    </Reveal>
  )
}

export function ServicesPreview() {
  return (
    <section id="services" className="relative overflow-hidden bg-blue-900 py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="section-label">What We Do</p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[1.05] text-balance">
              Core <span className="text-amber-500">Services</span>
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:pb-2" delay={150}>
            <p className="text-base leading-relaxed text-white-soft/65 lg:text-lg">
              Four specialized service lines — from NDT inspection and maintenance to
              precision retubing and nationwide technical support.
            </p>
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-amber-500 hover:text-amber-400"
            >
              View all services
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              index={index}
              id={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              bullets={service.bullets}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
