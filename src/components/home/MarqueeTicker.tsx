import { MARQUEE_ITEMS } from '../../constants/site'

export function MarqueeTicker() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="overflow-hidden bg-amber-500 py-3 sm:py-3.5" aria-hidden="true">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap sm:gap-16">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-blue-950 sm:text-[11px] sm:tracking-[0.28em]"
          >
            {item}
            <span className="mx-5 font-light opacity-30 sm:mx-8">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
