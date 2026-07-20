import type { CSSProperties } from 'react'

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
      className={`grain-overlay relative flex items-end overflow-hidden ${
        compact ? 'min-h-[45vh] sm:min-h-[55vh]' : 'min-h-[50vh] sm:min-h-[65vh]'
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

          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/85 to-blue-900/30" />
        </>
      ) : (
        <div className="absolute inset-0 bg-blue-900" />
      )}

      <div className="relative z-10 mx-auto w-full max-w-7xl container-pad pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div
          className="hero-enter flex flex-wrap items-center gap-3 sm:gap-4"
          style={{ '--hero-delay': '100ms' } as CSSProperties}
        >
          <span className="accent-rule" />
          <p className="section-label">{label}</p>
        </div>
        <h1
          className="hero-enter mt-5 max-w-4xl font-display text-[clamp(2rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.02em] sm:mt-6 sm:leading-[1.02]"
          style={{ '--hero-delay': '220ms' } as CSSProperties}
        >
          {title}
        </h1>
      </div>
    </section>
  )
}
