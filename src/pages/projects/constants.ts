import { ProjectLink } from './types';

export const PROJECT_LINKS = {
  MUSIC: {
    href: 'https://music-instruments-3045a.web.app/selection',
    text: 'Play musical instruments',
  } as ProjectLink,
  MEM_GAME: {
    href: 'https://mem-game-a94ab.web.app/',
    text: 'Play memory game',
  } as ProjectLink,
} as const;
