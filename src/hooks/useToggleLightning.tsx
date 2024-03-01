import { LIGHTNING_TIMEOUT } from '../components/nav/constants';
import { useStore } from '../store';

const useToggleLightning = () => {
  const { setIsLightning } = useStore((state) => state);

  const toggleLightning = () => {
    setIsLightning(true);

    setTimeout(() => {
      setIsLightning(false);
    }, LIGHTNING_TIMEOUT);
  };

  return { toggleLightning };
};

export default useToggleLightning;
