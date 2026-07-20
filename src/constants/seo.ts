import { COMPANY, IMAGES, SERVICES } from "./site";

export const SITE_URL = `https://${COMPANY.website}`;

export const DEFAULT_OG_IMAGE = `${SITE_URL}${IMAGES.hero}`;

export const SEO_KEYWORDS = [
  "PT Khairani Sinergi Nusantara",
  "KSN boiler services",
  "boiler inspection Indonesia",
  "boiler maintenance Indonesia",
  "PLTU boiler service",
  "boiler repair Surabaya",
  "boiler retubing",
  "NDT boiler inspection",
  "inspeksi boiler",
  "perawatan boiler",
  "maintenance boiler PLTU",
  "industrial boiler Indonesia",
  "ASME boiler compliance",
  "emergency boiler response",
] as const;

export type PageSeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  ogImage?: string;
  noIndex?: boolean;
};

export const PAGE_SEO: Record<string, PageSeoConfig> = {
  "/": {
    title: `${COMPANY.name} | Boiler Inspection, Maintenance & Repair Indonesia`,
    description:
      "PT Khairani Sinergi Nusantara provides ASME-compliant boiler inspection, NDT testing, maintenance, repair, and retubing for PLTU and power plants across Indonesia. 24/7 emergency response.",
    path: "/",
    keywords: SEO_KEYWORDS,
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/about": {
    title: `About Us | ${COMPANY.name}`,
    description:
      "Learn about PT Khairani Sinergi Nusantara — a safety-first engineering company specializing in PLTU boiler maintenance, inspection, and repair with nationwide coverage across Indonesia.",
    path: "/about",
    keywords: [...SEO_KEYWORDS, "about KSN", "boiler engineering company Indonesia", "SINERGI values"],
  },
  "/services": {
    title: `Boiler Services | Inspection, Maintenance & Retubing | ${COMPANY.shortName}`,
    description:
      "Boiler inspection & NDT, maintenance & repair, professional retubing, combustion tuning, Riksa Uji compliance, and 24/7 emergency response for power generation facilities in Indonesia.",
    path: "/services",
    keywords: [
      ...SEO_KEYWORDS,
      ...SERVICES.map((service) => service.title),
      "Riksa Uji boiler",
      "GTAW welding boiler",
      "UT thickness mapping",
    ],
    ogImage: `${SITE_URL}${IMAGES.services}`,
  },
  "/team": {
    title: `Our Team | Certified Boiler Engineers & Inspectors | ${COMPANY.shortName}`,
    description:
      "Meet the certified KSN team — project directors, NDT inspectors, HSE managers, and field engineers trained in ASME, API, K3, and LOTO standards for zero-accident operations.",
    path: "/team",
    keywords: [...SEO_KEYWORDS, "certified boiler inspectors", "NDT inspector Indonesia", "HSE boiler team"],
    ogImage: `${SITE_URL}${IMAGES.team}`,
  },
  "/contact": {
    title: `Contact Us | ${COMPANY.name} Surabaya`,
    description: `Contact PT Khairani Sinergi Nusantara in Surabaya for boiler inspection, maintenance, and emergency support. Call ${COMPANY.phone} or email ${COMPANY.email}.`,
    path: "/contact",
    keywords: [...SEO_KEYWORDS, "contact boiler service Surabaya", "boiler contractor Jawa Timur"],
  },
};

export const SITEMAP_PATHS = Object.values(PAGE_SEO).map((page) => page.path);

export function getPageSeo(pathname: string): PageSeoConfig {
  return PAGE_SEO[pathname] ?? PAGE_SEO["/"];
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
