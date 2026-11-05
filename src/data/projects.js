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

export const archive = [
  {
    title: 'Radar Smart',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    image: null,
  },
  {
    title: 'Wemates',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    image: null,
  },
  {
    title: 'Wemates',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    image: null,
  },
];
