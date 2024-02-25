import About from '../../pages/about';
import Projects from '../../pages/projects';
import Resume from '../../pages/resume';

enum NAV_ITEMS {
  ABOUT_ME = 'About Me',
  RESUME = 'Resume',
  PROJECTS = 'Projects',
}

const NAV_ITEM_TO_PAGE = {
  [NAV_ITEMS.ABOUT_ME]: About,
  [NAV_ITEMS.RESUME]: Resume,
  [NAV_ITEMS.PROJECTS]: Projects,
};

export { NAV_ITEMS, NAV_ITEM_TO_PAGE };
