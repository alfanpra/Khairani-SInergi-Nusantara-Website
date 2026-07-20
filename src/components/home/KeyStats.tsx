import { STATS } from '../../constants/site'

export function KeyStats() {
  return (
    <section className="bg-cream py-24 text-blue-950 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="section-label !text-amber-500">By The Numbers</p>
        <h2 className="mt-4 max-w-2xl font-heading text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-tight text-blue-900">
          Trusted Across Indonesia&apos;s Industrial Landscape
        </h2>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-t border-blue-900/10 pt-6">
              <span className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-bold text-amber-500">
                {stat.value}
                {stat.suffix}
              </span>
              <p className="mt-2 font-heading text-sm font-medium text-blue-800/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
