import { MARQUEE_ITEMS } from '../../constants/site'

export function MarqueeTicker() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="overflow-hidden bg-amber-500 py-4">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-blue-950"
          >
            {item}
            <span className="mx-6 opacity-40">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
