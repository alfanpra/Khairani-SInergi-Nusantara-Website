import { useEffect, useRef } from 'react'
import gsap from 'gsap'

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
  'logo-tanjung.png'
]

export function ClientSupport() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const totalWidth = el.scrollWidth / 2

    gsap.to(el, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    })
  }, [])

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
          TRUSTED BY INDUSTRY
        </h3>
      </div>

      <div className="relative w-full flex">
        {/* Left gradient mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent"></div>

        <div ref={scrollRef} className="flex gap-16 items-center flex-nowrap shrink-0 pr-16">
          {/* Double the array for seamless infinite scroll */}
          {[...clients, ...clients].map((logo, index) => (
            <img
              key={index}
              src={`/images/company-support/${logo}`}
              alt={`Client ${index}`}
              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 hover:grayscale-0 grayscale transition-all duration-300"
            />
          ))}
        </div>

        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </section>
  )
}
