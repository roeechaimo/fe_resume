import { FooterItem } from './types';

export const FOOTER_ITEMS = {
  LINKEDIN: {
    href: 'https://www.linkedin.com/in/roe-e-chaimowicz/',
    imageSrc: './icons8-linkedin-50.png',
    tooltipId: 'linkedin',
    tooltipText: 'Linkedin',
  } as FooterItem,
  GITHUB: {
    href: 'https://github.com/roeechaimo',
    imageSrc: './icons8-github-50.png',
    tooltipId: 'github',
    tooltipText: 'Github',
  } as FooterItem,
  RESUME: {
    href: '',
    imageSrc: './icons8-document-50.png',
    tooltipId: 'resume',
    tooltipText: 'Resume as PDF',
  } as FooterItem,
};
