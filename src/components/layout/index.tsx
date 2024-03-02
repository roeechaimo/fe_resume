import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '../../store';
import Lightning from '../app-background/lightning';
import Rain from '../app-background/rain';
import AppTitle from '../app-title';
import Box from '../box';
import LightningButton from '../button/lightning';
import Footer from '../footer';
import AppNavItems from '../nav';
import { NAV_ITEM_TO_PAGE } from '../nav/constants';
import PageWrapper from '../page-wrapper';
import { DISABLE_LIGHTNING_MAPPING } from './constants';

function Layout() {
  const { currentPage, lightningDisabled } = useStore((state) => state);
  const pageToRender = NAV_ITEM_TO_PAGE[currentPage];

  const isDisabled = lightningDisabled.toString() as 'true' | 'false';

  return (
    <Box>
      <Lightning />

      <Rain />

      <motion.div
        key='lightningButton'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 4 }}
      >
        <LightningButton
          className='absolute top-20 right-0 left-0 flex justify-center max-sm:top-10'
          text={`Click to turn ${DISABLE_LIGHTNING_MAPPING[isDisabled]}`}
        />
      </motion.div>

      <AppTitle text="Roe'e Chaimowicz - Front-End Developer" />

      <AnimatePresence>
        <motion.div
          key='content'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 4 }}
        >
          <AppNavItems></AppNavItems>

          <PageWrapper>{pageToRender()}</PageWrapper>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}

export default Layout;
