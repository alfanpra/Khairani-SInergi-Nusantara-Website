# Product Requirements Document (PRD)
## Project: PT Khairani Sinergi Nusantara Corporate Website Redesign

---

## 1. Executive Summary & Objective
PT Khairani Sinergi Nusantara (KSN) is a premier Indonesian industrial services provider specializing in high-integrity engineering, inspection, maintenance, and repair of boiler systems. Headquartered in Surabaya, East Java, KSN serves power generation facilities (PLTU) and heavy industries across Indonesia.

The primary objective of this project is to completely redesign the company's corporate website. The new design must look **highly professional yet creative**, balancing corporate trust and technical mastery with elegant, engaging transitions and animations. 

The website's target audience includes procurement managers, plant managers, technical directors, and safety directors of heavy industrial facilities and power plants who require high-reliability engineering partners.

---

## 2. Key Requirements & Scope

### 2.1 Technical & Platform Requirements
*   **Architecture**: Static multi-page website built with HTML5, CSS3, and Vanilla JavaScript. No heavy JS frameworks (e.g., React or Vue) to ensure fast initial page load times.
*   **Aesthetics**: Sleek, premium, dark-mode-leaning layout alternating with clean light sections.
*   **Interactions**: Custom cursor, smooth scroll-triggered transitions, typing/line reveals, and interactive hovers.
*   **Animations**: Built using standard open-source animation libraries (GSAP + ScrollTrigger).
*   **Form Inputs**: **Strictly no contact forms** (per user request). All contact calls-to-action (CTAs) will link directly to WhatsApp and email.
*   **Responsiveness**: Fully responsive across mobile, tablet, and desktop breakpoints.

### 2.2 Brand & Identity Guidelines
*   **Primary Brand Color**: Deep Midnight Blue (representing trust, safety, and elite engineering capability).
*   **Accent Colors**: Vibrant Green and Orange/Yellow/Amber accents (representing safety, energy, combustion, and interactive precision).
*   **Typography**:
    *   *Headings / Display*: Editorial serif (e.g., **Playfair Display**) for a premium, established look.
    *   *UI / Subheadings*: Geometric sans-serif (e.g., **Space Grotesk**) for a technical, modern aesthetic.
    *   *Body Copy*: High-legibility sans-serif (e.g., **Inter**).

---

## 3. Site Map & Page Specifications
The site will consist of 5 core pages:

### Page 1: Home Page (`index.html`)
*   **Hero Section**: Full-screen split-screen layout or full-bleed industrial background. A cinematic headline with smooth entry animations: *"Engineering Safety. Powering Nusantara."*
*   **Infinite Ticker**: A scrolling marquee banner displaying core indicators (e.g., `ZERO ACCIDENT POLICY`, `NDT CERTIFIED`, `24/7 EMERGENCY RESPONSE`).
*   **Executive Intro**: An editorial asymmetric section introducing KSN with a large pull-quote.
*   **Services Grid**: Interactive cards highlighting KSN's 4 core service lines with image-reveal hovers.
*   **Key Stats**: Staggered counter section showing experience years, completed projects, and coverage.
*   **HSE Focus**: A high-impact section showcasing the zero-accident culture with safety protocols.
*   **Direct CTA**: Large banner directing users to WhatsApp and Contact details.

### Page 2: About Us Page (`about.html`)
*   **Corporate Identity**: In-depth overview of the company history, vision, and mission.
*   **SINERGI Core Values**: Interactive presentation of the 7 pillars:
    *   **S**afety-First
    *   **I**ntegrity
    *   **N**ationwide Coverage
    *   **E**xcellence in Execution
    *   **R**eliability
    *   **G**rowth & Innovation
    *   **I**ndustrial Expertise
*   **Detailed HSE Protocols**: Expansion on LOTO, Confined Space Entry, Hot Work, and Working at Heights.
*   **Workplace Gallery**: Inline image strip showing real site activities (welding, pipe installation, safety briefings).

### Page 3: Our Services Page (`services.html`)
*   **Detailed Service Sections**: High-fidelity breakdowns of the 4 specialized service lines:
    1.  *Boiler Inspection & NDT* (UT thickness mapping, magnetic testing, visual inspection).
    2.  *Boiler Maintenance & Repair* (refractory, valves, chemical cleaning, waterwalls).
    3.  *Professional Boiler Retubing* (custom bending, GTAW/SMAW welding, hydraulic expansion).
    4.  *Supporting Services & Technical Assistance* (combustion tuning, Riksa Uji compliance).
*   **Spare Parts Catalog**: Visual listing of seamless tubes, high-pressure valves, gaskets, and sootblower parts.
*   **Project Process Flow**: A visual step-by-step flowchart from inquiry to certification.

### Page 4: Our Team Page (`team.html`)
*   **Core Staff & Leaders**: Grid listing core roles (Project Director, Senior Inspector, HSE Manager, QC Inspector, etc.).
*   **Fictionalized Names & Role Badges**: Temporary placeholders with realistic names/roles and certification tags (K3, ASME, NDT, API).
*   **Placeholder Avatars**: Elegant vector/SVG placeholders for photos (to be replaced later by the client).
*   **Culture Statement**: Section emphasizing technical teamwork and continuous development.

### Page 5: Contact Page (`contact.html`)
*   **Quick Info Panels**: Clean layout showing phone numbers, email addresses, and physical office location.
*   **Business Hours**: Clear display of normal business hours and 24/7 emergency availability highlights.
*   **Direct Action Button**: Highly visible WhatsApp button linked to `+62 881 0261 83790`.
*   **Location Block**: Text-based address with a styled static map mockup.

---

## 4. Non-Functional Requirements & Performance
*   **Asset Performance**: All background and gallery images must be compressed (WebP format) and lazy-loaded (except hero LCP image).
*   **SEO Optimization**: Unique meta titles/descriptions, structured schema markup for organization details, and semantic HTML5 tags on all pages.
*   **Accessibility**: Color contrast ratios compliant with WCAG 2.1 AA where possible. Keyboard navigability for the header mobile menu.
*   **Cross-Browser Support**: Chrome, Edge, Safari, Firefox.

---

## 5. Next Steps & Implementation Milestones
1.  **PRD Approval**: Align on objectives and tone.
2.  **Asset Processing**: Optimize images from the `Materials/` directory.
3.  **Core CSS & Base Template**: Code global stylesheet, custom cursor, navigation header, and footer shell.
4.  **Individual Page Development**: Implement Home, About, Services, Team, and Contact pages sequentially.
5.  **GSAP Motion Implementation**: Wire up custom animations and scroll triggers.
6.  **Verification & Polish**: Test responsiveness, performance, and internal navigation.
