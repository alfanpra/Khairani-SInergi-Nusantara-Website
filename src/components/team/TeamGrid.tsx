import { TEAM_CERTIFICATIONS, TEAM_MEMBERS } from '../../constants/site'
import { Reveal } from '../ui/Reveal'

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

type TeamMemberCardProps = {
  index: number
  name: string
  role: string
  focus: string
  image: string
  certifications: readonly string[]
}

function TeamMemberCard({
  index,
  name,
  role,
  focus,
  image,
  certifications,
}: TeamMemberCardProps) {
  const initials = getInitials(name)
  const number = String(index + 1).padStart(2, '0')

  return (
    <Reveal
      as="article"
      className="group relative h-[22rem] w-full overflow-hidden border border-white/10 bg-blue-800 sm:h-[26rem] md:h-[28rem]"
      delay={index * 70}
      variant={index % 3 === 1 ? 'scale' : 'up'}
    >
      <img
        src={image}
        alt={`${name} — ${role}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/50 to-transparent" />

      <div className="absolute left-3 top-3 flex items-center gap-2 sm:left-4 sm:top-4 sm:gap-3">
        <span className="font-heading text-xs font-bold text-amber-500/70 sm:text-sm">{number}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/15 bg-blue-950/70 font-heading text-[10px] font-bold text-amber-400 sm:h-9 sm:w-9">
          {initials}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex h-[10rem] flex-col bg-gradient-to-t from-blue-950 via-blue-950/98 to-transparent px-4 pb-4 pt-8 sm:h-[11.25rem] sm:px-6 sm:pb-6 sm:pt-10">
        <h3 className="truncate font-heading text-base font-semibold sm:text-lg md:text-xl">{name}</h3>
        <p className="mt-1 truncate text-xs font-medium text-amber-400 sm:text-sm">{role}</p>
        <p className="mt-2 line-clamp-2 text-[11px] leading-4 text-white-soft/55 sm:text-xs sm:leading-5">{focus}</p>

        <div className="mt-auto grid h-7 grid-cols-2 gap-2">
          {certifications.slice(0, 2).map((cert) => (
            <span
              key={cert}
              className="truncate border border-white/10 bg-blue-950/60 px-2 py-1 text-center text-[9px] font-medium uppercase tracking-wide text-white-soft/65 sm:px-2.5 sm:text-[10px]"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export function TeamGrid() {
  return (
    <section className="section-pad relative overflow-hidden bg-blue-900">
      <div className="relative mx-auto max-w-7xl container-pad">
        <div className="mb-10 grid gap-6 sm:mb-12 lg:mb-16 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7" variant="left">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="accent-rule" />
              <p className="section-label">Our People</p>
            </div>
            <h2 className="mt-5 font-display text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.01em] sm:mt-6 sm:leading-tight">
              Leadership & <span className="italic text-amber-500">Field Experts</span>
            </h2>
          </Reveal>
          <Reveal
            className="text-sm leading-[1.7] text-white-soft/60 sm:text-base sm:leading-[1.75] lg:col-span-5 lg:pb-1"
            delay={100}
            variant="fade"
          >
            Certified professionals deployed nationwide — combining technical mastery with
            an uncompromising safety culture on every site.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              index={index}
              name={member.name}
              role={member.role}
              focus={member.focus}
              image={member.image}
              certifications={member.certifications}
            />
          ))}
        </div>

        <Reveal
          className="mt-12 border border-white/10 bg-blue-800/20 px-5 py-6 sm:mt-16 sm:px-10 sm:py-8"
          delay={200}
          variant="up"
        >
          <p className="section-label mb-4 sm:mb-5">Certifications & Standards</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {TEAM_CERTIFICATIONS.map((cert) => (
              <span
                key={cert}
                className="border border-amber-500/20 bg-blue-950/40 px-3 py-1.5 font-heading text-[10px] font-semibold uppercase tracking-[0.15em] text-amber-400/90 sm:px-4 sm:py-2 sm:text-xs"
              >
                {cert}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
