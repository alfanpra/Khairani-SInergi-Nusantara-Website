import { Reveal } from './Reveal'

type PageHeroProps = {
  label: string
  title: string
  image?: string
  imageAlt?: string
  compact?: boolean
}

export function PageHero({
  label,
  title,
  image,
  imageAlt,
  compact,
}: PageHeroProps) {
  const isVideo =
    image?.endsWith('.webm') ||
    image?.endsWith('.mp4') ||
    image?.endsWith('.ogg')

  return (
    <section
      className={`relative flex items-end overflow-hidden ${
        compact ? 'min-h-[60vh]' : 'min-h-[70vh]'
      }`}
    >
      {image ? (
        <>
          {isVideo ? (
            <video
              src={image}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              aria-label={imageAlt ?? title}
            />
          ) : (
            <img
              src={image}
              alt={imageAlt ?? title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/80 to-blue-900/50" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-950" />
      )}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
        <Reveal>
          <p className="section-label">{label}</p>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-tight">
            {title}
          </h1>
        </Reveal>
      </div>
    </section>
  )
}
