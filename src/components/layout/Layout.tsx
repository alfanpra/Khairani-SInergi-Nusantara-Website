import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SeoHead } from '../seo/SeoHead'
import { StructuredData } from '../seo/StructuredData'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <SeoHead />
      <StructuredData />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
