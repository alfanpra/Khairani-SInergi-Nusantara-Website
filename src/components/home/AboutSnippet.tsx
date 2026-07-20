export function AboutSnippet() {
  return (
    <section className="bg-cream py-24 text-blue-950 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <p className="section-label !text-amber-500">About KSN</p>
          <blockquote className="mt-6 font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight text-blue-900">
            &ldquo;A trusted partner in energy maintenance — ensuring your plant
            operates safely, efficiently, and sustainably.&rdquo;
          </blockquote>
        </div>

        <div className="space-y-6 lg:col-span-7 lg:pt-12">
          <p className="text-lg leading-relaxed text-blue-800/80">
            PT Khairani Sinergi Nusantara specializes in inspection, maintenance,
            and repair of PLTU boiler systems, backed by experienced technicians and
            comprehensive spare parts supply. Through the synergy of skilled
            workforce and quality components, we keep power generation operations
            running with zero-compromise safety standards.
          </p>
          <p className="leading-relaxed text-blue-800/70">
            Headquartered in Surabaya, East Java, we serve power plants and heavy
            industries nationwide — prioritizing zero accident policy through strict
            LOTO, confined space, and hot work procedures.
          </p>
        </div>
      </div>
    </section>
  )
}
