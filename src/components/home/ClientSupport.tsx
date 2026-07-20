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
    <section className="overflow-hidden bg-white py-12">
      <div className="container mx-auto mb-8 px-4 text-center sm:px-6 lg:px-8">
        <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
          TRUSTED BY INDUSTRY
        </h3>
      </div>

      <div className="relative flex w-full">
        <div className="absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />

        <div className="marquee-track flex w-max shrink-0 items-center gap-16 pr-16">
          {logos.map((logo, index) => (
            <img
              key={`${logo}-${index}`}
              src={`/images/company-support/${logo}`}
              alt={`Client ${index}`}
              className="h-16 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>

        <div className="absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  )
}
