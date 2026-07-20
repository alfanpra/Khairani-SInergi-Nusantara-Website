import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (prefersReducedMotion()) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    const lenis = lenisRef.current

    requestAnimationFrame(() => {
      if (hash) {
        const target = document.querySelector<HTMLElement>(hash)
        if (target) {
          if (lenis) {
            lenis.scrollTo(target, { offset: -112, immediate: true })
          } else {
            target.scrollIntoView()
          }
          return
        }
      }

      if (lenis) {
        lenis.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo(0, 0)
      }
    })
  }, [pathname, hash])

  return <>{children}</>
}
