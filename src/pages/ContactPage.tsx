import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { COMPANY, IMAGES } from '../constants/site'

const BUSINESS_HOURS = [
  { day: 'Monday – Friday', hours: '08:00 – 17:00' },
  { day: 'Saturday', hours: 'By Appointment' },
  { day: 'Emergency', hours: '24/7 Available' },
] as const

export function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's Work Together"
        image={IMAGES.contact}
        compact
      />

      <section className="section-pad bg-cream text-blue-950">
        <div className="mx-auto grid max-w-7xl gap-4 container-pad sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          <Reveal
            as="article"
            className="border border-blue-900/10 bg-white p-6 sm:p-8"
            delay={0}
            variant="up"
          >
            <p className="section-label !text-amber-500">Phone</p>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className="mt-4 block font-heading text-lg font-semibold text-blue-900 hover:text-amber-600 sm:text-xl"
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
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </Reveal>

          <Reveal
            as="article"
            className="border border-blue-900/10 bg-white p-6 sm:col-span-1 sm:p-8 lg:col-span-1"
            delay={80}
            variant="up"
          >
            <p className="section-label !text-amber-500">Email</p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-4 block break-all font-heading text-base font-semibold text-blue-900 hover:text-amber-600 sm:text-lg"
            >
              {COMPANY.email}
            </a>
          </Reveal>

          <Reveal
            as="article"
            className="border border-blue-900/10 bg-white p-6 sm:col-span-2 sm:p-8 lg:col-span-1"
            delay={160}
            variant="up"
          >
            <p className="section-label !text-amber-500">Office</p>
            <p className="mt-4 font-heading text-base font-semibold leading-relaxed text-blue-900 sm:text-lg">
              {COMPANY.address}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-blue-900">
        <div className="mx-auto grid max-w-7xl gap-10 container-pad lg:grid-cols-2 lg:gap-12">
          <Reveal variant="left">
            <p className="section-label">Business Hours</p>
            <h2 className="mt-4 font-heading text-2xl font-semibold sm:text-3xl">When We&apos;re Available</h2>
            <ul className="mt-6 space-y-4 sm:mt-8">
              {BUSINESS_HOURS.map(({ day, hours }) => (
                <li
                  key={day}
                  className="flex flex-col gap-1 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="text-sm text-white-soft/70 sm:text-base">{day}</span>
                  <span className="font-heading text-sm font-medium sm:text-base">{hours}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            className="flex flex-col items-center justify-center border border-white/10 bg-blue-800/40 p-8 text-center sm:p-12"
            delay={120}
            variant="fade"
          >
            <p className="section-label">Direct Action</p>
            <h3 className="mt-4 font-heading text-xl font-semibold sm:text-2xl">Start a Conversation</h3>
            <p className="mt-3 text-sm text-white-soft/70">
              No contact forms — reach us directly via WhatsApp or email.
            </p>
            <a
              href={COMPANY.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 w-full sm:w-auto"
            >
              Chat on WhatsApp
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
