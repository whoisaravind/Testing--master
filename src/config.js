module.exports = {
  siteTitle: 'Aravindhan N',
  siteDescription:
    'Aravindhan is a MBA Student at LPU, who loves learning new things in the intersection of Marketing and Product Management.',
  siteKeywords:
    'Aravindhan, Aravindhan N, AravindNK, Aravind NK, whoisaravind, MBA, LPU, Product Manager, Maketer, Tamil nadu, perambalur, punjab, lpuian, digital marketing',
  siteUrl: 'https://chandrikadeb7.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Aravindhan N',
  location: 'Tamil Nadu, India',
  email: 'aravindnk@yahoo.com',
  github: 'https://github.com/whoisaravind',
  twitterHandle: '@whoisaravind',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/whoisaravind',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/aravindnk/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/whoisaravind',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
