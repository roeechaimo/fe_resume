import { create } from 'zustand';
import { NAV_ITEMS } from '../components/nav/constants';

type EffectsState = {
  isLightning: boolean;
  lightningDisabled: boolean;
};

type NavigationState = {
  currentPage: NAV_ITEMS;
};

type StorageState = {
  resumeUrl: string;
};

type State = NavigationState & StorageState & EffectsState;

type NavigationActions = {
  navigate: (page: NAV_ITEMS) => void;
};

type EffectsActions = {
  setIsLightning: (showLightning: boolean) => void;
  setLightningDisabled: (disable: boolean) => void;
};

type StorageActions = {
  setResumeUrl: (url: string) => void;
};

type Actions = NavigationActions & StorageActions & EffectsActions;

export const createNavigationSlice = (
  set: (arg0: (_state: NavigationState) => { currentPage: NAV_ITEMS }) => void
) => ({
  currentPage: NAV_ITEMS.ABOUT_ME,
  navigate: (page: NAV_ITEMS) =>
    set((state) => ({ ...state, currentPage: page })),
});

export const createEffectsSlice = (
  set: (
    arg0: (_state: EffectsState) => {
      isLightning: boolean;
      lightningDisabled: boolean;
    }
  ) => void
) => ({
  isLightning: false,
  lightningDisabled: false,
  setIsLightning: (showLightning: boolean) =>
    set((state) => ({ ...state, isLightning: showLightning })),
  setLightningDisabled: (disable: boolean) =>
    set((state) => ({ ...state, lightningDisabled: disable })),
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
  ...createEffectsSlice(set),
}));
