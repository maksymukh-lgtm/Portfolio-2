// Edit this file to add, remove or reorder projects on the home page.
// Each project's card colour: `bg` fills the card, `border` outlines it.
// `shots` are the screenshots composed in the top of the card (files live in /public/work).
// Each one is placed by percentages of the image area:
//   x, y   top-left corner (can be negative or >100 to bleed off the card)
//   w      width (height follows the screenshot's own proportions)
//   r      rotation in degrees (negative = rising to the right)
//   tilt   optional extra 3D lean, in degrees, for a "lying on a table" look
export const selectedWorks = [
  {
    slug: 'phone-intake',
    title: 'Digitizing Phone-Based Intake',
    summary: "I replaced MassAbility's manual phone intake with a guided online application, cutting drop-offs by 80%.",
    bg: '#e2dcff',      // lavender
    border: '#bdb7d9',
    shots: [
      { src: '/work/intake.webp', alt: 'Online intake form, Personal Information step', x: -8, y: 9, w: 126, r: -18, tilt: 18 },
    ],
  },
  {
    slug: 'spreadsheets-to-platform',
    title: 'From Spreadsheets to Platform',
    summary: 'Service reporting, spend tracking and fund requests moved from spreadsheets and email to one platform.',
    bg: '#cdfaf2',      // mint
    border: '#b5e3db',
    shots: [
      { src: '/work/service-hours.webp', alt: 'Service hours request form with a running total of requested hours', x: 0, y: 0, w: 96, r: 0 },
    ],
  },
  {
    slug: 'tracking-care',
    title: 'Tracking Care for Participants',
    summary: 'A tool for providers to track and report the services each Supported Living participant receives.',
    bg: '#fde4f2',      // pink
    border: '#d5bbc9',
    shots: [
      { src: '/work/sl-profile.webp', alt: 'Participant profile and service plan summary', x: 4, y: 0, w: 84, r: 0 },
      { src: '/work/sl-quarter.webp', alt: 'Quarterly progress report showing hours remaining', x: 31, y: 16, w: 100, r: 0 },
    ],
  },
  {
    slug: 'career-reporting',
    title: 'Reporting for Career Programs',
    summary: "Reporting for MassAbility's career and student services, designed around their own rules and users.",
    bg: '#d8f2ff',      // sky blue
    border: '#b9d9ea',
    shots: [
      { src: '/work/cies-reports.webp', alt: 'Monthly reports page with current report and submission history', x: -4, y: 9, w: 134, r: -16, tilt: 18 },
    ],
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
