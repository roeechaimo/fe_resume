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
      <Box className='flex justify-between pt-2'>
        {Object.values(NAV_ITEMS).map((item) => {
          return (
            item !== NAV_ITEMS.LIGHTNING && (
              <NavItem
                key={item}
                $selected={currentPage === item}
                onClick={() => navigateToPage(item)}
              >
                {item}
              </NavItem>
            )
          );
        })}
      </Box>
    </nav>
  );
}

export default AppNavItems;
