import { useNavigationStore } from '../../store';
import AppTitle from '../app-title';
import Box from '../box';
import AppNavItems from '../nav';
import { NAV_ITEM_TO_PAGE } from '../nav/constants';
import PageWrapper from '../page-wrapper';

function Layout() {
  const currentPage = useNavigationStore((state) => state.currentPage);
  const pageToRender = NAV_ITEM_TO_PAGE[currentPage];

  return (
    <Box>
      <AppTitle text={"Roe'e Chaimowicz - Front-End Developer"} />

      <AppNavItems></AppNavItems>

      <PageWrapper>{pageToRender()}</PageWrapper>
    </Box>
  );
}

export default Layout;
