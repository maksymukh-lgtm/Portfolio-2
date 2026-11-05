// Edit this file to add, remove or reorder projects on the home page.
// Each project's card colour: `bg` fills the card, `border` outlines it. The tints come from
// the hero animation's palette and alternate warm / cool in a checkerboard.
// `image` is the screenshot shown in the card (files live in /public/work, exported at
// 1260 x 1000px). It hangs from the card's top-left edge, flat, with a soft shadow.
export const selectedWorks = [
  {
    slug: 'phone-intake',
    title: 'Digitizing Phone-Based Intake',
    summary: "I replaced MassAbility's manual phone intake with a guided online application, cutting drop-offs by 80%.",
    bg: '#fde6d2',      // peach (hero: #f8cfa6)
    border: '#ebcbb0',
    image: '/work/intake.webp',
    alt: 'Online intake form on the Personal Information step, with a short explanation panel',
  },
  {
    slug: 'spreadsheets-to-platform',
    title: 'From Spreadsheets to Platform',
    summary: 'Service reporting, spend tracking and fund requests moved from spreadsheets and email to one platform.',
    bg: '#d3ece8',      // seafoam teal (hero: #8fc3bd)
    border: '#b4d4cf',
    image: '/work/service-hours.webp',
    alt: 'Service hours request form with a running total of requested hours',
  },
  {
    slug: 'tracking-care',
    title: 'Tracking Care for Participants',
    summary: 'A tool for providers to track and report the services each Supported Living participant receives.',
    bg: '#e5f0ec',      // misty aqua (hero: #c3ddd5)
    border: '#c6d9d2',
    image: '/work/sl-quarter.webp',
    alt: 'Quarterly progress report showing hours remaining and services to report',
  },
  {
    slug: 'career-reporting',
    title: 'Reporting for Career Programs',
    summary: "Reporting for MassAbility's career and student services, designed around their own rules and users.",
    bg: '#fff1c4',      // sunshine (hero: #fde27a)
    border: '#ead899',
    image: '/work/cies-reports.webp',
    alt: 'Monthly reports page with the current report and submission history',
  },
];

// Archive: earlier projects, one per row. A line break in `title` (\n) is kept on wider
// screens; `body` is a list of paragraphs. `image` (in /public/archive) is optional.
export const archive = [
  {
    title: 'NeuroSoph Design System\n& Figma Standards',
    body: [
      'NeuroSoph needed a shared foundation that worked for both designers and developers. Without a common system or file conventions, designs and code could drift apart, and handoff took more back-and-forth than it should have. I set out to create a single source of truth for the whole product team.',
      "I built our internal design system from the ground up, starting with a token library for color, typography and spacing that both designers and developers could rely on, then designing the core components on top of it. I also defined our Figma standards: how the workspace is organized and how every file is structured, from pages and flows to annotations, so anyone opening a file knew exactly where to look. Alongside this, I partnered with another designer on NeuroSoph's branding, which became the visual language of the whole system.",
    ],
    image: null,
    alt: '',
  },
  {
    title: 'RadarSmart Family\nTracking App',
    body: [
      'RadarSmart helps families stay connected. I worked in a cross-functional product team alongside a content designer, UX designer, 3D designer, copywriter and developers. With so many disciplines shaping one product across iOS, Android and the web, consistency was the real challenge.',
      "I led the creation of a design system that kept the product cohesive, then used it to redesign the full app for iOS and Android and to design the marketing pages. When RadarSmart partnered with lifecell, one of Ukraine's largest mobile providers, I adapted the app for their brand, proving the system was flexible enough to carry a completely new identity.",
    ],
    image: null,
    alt: '',
  },
  {
    title: 'Wemates Mobile Insurance App',
    body: [
      'Wemates lets people insure their phones, pets, bikes and more, right from their phone. Insurance is complex and often confusing, while people expect mobile apps to be quick and simple. Bridging that gap was the core challenge.',
      'I worked in a product team alongside another UX designer, writers and developers. I built the design system, designed the full iOS and Android app and created the marketing pages that brought new customers in. Together, we turned a complicated product into an experience that feels clear and approachable.',
    ],
    image: null,
    alt: '',
  },
];
