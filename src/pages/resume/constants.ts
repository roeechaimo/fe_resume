import { ResumeItem } from './types';

export const RESUME_ITEM = {
  RESTART: {
    title: '2017-2018 Full stack developer at “Restart Group”.',
    description: {
      summary: 'Developed and maintained large-scale web systems',
      stack: [
        'HTML',
        'CSS',
        'Vanilla JavaScript',
        'Angular',
        'PHP',
        'MySQL',
        'Ionic',
        'AWS',
      ],
    },
  } as ResumeItem,
  INMANAGE: {
    title: '2019-2022 Front-end developer at ”Inmanage”.',
    description: {
      summary: 'Created and maintained hybrid and native mobile apps.',
      stack: ['React Native', 'Firebase'],
    },
  } as ResumeItem,
  CLEAR: {
    title: '2022-present Front-end web developer at ”CLEAR".',
    description: {
      summary:
        'Developed and maintained web applications from scratch including the usage of monitoring, analytics, and alerting tools.',
      stack: ['HTML', 'CSS', 'React', 'Node.js'],
    },
  } as ResumeItem,
} as const;
