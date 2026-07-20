import { TEAM_CERTIFICATIONS, TEAM_MEMBERS } from '../../constants/site'

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
    <article className="relative h-[26rem] w-full overflow-hidden rounded-2xl border border-white/10 bg-blue-800 sm:h-[28rem]">
      <img
        src={image}
        alt={`${name} — ${role}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/45 to-blue-900/10" />

      <div className="absolute left-4 top-4 flex items-center gap-3">
        <span className="font-heading text-sm font-bold text-amber-500">{number}</span>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-blue-950/60 font-heading text-xs font-bold text-amber-400 backdrop-blur-sm">
          {initials}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex h-[11.25rem] flex-col bg-gradient-to-t from-blue-950 via-blue-950/98 to-transparent px-5 pb-5 pt-10 sm:px-6 sm:pb-6">
        <h3 className="truncate font-heading text-lg font-semibold sm:text-xl">{name}</h3>
        <p className="mt-1 truncate text-sm font-medium text-amber-400">{role}</p>
        <p className="mt-2 h-10 overflow-hidden text-xs leading-5 text-white-soft/60">{focus}</p>

        <div className="mt-auto grid h-7 grid-cols-2 gap-2">
          {certifications.slice(0, 2).map((cert) => (
            <span
              key={cert}
              className="truncate rounded-full border border-white/10 bg-blue-950/50 px-2.5 py-1 text-center text-[10px] font-medium uppercase tracking-wide text-white-soft/75 backdrop-blur-sm"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export function TeamGrid() {
  return (
    <section className="relative overflow-hidden bg-blue-900 pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-green-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-label">Our People</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight">
              Leadership & <span className="text-amber-500">Field Experts</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-white-soft/65 lg:col-span-5 lg:pb-1">
            Certified professionals deployed nationwide — combining technical mastery with
            an uncompromising safety culture on every site.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
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

        <div className="mt-16 rounded-2xl border border-white/10 bg-blue-800/30 px-6 py-8 sm:px-10">
          <p className="section-label mb-4">Certifications & Standards</p>
          <div className="flex flex-wrap gap-3">
            {TEAM_CERTIFICATIONS.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-amber-500/20 bg-blue-950/40 px-4 py-2 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-amber-400/90"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
