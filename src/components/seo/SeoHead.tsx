import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getPageSeo, absoluteUrl } from '../../constants/seo'
import { COMPANY } from '../../constants/site'

const META_ATTR = 'data-seo'

function upsertMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  const selector = `meta[${attribute}="${key}"][${META_ATTR}]`
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    element.setAttribute(META_ATTR, 'true')
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"][${META_ATTR}]`
  let element = document.head.querySelector<HTMLLinkElement>(selector)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    element.setAttribute(META_ATTR, 'true')
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

export function SeoHead() {
  const { pathname } = useLocation()
  const seo = getPageSeo(pathname)
  const canonicalUrl = absoluteUrl(seo.path)
  const keywords = seo.keywords?.join(', ') ?? ''
  const ogImage = seo.ogImage ?? absoluteUrl('/images/boiler-refinery.webp')

  useEffect(() => {
    document.title = seo.title

    upsertMeta('name', 'description', seo.description)
    upsertMeta('name', 'keywords', keywords)
    upsertMeta('name', 'author', COMPANY.name)
    upsertMeta('name', 'robots', seo.noIndex ? 'noindex, nofollow' : 'index, follow')

    upsertLink('canonical', canonicalUrl)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', COMPANY.name)
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('property', 'og:locale', 'en_ID')

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', seo.title)
    upsertMeta('name', 'twitter:description', seo.description)
    upsertMeta('name', 'twitter:image', ogImage)
  }, [seo, canonicalUrl, keywords, ogImage])

  return null
}
