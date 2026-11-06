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
      { label: 'Timeline', value: 'April 2024 – July 2024' },
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
  'tracking-care': {
    title: 'Tracking Care for Participants',
    subtitle: "A reporting and approvals platform for MassAbility's Supported Living program.",
    overview:
      "Supported Living is one of MassAbility's Home and Community Life programs. It helps people with physical disabilities live as independently as possible, in their own homes and communities. The program is grounded in the independent living philosophy: participants are the experts on their own lives, making their own choices and deciding what independence looks like for them. Services are delivered by contracted providers, and I designed the platform they use to plan and report on that work.",
    meta: [
      { label: 'Role', value: 'Product designer' },
      { label: 'Timeline', value: 'December 2025 – ongoing' },
      { label: 'Organization', value: 'MassAbility' },
    ],
    cover: { src: '/work/sl-cover.webp', alt: 'Supported Living participants list with filters, service plan statuses such as due, overdue and under review, and urgent actions for each participant' },
    problem: "How can we help providers and MassAbility plan, approve and report on services, within the program's existing business processes?",
    outcome: "We designed a platform for service plans, approvals and progress reports. Providers gave it enthusiastic feedback in demos, and it's now in active testing.",
    blocks: [
      {
        type: 'section',
        title: 'A Word document couldn’t keep up',
        body: [
          'Providers report on the services they deliver every month or quarter, depending on their contract. They did it with a Word document, and approvals went back and forth over email. That made it hard to track what was requested, what was approved and what was actually delivered. Following spending or pulling analytics across providers was close to impossible.',
        ],
      },
      {
        type: 'section',
        title: 'Understanding the process first',
        body: [
          'We started by running a survey to identify the stakeholders involved, their pain points and how the process worked for each of them. We then interviewed stakeholders to confirm what we’d learned. From there, I created a current-state service blueprint that mapped how everything worked today, from the provider’s first submission to the agency’s final approval.',
        ],
        image: { src: '/work/sl-service-blueprint-v2.webp', alt: 'Current-state service blueprint for the referral, intake and eligibility phase: provider actions, frontstage interactions and backstage MassAbility actions, with lines of interaction and visibility', frame: true },
      },
      {
        type: 'section',
        title: 'Prioritizing with limited time and budget',
        body: [
          'The blueprint surfaced more opportunities than we could build. With limited time and budget, and multiple teams collaborating, we needed clear priorities. We ran a MoSCoW exercise with stakeholders to decide what had to be in the first release, then confirmed the final feature set with everyone involved.',
        ],
        image: {
          type: 'moscow',
          phase: 'Service Plan creation & maintenance',
          legend: true,
          groups: [
            { name: 'Initial plan list', audience: 'provider', items: [{ text: 'View participants who need an initial Service Plan' }, { text: 'Identify plans that are overdue or pending' }, { text: 'Open system-generated blank plan' }] },
            { name: 'Initial Service Plan authoring', audience: 'provider', items: [{ text: 'Create initial Service Plan' }, { text: 'Save draft' }, { text: 'Submit initial Service Plan' }, { text: 'View submission status' }] },
            { name: 'Initial Service Plan content', audience: 'provider', items: [{ text: 'Review prefilled participant data' }, { text: 'Review provider and coordinator data' }, { text: 'Select applicable service areas' }, { text: 'Select supported tasks' }, { text: 'Define measurable goals and narrative' }, { text: 'Request additional service levels' }, { text: 'Justify additional services' }, { text: 'Enter anticipated service hours per month' }, { text: 'Identify priority tasks' }, { text: 'Upload supporting documents', wont: true }, { text: 'Request participant data update' }] },
            { name: 'Approval & revision', audience: 'provider', items: [{ text: 'Internal supervisor review', wont: true }, { text: 'View MBY comments' }, { text: 'Edit returned plans' }, { text: 'Resubmit corrected plans' }] },
            { name: 'Referral & authorization', audience: 'agency', items: [{ text: 'Create a Supported Living referral', wont: true }, { text: 'Associate referral with provider', wont: true }, { text: 'Track referral status', wont: true }, { text: 'Issue service authorization for assessment', wont: true }] },
          ],
          pinned: { title: 'List of all service areas', items: ['PCA management / surrogacy', 'Behavioral health supports', 'Personal health care', 'Adaptive equipment / AT', 'Housing assistance', 'Financial management', 'Educational / vocational', 'Household management', 'Social / recreational', 'Mobility / transportation', 'Self-advocacy'] },
        },
      },
      {
        type: 'features',
        title: 'The solution: plans, reports and participant data in one place',
        intro: 'I designed mockups for the three workflows that mattered most.',
        items: [
          { icon: 'clipboard-check', title: 'Service plan creation and approval', text: 'Providers create service plans and MassAbility reviews and approves them in the platform, replacing approvals by email.' },
          { icon: 'stats-report', title: 'Progress reports', text: 'Providers submit their monthly or quarterly reports in a structured format, so requested and delivered services can be compared.' },
          { icon: 'user-circle', title: 'Participant data review', text: 'The agency and providers can review participant information and service history in one place.' },
        ],
        showcase: [
          {
            bg: '#e5f0ec',
            title: 'Plans start from what\u2019s already approved.',
            subtitle: 'Hours authorized, used and requested sit right above the services being updated.',
            icons: ['clipboard-check'],
            shots: [{ src: '/work/sl-update-services.webp', alt: 'Updating authorized services: the active service authorization with remaining balance, monthly utilization, and each service area with authorized and requested hours' }],
          },
          {
            bg: '#fde6d2',
            title: 'Reports follow the service plan.',
            subtitle: 'Service areas in the active plan are pre-selected, so providers only confirm what they delivered.',
            icons: ['stats-report'],
            shots: [{ src: '/work/sl-service-areas.webp', alt: 'Quarterly progress report: selecting the service areas provided this period, with areas from the service plan pre-selected and tagged' }],
          },
        ],
      },
      {
        type: 'section',
        title: 'Designing within real constraints',
        body: [
          'The platform was built by our internal development team on the front end and by an external provider on the back end. I worked closely with both. The back-end provider’s feedback and technical constraints shaped many of the interactions and how the interface came together, so my job was to find the best experience within what the system could support.',
        ],
      },
      {
        type: 'section',
        title: 'Documentation and testing',
        body: [
          'To keep everyone aligned, I wrote the functional requirements document (FRD) together with the development team. I also created the testing documents used to validate the platform before launch.',
        ],
      },
      {
        type: 'metrics',
        title: 'Outcomes and metrics',
        items: [
          { icon: 'chat-bubble-check', title: 'Enthusiastic provider feedback', text: 'When we demonstrated the platform, providers were excited to finally have a structured way to handle approvals instead of email.' },
          { icon: 'test-tube', title: 'In active testing', text: 'The platform is currently being tested ahead of rollout.' },
          { icon: 'multiple-pages', title: 'Ready to build on', text: 'The FRD and testing documents give the agency a clear foundation for launch and future releases.' },
        ],
      },
    ],
  },
  'spreadsheets-to-platform': {
    title: 'From Spreadsheets to Platform',
    subtitle: "A planning, approvals and billing platform for MassAbility's Transitional Assistance program.",
    overview:
      "Transitional Assistance is a MassAbility program that helps participants move from a facility back into the community. Providers support each transition by planning the services and purchases a participant will need, and the program runs on complex business rules. I designed the platform that brought planning, approvals and billing into one place.",
    meta: [
      { label: 'Role', value: 'Product designer' },
      { label: 'Timeline', value: 'December 2025 – ongoing' },
      { label: 'Organization', value: 'MassAbility' },
    ],
    cover: { src: '/work/ta-cover-v2.webp', alt: 'Participant TA plan summary: total projected cost, hours utilized per service, and each service with authorized and utilized hours and an on-track status' },
    problem: 'How can we help providers build accurate Transitional Assistance plans and get them approved, when the rules behind every category are complex and keep changing?',
    outcome: "We designed a platform where providers create TA plans, request approvals and modifications, and bill against their approved plan, replacing spreadsheets and email. Providers loved it in our demo, and it's now in the final stages of development.",
    blocks: [
      {
        type: 'section',
        title: 'Too many versions of the truth',
        body: [
          'For every participant, providers create a TA plan that estimates future expenses and service hours. Each service and purchase category has its own limits and business rules, and those rules change over time. All of this lived in spreadsheets. Different versions of a plan travelled around, and people couldn’t always tell which one was current. Approvals and modification requests happened over email, adding another layer to keep track of.',
        ],
      },
      {
        type: 'section',
        title: 'Mapping a complex process',
        body: [
          'I started with an extended stakeholder interview to define how the process actually worked, step by step. From there, I created a current-state service blueprint that showed every stage of a TA plan, the people involved and where the rules applied. It gave the whole team a shared picture of a process that had only existed in spreadsheets, inboxes and people’s heads.',
          'We also had the chance to interview one of the program’s biggest providers. They walked us through the internal system they had built to track their own work, which showed us what providers really needed day to day and where the official process fell short. Those insights fed directly into the design.',
        ],
        image: {
          type: 'process',
          title: 'Process overview',
          stages: [
            { label: 'Stakeholder interview', icon: 'chat-lines', points: ['How the process works', 'Step-by-step definition'] },
            { label: 'Service blueprint', icon: 'map', points: ['Every stage of a TA plan', 'People involved', 'Where rules apply'] },
            { label: 'Provider interview', icon: 'user-circle', points: ['Their internal tracking system', 'Day-to-day needs', 'Gaps in the official process'] },
            { label: 'Design', icon: 'design-pencil', points: ['Insights into mockups', 'Shared picture for the team'] },
          ],
          ongoing: 'Stakeholder engagement',
        },
      },
      {
        type: 'section',
        title: 'Deciding what to build first',
        body: [
          'The blueprint made it clear there was more to solve than one release could cover. We ran a MoSCoW exercise with stakeholders to agree on what had to be built first and what could wait.',
        ],
        image: {
          type: 'moscow',
          phase: 'Service delivery, ongoing tracking and billing',
          note: 'Billing depends on OnBase for authorized limits and review outcomes; OnBase depends on the platform for complete, structured billing submissions.',
          legend: true,
          groups: [
            { name: 'Service delivery logging', audience: 'provider', items: [{ text: 'Log service hours' }, { text: 'Log activities and transportation' }, { text: 'Log standard and non-standard purchases' }] },
            { name: 'Billing data capture & submission', audience: 'provider', items: [{ text: 'Generate billing data (SDR) from logged services and purchases', should: true }, { text: 'Submit monthly billing activity' }, { text: 'Upload supporting documentation', should: true }] },
            { name: 'Billing review & correction loop', audience: 'provider', items: [{ text: 'Receive billing status from OnBase' }, { text: 'Receive requests to correct billing' }, { text: 'Update logged services or purchases' }, { text: 'Resubmit corrected billing' }] },
            { name: 'Plan-aware visibility', audience: 'provider', items: [{ text: 'Display authorized plan limits during entry' }, { text: 'Track cumulative usage across months' }, { text: 'Reflect remaining authorized amounts' }, { text: 'Track billing submission deadlines' }] },
            { name: 'Soft validation & flexibility', audience: 'provider', items: [{ text: 'Soft-flag services or purchases over authorized limits', should: true }, { text: 'Support billing date ranges across months' }] },
            { name: 'Activity & billing intake', audience: 'agency', items: [{ text: 'Receive monthly activity logs and billing' }, { text: 'View detailed breakdown' }, { text: 'Access uploaded documentation' }] },
            { name: 'Review, correction loop & analytics', audience: 'agency', items: [{ text: 'Review submitted logs and billing' }, { text: 'Return submissions for correction' }, { text: 'Provide correction feedback', should: true }, { text: 'Receive corrected resubmissions' }, { text: 'Track correction cycles' }] },
            { name: 'Status & tracking', audience: 'agency', items: [{ text: 'View billing status' }, { text: 'Track submission dates and timeliness' }, { text: 'Identify missing or late submissions' }] },
          ],
        },
      },
      {
        type: 'features',
        title: 'The solution: one plan, one source of truth',
        items: [
          { icon: 'calculator', title: 'TA plan builder', text: 'Providers estimate expenses and service hours by category in one structured plan.' },
          { icon: 'shield-check', title: 'Rules built in', text: 'Each service and purchase category carries its own limits, so plans follow the program’s rules from the start.' },
          { icon: 'git-pull-request', title: 'Approvals and modifications', text: 'Plans are submitted, approved and changed in the platform instead of over email, so everyone sees the current version.' },
          { icon: 'wallet', title: 'Billing connected to the plan', text: 'I added TA-specific features to the Invoice module and connected them to each provider’s TA plan, so billing reflects what was approved.' },
        ],
        showcase: [
          {
            bg: '#d3ece8',
            title: 'Every entry is logged against the plan.',
            subtitle: 'Providers log activities in one table, and each row shows its billing status.',
            icons: ['list'],
            full: true,
            shots: [{ src: '/work/ta-activity-log.webp', alt: 'Activity log for a participant: category, activity, service date, hours and details for each entry, with statuses such as flagged by MassAbility, paid and ready for billing' }],
          },
          {
            bg: '#fde6d2',
            title: 'Invoices link receipts to approved items.',
            subtitle: 'Each uploaded receipt is matched to the purchases it covers.',
            icons: ['attachment'],
            full: true,
            shots: [{ src: '/work/ta-invoice-docs-v2.webp', alt: 'Create TA invoice, documents step: upload receipts and select which approved purchases each file covers' }],
          },
        ],
      },
      {
        type: 'section',
        title: 'Designing with the business team',
        body: [
          'I presented mockups to the business team regularly, collected their feedback and iterated until the designs were approved. With rules this complex, those review cycles were essential for catching edge cases early and making sure the platform matched how the program really works.',
        ],
      },
      {
        type: 'metrics',
        title: 'Outcomes and metrics',
        items: [
          { icon: 'page-flip', title: 'One source of truth', text: 'A single, current TA plan replaces scattered spreadsheet versions.' },
          { icon: 'mail-out', title: 'Approvals out of email', text: 'Approvals and modification requests are tracked in one place.' },
          { icon: 'link', title: 'Planning and billing connected', text: 'Invoices are tied directly to the approved plan.' },
          { icon: 'heart', title: 'Loved by providers', text: 'Providers responded with great enthusiasm in our demo, and the platform is now in its final stages of development.' },
        ],
      },
    ],
  },
};
