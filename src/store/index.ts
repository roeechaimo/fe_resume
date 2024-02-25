import { create } from 'zustand';
import { NAV_ITEMS } from '../components/nav/constants';

type State = {
  currentPage: NAV_ITEMS;
};

type Actions = {
  navigate: (page: NAV_ITEMS) => void;
};

export const useNavigationStore = create<State & Actions>((set) => ({
  currentPage: NAV_ITEMS.ABOUT_ME,
  navigate: (page) => set((_state) => ({ currentPage: page })),
}));
