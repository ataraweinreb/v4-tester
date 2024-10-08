module.exports = {
  siteTitle: 'Atara Weinreb | Creative Software Engineer',
  siteDescription:
    'Atara Weinreb is a creative software engineer based in NYC who designs and builds games, applications, and websites.',
  siteKeywords:
    'Tara Weinreb, Tara, Weinreb, Atara Weinreb, Atara, Weinreb software engineer, creative engineer, ios developer, front-end engineer, prototyping engineer, creative coder, java, NYU',
  siteUrl: 'https://taraweinreb.com',
  siteLanguage: 'en_US',

  name: 'Atara Weinreb',
  location: 'New York, NY',
  email: 'ataraweinreb@gmail.com',
  github: 'https://github.com/ataraweinreb',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/ataraweinreb',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/taraweinreb/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ataraweinreb/',
    },
  ],

  navLinks: [
    // {
    //   name: 'Experience',
    //   url: '#jobs',
    // },
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Work',
      url: '#work',
    },
    // {
    //   name: 'Gallery',
    //  url: '#gallery',
    // },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

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
