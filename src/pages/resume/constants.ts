import { ResumeItem } from './types';

export const RESUME_ITEM = {
  CHECKMARKX: {
    title: '2024-present Senior Front-end Engineer at ”CHECKMARKX".',
    description: {
      summary:
        'Develop and maintain large-scale web applications, working with micro-frontends.',
      stack: [
        { text: 'HTML', image: './resume/icons8-html-50.png' },
        { text: 'CSS', image: './resume/icons8-css-49.png' },
        { text: 'React', image: './resume/icons8-react-js-100.png' },
        { text: 'Go', image: './resume/icons8-nodejs-64.png' },
      ],
    },
  } as ResumeItem,
  CLEAR: {
    title: '2022-2024 Front-end web developer at ”CLEAR".',
    description: {
      summary:
        'Developed and maintained web applications from scratch including the usage of monitoring, analytics, and alerting tools.',
      stack: [
        { text: 'HTML', image: './resume/icons8-html-50.png' },
        { text: 'CSS', image: './resume/icons8-css-49.png' },
        { text: 'React', image: './resume/icons8-react-js-100.png' },
        { text: 'Node.js', image: './resume/icons8-nodejs-64.png' },
      ],
    },
  } as ResumeItem,
  INMANAGE: {
    title: '2019-2022 Front-end developer at ”Inmanage”.',
    description: {
      summary: 'Developed and maintained hybrid and native mobile apps.',
      stack: [
        { text: 'React Native', image: './resume/icons8-react-js-100.png' },
        { text: 'Firebase', image: './resume/icons8-firebase-48.png' },
      ],
    },
  } as ResumeItem,
  RESTART: {
    title: '2017-2018 Full stack developer at “Restart Group”.',
    description: {
      summary: 'Developed and maintained large-scale web systems.',
      stack: [
        { text: 'HTML', image: './resume/icons8-html-50.png' },
        { text: 'CSS', image: './resume/icons8-css-49.png' },
        {
          text: 'JavaScript',
          image: './resume/icons8-javascript-64.png',
        },
        { text: 'Angular', image: './resume/icons8-angular-50.png' },
        { text: 'PHP', image: './resume/icons8-php-50.png' },
        { text: 'MySQL', image: './resume/icons8-mysql-80.png' },
        {
          text: 'Ionic',
          image:
            './resume/icons8-ionic-a-complete-open-source-sdk-for-hybrid-mobile-app-development-48.png',
        },
        {
          text: 'AWS',
          image: './resume/icons8-amazon-web-services-64.png',
        },
      ],
    },
  } as ResumeItem,
} as const;
