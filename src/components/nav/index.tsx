import { useState } from 'react';
import Box from '../box';
import { NAV_ITEMS } from './config';
import NavItem from './styled';

function AppNavItems() {
  const [selectedItem, setSelectedItem] = useState(NAV_ITEMS.ABOUT_ME);

  return (
    <nav>
      <Box className='flex justify-between pt-2'>
        {Object.values(NAV_ITEMS).map((item) => {
          return (
            <NavItem
              key={item}
              $selected={selectedItem === item}
              onClick={() => setSelectedItem(item)}
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
