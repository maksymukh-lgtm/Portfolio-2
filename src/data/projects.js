// Edit this file to add, remove or reorder projects on the home page.
// Each project's card colour: `bg` fills the card, `border` outlines it.
// `image` is the screenshot shown in the card (files live in /public/work, exported at
// 1260 x 1000px). It hangs from the card's top-left edge, flat, with a soft shadow.
export const selectedWorks = [
  {
    slug: 'phone-intake',
    title: 'Digitizing Phone-Based Intake',
    summary: "I replaced MassAbility's manual phone intake with a guided online application, cutting drop-offs by 80%.",
    bg: '#e2dcff',      // lavender
    border: '#bdb7d9',
    image: '/work/intake.webp',
    alt: 'Online intake form on the Personal Information step, with a short explanation panel',
  },
  {
    slug: 'spreadsheets-to-platform',
    title: 'From Spreadsheets to Platform',
    summary: 'Service reporting, spend tracking and fund requests moved from spreadsheets and email to one platform.',
    bg: '#cdfaf2',      // mint
    border: '#b5e3db',
    image: '/work/service-hours.webp',
    alt: 'Service hours request form with a running total of requested hours',
  },
  {
    slug: 'tracking-care',
    title: 'Tracking Care for Participants',
    summary: 'A tool for providers to track and report the services each Supported Living participant receives.',
    bg: '#fde4f2',      // pink
    border: '#d5bbc9',
    image: '/work/sl-quarter.webp',
    alt: 'Quarterly progress report showing hours remaining and services to report',
  },
  {
    slug: 'career-reporting',
    title: 'Reporting for Career Programs',
    summary: "Reporting for MassAbility's career and student services, designed around their own rules and users.",
    bg: '#d8f2ff',      // sky blue
    border: '#b9d9ea',
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
