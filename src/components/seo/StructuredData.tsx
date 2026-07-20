import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { absoluteUrl, getPageSeo, PAGE_SEO } from '../../constants/seo'
import { COMPANY, SERVICES } from '../../constants/site'

const SCRIPT_ID = 'ksn-structured-data'

function setStructuredData(data: Record<string, unknown>) {
  let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null

  if (!script) {
    script = document.createElement('script')
    script.id = SCRIPT_ID
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify(data)
}

function buildGraph(pathname: string) {
  const page = getPageSeo(pathname)
  const organization = {
    '@type': 'Organization',
    '@id': `${absoluteUrl('/')}#organization`,
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/favicon.svg'),
    email: COMPANY.email,
    telephone: COMPANY.phone,
    description: PAGE_SEO['/'].description,
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    sameAs: [COMPANY.whatsappUrl],
  }

  const localBusiness = {
    '@type': 'LocalBusiness',
    '@id': `${absoluteUrl('/')}#localbusiness`,
    name: COMPANY.name,
    image: absoluteUrl('/images/boiler-refinery.webp'),
    url: absoluteUrl('/'),
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Wiyung Indah BLOK CX/5',
      addressLocality: 'Surabaya',
      addressRegion: 'Jawa Timur',
      postalCode: '60228',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -7.3167,
      longitude: 112.6833,
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${absoluteUrl('/')}#website`,
    url: absoluteUrl('/'),
    name: COMPANY.name,
    description: PAGE_SEO['/'].description,
    publisher: { '@id': `${absoluteUrl('/')}#organization` },
    inLanguage: 'en-ID',
  }

  const webPage = {
    '@type': 'WebPage',
    '@id': `${absoluteUrl(page.path)}#webpage`,
    url: absoluteUrl(page.path),
    name: page.title,
    description: page.description,
    isPartOf: { '@id': `${absoluteUrl('/')}#website` },
    about: { '@id': `${absoluteUrl('/')}#organization` },
    inLanguage: 'en-ID',
  }

  const graph: Record<string, unknown>[] = [organization, localBusiness, website, webPage]

  if (pathname === '/services') {
    graph.push({
      '@type': 'ItemList',
      name: 'Boiler Services',
      itemListElement: SERVICES.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          provider: { '@id': `${absoluteUrl('/')}#organization` },
          areaServed: 'Indonesia',
          url: `${absoluteUrl('/services')}#${service.id}`,
        },
      })),
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

export function StructuredData() {
  const { pathname } = useLocation()

  useEffect(() => {
    setStructuredData(buildGraph(pathname))
  }, [pathname])

  return null
}
