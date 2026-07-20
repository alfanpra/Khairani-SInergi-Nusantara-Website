import { AboutSnippet } from '../components/home/AboutSnippet'
import { CallToAction } from '../components/home/CallToAction'
import { Hero } from '../components/home/Hero'
import { HSECommitment } from '../components/home/HSECommitment'
import { KeyStats } from '../components/home/KeyStats'
import { MarqueeTicker } from '../components/home/MarqueeTicker'
import { ServicesPreview } from '../components/home/ServicesPreview'

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnippet />
      <MarqueeTicker />
      <ServicesPreview />
      <KeyStats />
      <HSECommitment />
      <CallToAction />
    </>
  )
}
