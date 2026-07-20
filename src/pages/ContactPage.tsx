import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { COMPANY } from '../constants/site'

const BUSINESS_HOURS = [
  { day: 'Monday – Friday', hours: '08:00 – 17:00' },
  { day: 'Saturday', hours: 'By Appointment' },
  { day: 'Emergency', hours: '24/7 Available' },
] as const

export function ContactPage() {
  return (
    <>
      <PageHero label="Contact" title="Let's Work Together" compact />

      <section className="bg-cream py-24 text-blue-950 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3 lg:px-8">
          <Reveal
            as="article"
            className="rounded-2xl border border-blue-900/10 bg-white p-8"
            delay={0}
          >
            <p className="section-label !text-amber-500">Phone</p>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className="mt-4 block font-heading text-xl font-semibold text-blue-900 hover:text-amber-600"
            >
              {COMPANY.phone}
            </a>
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-green-600 hover:underline"
            >
              Chat on WhatsApp →
            </a>
          </Reveal>

          <Reveal
            as="article"
            className="rounded-2xl border border-blue-900/10 bg-white p-8"
            delay={100}
          >
            <p className="section-label !text-amber-500">Email</p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-4 block font-heading text-lg font-semibold text-blue-900 hover:text-amber-600"
            >
              {COMPANY.email}
            </a>
          </Reveal>

          <Reveal
            as="article"
            className="rounded-2xl border border-blue-900/10 bg-white p-8"
            delay={200}
          >
            <p className="section-label !text-amber-500">Office</p>
            <p className="mt-4 font-heading text-lg font-semibold text-blue-900">
              {COMPANY.address}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-blue-900 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="section-label">Business Hours</p>
            <h2 className="mt-4 font-heading text-3xl font-semibold">When We&apos;re Available</h2>
            <ul className="mt-8 space-y-4">
              {BUSINESS_HOURS.map(({ day, hours }) => (
                <li
                  key={day}
                  className="flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <span className="text-white-soft/70">{day}</span>
                  <span className="font-heading font-medium">{hours}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-blue-800/40 p-12 text-center"
            delay={150}
          >
            <p className="section-label">Direct Action</p>
            <h3 className="mt-4 font-heading text-2xl font-semibold">Start a Conversation</h3>
            <p className="mt-3 text-sm text-white-soft/70">
              No contact forms — reach us directly via WhatsApp or email.
            </p>
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 rounded-full bg-amber-500 px-10 py-4 font-heading text-sm font-bold text-blue-950 hover:bg-amber-400"
            >
              Chat on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
