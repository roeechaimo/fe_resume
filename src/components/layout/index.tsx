import { useStore } from '../../store';
import Lightning from '../app-background/lightning';
import Rain from '../app-background/rain';
import AppTitle from '../app-title';
import Box from '../box';
import Footer from '../footer';
import AppNavItems from '../nav';
import { NAV_ITEM_TO_PAGE } from '../nav/constants';
import PageWrapper from '../page-wrapper';

function Layout() {
  const currentPage = useStore((state) => state.currentPage);
  const pageToRender = NAV_ITEM_TO_PAGE[currentPage];

  return (
    <Box>
      <Lightning />

      <Rain />

      <AppTitle text={"Roe'e Chaimowicz - Front-End Developer"} />

      <AppNavItems></AppNavItems>

      <PageWrapper>{pageToRender()}</PageWrapper>

      <Footer />
    </Box>
  );
}

export default Layout;
