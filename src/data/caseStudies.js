// Case study content, keyed by the project's slug (the same slug as in projects.js).
// Each page is built from `blocks`, rendered in order. Block types:
//   { type: 'section', title, body: [paragraphs], image?: { placeholder | src, alt, caption, ratio } }
//   { type: 'features', title, intro, items: [{ icon, title, text }], images?: [...] }
//     `icon` is an Iconoir icon name (browse them at iconoir.com); without one, the card shows its number
//   { type: 'metrics', title, intro, items: [{ value | icon, title, text }] }  (value = a short figure like '80%')
// An image with `placeholder` (and no `src`) shows a labelled grey frame until you add the real file.
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
            { text: 'First Name', x: 2, y: 6, r: -3, mx: 3, my: 3 },
            { text: 'Middle Name', x: 11.5, y: 4, r: 2, mx: 27, my: 1 },
            { text: 'Last name', x: 21, y: 7, r: -1, mx: 51, my: 4 },
            { text: 'Preferred name', x: 3, y: 33, r: 2, mx: 75, my: 2 },
            { text: 'Previously used name', x: 12, y: 30, r: -2 },
            { text: 'DOB', x: 21.5, y: 35, r: 3 },
            { text: 'Age', x: 2, y: 60, r: -2 },
            { text: 'Social security number', x: 11.5, y: 58, r: 1 },
            { text: 'Alien Registration Number', x: 21, y: 62, r: -3 },
            { text: 'Email address', x: 71, y: 5, r: 2, mx: 3, my: 75 },
            { text: 'Home Phone Number', x: 80.5, y: 8, r: -2, mx: 27, my: 75 },
            { text: 'Cell phone number', x: 90, y: 4, r: 3, mx: 51, my: 75 },
            { text: 'Preferred method of communication', x: 71.5, y: 33, r: -1, mx: 75, my: 75 },
            { text: 'Preferred Language (Spoken)', x: 81, y: 30, r: 2 },
            { text: 'Preferred Language (written)', x: 90, y: 35, r: -3 },
            { text: 'Gender', x: 71, y: 61, r: 3 },
            { text: 'Ethnicity', x: 80.5, y: 58, r: -2 },
            { text: 'Race', x: 90, y: 62, r: 1 },
            { text: 'Do you have a veteran status?', x: 34, y: 72, r: -2 },
            { text: 'Do you have a citizenship status?', x: 45, y: 74, r: 2 },
            { text: 'Gender Pronoun', x: 56, y: 71, r: -1 },
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
        images: [
          { placeholder: 'Key screen: a question with the contextual help panel open', ratio: '4 / 3' },
          { placeholder: 'Key screen: the narration controls and speech to text', ratio: '4 / 3' },
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
