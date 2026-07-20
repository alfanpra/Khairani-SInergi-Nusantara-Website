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
  featured?: boolean
}

function ServiceCard({ index, id, title, description, image, bullets, featured }: ServiceCardProps) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <Reveal
      as={Link}
      to={`/services#${id}`}
      delay={index * 80}
      variant={index % 2 === 0 ? 'up' : 'scale'}
      className={`group relative flex min-h-[18rem] flex-col justify-end overflow-hidden border border-white/10 bg-blue-800 transition-colors duration-300 hover:border-amber-500/50 sm:min-h-[22rem] ${
        featured ? 'lg:col-span-2 lg:min-h-[20rem]' : 'lg:min-h-[24rem]'
      }`}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/70 to-transparent" />
      <div className="absolute left-0 top-0 h-0.5 w-0 bg-amber-500 transition-all duration-500 group-hover:w-full" />

      <div className="relative z-10 p-5 sm:p-8">
        <div className="mb-4 flex items-baseline justify-between gap-4 sm:mb-5">
          <span className="font-heading text-4xl font-bold leading-none text-amber-500/25 transition-colors group-hover:text-amber-500/50 sm:text-5xl">
            {number}
          </span>
          <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-white-soft/40 sm:tracking-[0.25em]">
            Service
          </span>
        </div>

        <h3 className="font-heading text-lg font-semibold leading-snug sm:text-xl md:text-2xl">{title}</h3>

        <p className="mt-2 max-w-md text-sm leading-relaxed text-white-soft/60 sm:mt-3">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 sm:mt-5 sm:gap-x-4">
          {bullets.slice(0, 3).map((bullet) => (
            <li
              key={bullet}
              className="text-[11px] text-white-soft/50 before:mr-1.5 before:text-amber-500/60 before:content-['·'] sm:text-xs sm:before:mr-2"
            >
              {bullet}
            </li>
          ))}
        </ul>

        <span className="mt-4 inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-amber-500 sm:mt-6 sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100">
          Explore
          <span aria-hidden>→</span>
        </span>
      </div>
    </Reveal>
  )
}

export function ServicesPreview() {
  return (
    <section id="services" className="section-pad relative overflow-hidden bg-blue-900">
      <div className="relative mx-auto max-w-7xl container-pad">
        <div className="mb-12 grid gap-8 lg:mb-20 lg:grid-cols-12 lg:items-end lg:gap-10">
          <Reveal className="lg:col-span-7" variant="left">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="section-index">03</span>
              <span className="accent-rule" />
              <p className="section-label">What We Do</p>
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-balance sm:mt-6 sm:leading-[1.02]">
              Core <span className="italic text-amber-500">Services</span>
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9 lg:pb-1" delay={100} variant="fade">
            <p className="text-sm leading-[1.7] text-white-soft/60 sm:text-base sm:leading-[1.75]">
              Four specialized service lines — from NDT inspection and maintenance to
              precision retubing and nationwide technical support.
            </p>
            <Link
              to="/services"
              className="mt-5 inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-amber-500 transition-colors hover:text-amber-400 sm:mt-6"
            >
              View all services
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              index={index}
              id={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              bullets={service.bullets}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
