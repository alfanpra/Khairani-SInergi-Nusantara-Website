export const COMPANY = {
  name: "PT Khairani Sinergi Nusantara",
  shortName: "KSN",
  tagline: "Engineering Safety. Powering Nusantara.",
  footerTagline: "Uncompromising Safety. Unrivaled Reliability.",
  phone: "+62 881 0261 83790",
  email: "khairanisinerginusantara@gmail.com",
  address: "Wiyung Indah BLOK CX/5, 60228, Surabaya, Jawa Timur",
  website: "khairanisinerginusantara.com",
  whatsappUrl: "https://wa.me/62881026183790",
} as const;

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
] as const;

export const FOOTER_DESCRIPTION =
  "PT Khairani Sinergi Nusantara delivers premier boiler inspection, maintenance, repair, and retubing for power generation facilities across Indonesia — backed by certified technicians, strict HSE standards, and nationwide mobilization.";

type FooterLink = { label: string; path: string; external?: boolean };

type FooterColumn = {
  title: string;
  links: readonly FooterLink[];
};

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Our Team", path: "/team" },
      { label: "Contact", path: "/contact" },
      { label: "Core Values", path: "/about" },
      { label: "Safety Standards", path: "/about" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Boiler Inspection", path: "/services#inspection" },
      { label: "Maintenance & Repair", path: "/services#maintenance" },
      { label: "Professional Retubing", path: "/services#retubing" },
      { label: "Supporting Services", path: "/services#supporting" },
      { label: "Emergency Response", path: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "HSE Commitment", path: "/about" },
      { label: "Certifications", path: "/team" },
      { label: "Spare Parts Supply", path: "/services#supporting" },
      { label: "Nationwide Coverage", path: "/" },
      { label: "Trusted Clients", path: "/" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Partner With Us", path: "/contact" },
      { label: "WhatsApp Inquiry", path: COMPANY.whatsappUrl, external: true },
      { label: "Project Assessment", path: "/contact" },
      { label: "Corporate Inquiries", path: "/contact" },
      { label: "Field Mobilization", path: "/services" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", path: "/contact" },
      { label: "Terms of Service", path: "/contact" },
      { label: "Safety Policy", path: "/about" },
      { label: "Compliance Standards", path: "/services" },
      { label: "Cookie Policy", path: "/contact" },
    ],
  },
];

export const FOOTER_QUICK_LINKS = NAV_LINKS;

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy", path: "/contact" },
  { label: "Terms", path: "/contact" },
  { label: "Sitemap", path: "/" },
] as const;

export const FOOTER_SOCIAL_LINKS = [
  {
    label: "WhatsApp",
    href: COMPANY.whatsappUrl,
    icon: "whatsapp",
  },
  {
    label: "Email",
    href: `mailto:${COMPANY.email}`,
    icon: "email",
  },
  {
    label: "Phone",
    href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
    icon: "phone",
  },
] as const;

export const MARQUEE_ITEMS = [
  "ZERO ACCIDENT POLICY",
  "NDT CERTIFIED",
  "NATIONWIDE COVERAGE",
  "BOILER SPECIALISTS",
  "24/7 EMERGENCY RESPONSE",
  "ASME COMPLIANT",
] as const;

export const SERVICES = [
  {
    id: "inspection",
    title: "Boiler Inspection & NDT",
    description:
      "Comprehensive non-destructive testing including UT thickness mapping, magnetic testing, and visual inspection aligned with ASME standards.",
    image: "/images/worker-doing-pipe-welding.webp",
    bullets: ["UT Thickness Mapping", "Magnetic Testing", "Visual Inspection", "Compliance Reporting"],
  },
  {
    id: "maintenance",
    title: "Boiler Maintenance & Repair",
    description:
      "Full-scope maintenance covering refractory, valves, chemical cleaning, and waterwall repairs to keep your plant running safely.",
    image: "/images/engine-instalation.webp",
    bullets: ["Refractory Repair", "Valve Overhaul", "Chemical Cleaning", "Waterwall Maintenance"],
  },
  {
    id: "retubing",
    title: "Professional Retubing",
    description:
      "Precision retubing with custom bending, GTAW/SMAW welding, and hydraulic expansion for high-integrity boiler tube replacement.",
    image: "/images/worker-welding.webp",
    bullets: ["Custom Tube Bending", "GTAW / SMAW Welding", "Hydraulic Expansion", "Quality Certification"],
  },
  {
    id: "supporting",
    title: "Supporting Services",
    description:
      "Technical assistance including combustion tuning, Riksa Uji compliance, and emergency response mobilization nationwide.",
    image: "/images/pipe-installation.webp",
    bullets: ["Combustion Tuning", "Riksa Uji Compliance", "Spare Parts Supply", "Emergency Response"],
  },
] as const;

export const STATS = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 100, suffix: "%", label: "Nationwide Coverage" },
] as const;

export const SINERGI_VALUES = [
  {
    letter: "S",
    title: "Safety-First",
    description: "Zero accident policy through strict LOTO, confined space, and hot work procedures.",
  },
  {
    letter: "I",
    title: "Integrity",
    description: "Honest, transparent engineering practices with full regulatory compliance.",
  },
  {
    letter: "N",
    title: "Nationwide Coverage",
    description: "Mobilized teams serving power plants and heavy industry across Indonesia.",
  },
  {
    letter: "E",
    title: "Excellence in Execution",
    description: "Precision workmanship meeting ASME Section I and API standards.",
  },
  {
    letter: "R",
    title: "Reliability",
    description: "Dependable service delivery ensuring continuous plant operations.",
  },
  {
    letter: "G",
    title: "Growth & Innovation",
    description: "Continuous improvement in techniques, tools, and team development.",
  },
  {
    letter: "I",
    title: "Industrial Expertise",
    description: "Deep specialization in PLTU boiler inspection, maintenance, and repair.",
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Budi Santoso",
    role: "Project Director",
    certifications: ["K3", "ASME"],
    image: "/images/morning-safety-induction.webp",
    focus: "Site leadership & end-to-end project delivery",
  },
  {
    name: "Ahmad Wijaya",
    role: "Senior NDT Inspector",
    certifications: ["NDT II", "API"],
    image: "/images/worker-doing-pipe-welding.webp",
    focus: "Non-destructive testing & thickness mapping",
  },
  {
    name: "Rina Kartika",
    role: "HSE Manager",
    certifications: ["K3", "LOTO"],
    image: "/images/worker-with-harness.webp",
    focus: "Zero-accident culture & safety compliance",
  },
  {
    name: "Dedi Prasetyo",
    role: "QC Inspector",
    certifications: ["ASME", "NDT"],
    image: "/images/worker-welding.webp",
    focus: "Quality assurance & weld inspection",
  },
  {
    name: "Eko Susilo",
    role: "Field Engineer",
    certifications: ["K3", "CSE"],
    image: "/images/engine-instalation.webp",
    focus: "On-site execution & technical troubleshooting",
  },
  {
    name: "Fitri Handayani",
    role: "Technical Lead",
    certifications: ["ASME", "API"],
    image: "/images/huge-curve-pipe-installation.webp",
    focus: "Engineering standards & technical guidance",
  },
] as const;

export const TEAM_CERTIFICATIONS = ["ASME", "API", "K3", "LOTO", "NDT", "Confined Space"] as const;

export const IMAGES = {
  hero: "/hero.webm",
  about: "/images/big-pipe-image.webp",
  hse: "/images/worker-with-harness.webp",
  team: "/images/morning-safety-induction.webp",
  services: "/images/worker-welding-2.webp",
} as const;
