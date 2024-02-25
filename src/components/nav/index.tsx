import { useNavigationStore } from '../../store';
import Box from '../box';
import { NAV_ITEMS } from './constants';
import NavItem from './styled';

function AppNavItems() {
  const { currentPage, navigate } = useNavigationStore((state) => state);

  return (
    <nav>
      <Box className='flex justify-between pt-2'>
        {Object.values(NAV_ITEMS).map((item) => {
          return (
            <NavItem
              key={item}
              $selected={currentPage === item}
              onClick={() => navigate(item)}
            >
              {item}
            </NavItem>
          );
        })}
      </Box>
    </nav>
  );
}

export default AppNavItems;
