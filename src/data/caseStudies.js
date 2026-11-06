// Case study content, keyed by the project's slug (the same slug as in projects.js).
// Each page is built from `blocks`, rendered in order. Block types:
//   { type: 'section', title, body: [paragraphs], image?: { placeholder | src, alt, caption, ratio } }
//   { type: 'features', title, intro, items: [{ icon, title, text }], images?: [...] }
//     `icon` is an Iconoir icon name (browse them at iconoir.com); without one, the card shows its number
//   { type: 'metrics', title, intro, items: [{ value | icon, title, text }] }  (value = a short figure like '80%')
// An image with `placeholder` (and no `src`) shows a labelled grey frame until you add the real file.
// features blocks can have `showcase: [cards]` (see FeatureShowcase.astro) instead of `images`.
// `type: 'cardsort'` shows the wireframe with draggable sticky notes (see CardSort.astro).
// `layers: [{ src, alt, x, y, w }]` composes several images on the coloured panel (x, y, w in %).
// `frame: true` sets a real image on a panel in the project's colour, with rounded corners.
export const caseStudies = {
  'phone-intake': {
    title: 'Digitizing Phone-Based Intake',
    subtitle: 'An accessible online intake application for MassAbility.',
    overview:
      'MassAbility is a Massachusetts government agency that provides services to people with disabilities. Every path to those services starts with intake, a process that involves multiple teams across different programs and departments. For years, the heart of that process was a phone call. I designed the digital platform that replaced it.',
    meta: [
      { label: 'Role', value: 'Product designer' },
      { label: 'Timeline', value: '[add]', placeholder: true },
      { label: 'Organization', value: 'MassAbility' },
    ],
    cover: { src: '/work/intake-cover-v2.webp', alt: 'The online intake application: step navigation, the Personal Information form with speech-to-text fields, and a help panel' },
    problem: 'How can we let people with disabilities complete MassAbility intake on their own terms, without waiting for a phone call?',
    outcome: 'We launched an accessible intake platform that 80% of applicants now complete on their own. The rest get help from case managers through follow-up.',
    blocks: [
      {
        type: 'section',
        title: 'A phone call stood between people and support',
        body: [
          'After someone submitted an initial application, a staff member had to reach them by phone, walk through every question, then enter the answers into the case management system by hand. It was slow for applicants and labour-intensive for staff, and information people had already shared was often asked for again.',
        ],
        image: { src: '/work/intake-journey-map-v2.webp', alt: 'User journey map of the applicant: discovering MassAbility, learning about services, and filling out the pre-application form with or without assistance', frame: true },
      },
      {
        type: 'section',
        title: 'Working with the process, not against it',
        body: [
          "MassAbility's intake process was well established, with multiple teams, programs and departments depending on it. Overhauling how a large agency works wasn't realistic, and it would have put its services at risk. So the goal wasn't to reinvent intake, but to find a digital solution that fit the existing process and made each step easier for applicants and staff.",
        ],
      },
      {
        type: 'section',
        title: 'Designing for every kind of need',
        body: [
          "MassAbility serves people with a wide range of disabilities, so accessibility wasn't a checklist item. It shaped every decision. The platform had to work for people who find typing difficult, who prefer listening to reading, or who need extra guidance to understand a question.",
        ],
      },
      {
        type: 'section',
        title: 'Step one: restructuring the application',
        body: [
          'Before designing any screens, we had to fix the content. We started with the full list of intake questions and reorganized them into a logical order, making sure nothing the agency needed was missed. Because intake feeds several programs, I worked with stakeholders from different programs and departments to confirm that every team’s information was captured in one flow.',
        ],
        image: {
          type: 'cardsort',
          src: '/work/intake-wireframe.webp',
          alt: 'Wireframe of the restructured application: the Work status step with section navigation',
          notes: [
            { text: 'First Name', x: 2, y: 6, r: -3, color: 'yellow', mx: 3, my: 3 },
            { text: 'Middle Name', x: 10.5, y: 4, r: 2, color: 'peach', mx: 27, my: 1 },
            { text: 'Last name', x: 19, y: 7, r: -1, color: 'teal', mx: 51, my: 4 },
            { text: 'Preferred name', x: 2, y: 33, r: 2, color: 'pink', mx: 75, my: 2 },
            { text: 'Previously used name', x: 10.5, y: 30, r: -2, color: 'aqua' },
            { text: 'DOB', x: 19, y: 35, r: 3, color: 'yellow' },
            { text: 'Age', x: 2, y: 60, r: -2, color: 'peach' },
            { text: 'Social security number', x: 10.5, y: 58, r: 1, color: 'teal' },
            { text: 'Alien Registration Number', x: 19, y: 62, r: -3, color: 'pink' },
            { text: 'Email address', x: 73, y: 5, r: 2, color: 'aqua', mx: 3, my: 75 },
            { text: 'Home Phone Number', x: 81.5, y: 8, r: -2, color: 'yellow', mx: 27, my: 75 },
            { text: 'Cell phone number', x: 90.5, y: 4, r: 3, color: 'peach', mx: 51, my: 75 },
            { text: 'Preferred method of communication', x: 73, y: 33, r: -1, color: 'teal', mx: 75, my: 75 },
            { text: 'Preferred Language (Spoken)', x: 81.5, y: 30, r: 2, color: 'pink' },
            { text: 'Preferred Language (written)', x: 90.5, y: 35, r: -3, color: 'aqua' },
            { text: 'Gender', x: 73, y: 61, r: 3, color: 'yellow' },
            { text: 'Ethnicity', x: 81.5, y: 58, r: -2, color: 'peach' },
            { text: 'Race', x: 90.5, y: 62, r: 1, color: 'teal' },
            { text: 'Do you have a veteran status?', x: 36, y: 76, r: -2, color: 'pink' },
            { text: 'Do you have a citizenship status?', x: 46, y: 76, r: 2, color: 'aqua' },
            { text: 'Gender Pronoun', x: 56, y: 76, r: -1, color: 'yellow' },
          ],
        },
      },
      {
        type: 'features',
        title: 'The solution: an accessible, self-service application',
        intro: 'With the structure in place, I designed high-fidelity mockups for the full application.',
        items: [
          { icon: 'magic-wand', title: 'Prefilled information', text: 'Anything the agency already knew is filled in, so applicants never repeat themselves.' },
          { icon: 'data-transfer-both', title: 'Automatic data transfer', text: 'Answers go straight into the case management system, with no manual re-entry.' },
          { icon: 'group', title: 'Two ways to complete', text: 'Applicants can finish on their own, or a case worker can open the case and help them fill it out.' },
          { icon: 'microphone-speaking', title: 'Speech to text', text: 'Applicants can answer by speaking instead of typing.' },
          { icon: 'closed-captions-tag', title: 'Audio narration and captions', text: 'Every question can be listened to or read.' },
          { icon: 'help-circle', title: 'Contextual help panel', text: 'A side panel updates as each field is selected, explaining exactly what that question needs.' },
        ],
        showcase: [
          {
            bg: '#fde6d2',
            title: 'Help that follows each question.',
            subtitle: 'The side panel explains whichever field is selected.',
            icons: ['help-circle'],
            shots: [{ src: '/work/intake-help-panel.webp', alt: 'A contact information step: the cell phone field is selected and the side panel explains why the number is needed' }],
          },
          {
            bg: '#d3ece8',
            title: 'Every question can be heard, read or spoken.',
            subtitle: 'Narration, captions and speech to text are built in.',
            icons: ['sound-high', 'microphone'],
            shots: [
              { src: '/work/intake-audio-controls.webp', w: 44, alt: 'Toolbar with captions, audio, back, pause and forward controls' },
              { src: '/work/intake-speech-field.webp', w: 82, alt: 'A phone number field with a microphone button for dictating the answer' },
              { src: '/work/intake-captions.webp', alt: 'Caption bar showing the narration: now let\u2019s review your contact information' },
            ],
          },
        ],
      },
      {
        type: 'section',
        title: 'Testing with real users',
        body: [
          'I supported MassAbility through user testing by creating the testing materials. I wrote user stories that covered the key paths through the application, from applicants completing intake on their own to case workers helping someone fill it out. That gave the agency a clear, structured way to test whether the platform worked for each type of user.',
        ],
      },
      {
        type: 'metrics',
        title: 'Outcomes and metrics',
        intro: 'The platform is live and in use today.',
        items: [
          { icon: 'check-circle', title: '80% complete it on their own', text: 'Most applicants now finish intake without help. Case managers support the other 20% through follow-up.' },
          { icon: 'thumbs-up', title: 'Easy for residents to use', text: 'Applicants describe the new application as easy to use.' },
          { icon: 'user-badge-check', title: 'Well received by staff', text: 'The eligibility team has given the new process great reviews.' },
        ],
      },
    ],
  },
};
