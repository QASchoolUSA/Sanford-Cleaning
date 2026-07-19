export const siteFacts = {
  phone: {
    display: '(321) 236-0618',
    e164: '+13212360618',
    href: 'tel:+13212360618',
  },
  email: 'info@sanfordcleaning.com',
  legalName: 'Topaz West LLC',
  brandName: 'Sanford Cleaning',
  yearsCompany: 2,
  yearsTeamExperience: '5–7',
  experienceStatement:
    'Family-owned. Serving Sanford for 2 years as Sanford Cleaning (Topaz West LLC); our team brings about 5–7 years of cleaning experience.',
  pricing: {
    entryStartingFrom: 80,
    typical3brStandard: '$140–$200',
    typicalDeep: '$250–$450',
    messages: {
      entryAndTypical:
        'Entry-level jobs from $80; typical 3-bedroom packages $140–$200.',
      full:
        'Entry-level jobs from $80; typical 3-bedroom standard packages are $140–$200, and typical deep cleanings are $250–$450.',
    },
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61579618588193',
    'https://www.instagram.com/sanfordcleaning',
  ],
  serviceAreaPolicy: {
    businessType: 'Mobile service-area business',
    publicStorefront: false,
    locality: 'Sanford',
    region: 'FL',
    postalCode: '32771',
    country: 'US',
    description:
      'Mobile service-area business serving Sanford, FL 32771. No public storefront.',
  },
  url: 'https://sanfordcleaning.com',
} as const;

export type SiteFacts = typeof siteFacts;
