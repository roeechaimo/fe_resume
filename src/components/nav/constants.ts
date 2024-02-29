import About from '../../pages/about';
import Lightning from '../../pages/lightning';
import Projects from '../../pages/projects';
import Resume from '../../pages/resume';

const LIGHTNING_TIMEOUT = 300;

enum NAV_ITEMS {
  ABOUT_ME = 'About Me',
  RESUME = 'Resume',
  PROJECTS = 'Projects',
  LIGHTNING = 'lightning',
}

const NAV_ITEM_TO_PAGE = {
  [NAV_ITEMS.ABOUT_ME]: About,
  [NAV_ITEMS.RESUME]: Resume,
  [NAV_ITEMS.PROJECTS]: Projects,
  [NAV_ITEMS.LIGHTNING]: Lightning,
};

export { LIGHTNING_TIMEOUT, NAV_ITEMS, NAV_ITEM_TO_PAGE };
