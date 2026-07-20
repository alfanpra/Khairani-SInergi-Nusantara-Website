import { Outlet } from 'react-router-dom'
import { SeoHead } from '../seo/SeoHead'
import { StructuredData } from '../seo/StructuredData'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { ScrollReveal } from './ScrollReveal'
import { SmoothScroll } from './SmoothScroll'

export function Layout() {
  return (
    <SmoothScroll>
      <ScrollReveal />
      <SeoHead />
      <StructuredData />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
