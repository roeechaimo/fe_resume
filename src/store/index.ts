import { create } from 'zustand';
import { NAV_ITEMS } from '../components/nav/constants';

type NavigationState = {
  currentPage: NAV_ITEMS;
};

type StorageState = {
  resumeUrl: string;
};

type State = NavigationState & StorageState;

type NavigationActions = {
  navigate: (page: NAV_ITEMS) => void;
};

type StorageActions = {
  setResumeUrl: (url: string) => void;
};

type Actions = NavigationActions & StorageActions;

export const createNavigationSlice = (
  set: (arg0: (_state: NavigationState) => { currentPage: NAV_ITEMS }) => void
) => ({
  currentPage: NAV_ITEMS.ABOUT_ME,
  navigate: (page: NAV_ITEMS) => set((_state) => ({ currentPage: page })),
});

export const createStorageSlice = (
  set: (arg0: (_state: any) => { resumeUrl: string }) => void
) => ({
  resumeUrl: '',
  setResumeUrl: (url: string) => set((_state) => ({ resumeUrl: url })),
});

export const useStore = create<State & Actions>((set) => ({
  ...createNavigationSlice(set),
  ...createStorageSlice(set),
}));

// export const useNavigationStore = create<NavigationState & NavigationActions>(
//   (set) => ({
//     currentPage: NAV_ITEMS.ABOUT_ME,
//     navigate: (page) => set((_state) => ({ currentPage: page })),
//   })
// );

// export const useStorageStore = create<StorageState & StorageActions>((set) => ({
//   resumeUrl: '',
//   setResumeUrl: (url) => set((_state) => ({ resumeUrl: url })),
// }));
