const clients = [
  'logo-adaro.png',
  'logo-bms.png',
  'logo-howden.png',
  'logo-john.png',
  'logo-pertamina.png',
  'logo-pjb.png',
  'logo-pln.png',
  'logo-power.png',
  'logo-pupuk.png',
  'logo-tanjung.png',
]

export function ClientSupport() {
  const logos = [...clients, ...clients]

  return (
    <section className="overflow-hidden border-y border-blue-900/10 bg-cream py-10 sm:py-14">
      <div className="mx-auto mb-8 flex max-w-7xl flex-wrap items-center gap-3 container-pad sm:mb-10 sm:gap-4">
        <span className="section-index !text-blue-900/30">04</span>
        <span className="h-px w-8 bg-amber-500" />
        <h3 className="section-label !text-blue-800/50">Trusted By Industry</h3>
      </div>

      <div className="relative flex w-full">
        <div className="absolute top-0 bottom-0 left-0 z-10 w-12 bg-gradient-to-r from-cream to-transparent sm:w-24 md:w-32" />

        <div className="marquee-track flex w-max shrink-0 items-center gap-12 pr-12 sm:gap-20 sm:pr-20">
          {logos.map((logo, index) => (
            <img
              key={`${logo}-${index}`}
              src={`/images/company-support/${logo}`}
              alt=""
              className="h-10 w-auto max-w-[120px] object-contain opacity-50 grayscale transition-all duration-500 hover:opacity-90 hover:grayscale-0 sm:h-12 sm:max-w-none md:h-14"
            />
          ))}
        </div>

        <div className="absolute top-0 right-0 bottom-0 z-10 w-12 bg-gradient-to-l from-cream to-transparent sm:w-24 md:w-32" />
      </div>
    </section>
  )
}
