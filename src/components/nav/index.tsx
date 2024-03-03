import { AnimatePresence, motion } from 'framer-motion';
import useToggleLightning from '../../hooks/useToggleLightning';
import { useStore } from '../../store';
import Box from '../box';
import { LIGHTNING_TIMEOUT, NAV_ITEMS } from './constants';
import NavItem from './styled';

function AppNavItems() {
  const { currentPage, navigate, lightningDisabled } = useStore(
    (state) => state
  );
  const { toggleLightning } = useToggleLightning();

  const navigateToPage = (item: NAV_ITEMS) => {
    if (!lightningDisabled) {
      navigate(NAV_ITEMS.LIGHTNING);

      setTimeout(() => {
        navigate(item);

        !lightningDisabled && toggleLightning();
      }, LIGHTNING_TIMEOUT);
    } else {
      navigate(item);
    }
  };

  return (
    <nav className='z-10 relative'>
      <Box className='flex justify-between mt-2 items-center bg-blue-300 opacity-70 border-1 border-blue-300 rounded text-indigo-900'>
        {Object.values(NAV_ITEMS).map((item) => {
          const isSelected = currentPage === item;

          return (
            item !== NAV_ITEMS.LIGHTNING && (
              <AnimatePresence key={item}>
                <motion.div
                  key='nav-item'
                  initial={{ scale: 0.8 }}
                  animate={isSelected ? { scale: 1 } : { scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <NavItem
                    $selected={isSelected}
                    onClick={() => navigateToPage(item)}
                  >
                    {item}
                  </NavItem>
                </motion.div>
              </AnimatePresence>
            )
          );
        })}
      </Box>
    </nav>
  );
}

export default AppNavItems;
