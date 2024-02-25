import Box from '../box';
import ImageButton from '../image-button';
import { FOOTER_ITEMS } from './constants';

function Footer() {
  return (
    <footer className='absolute flex justify-center bottom-40 left-0 right-0'>
      {Object.values(FOOTER_ITEMS).map((item) => {
        return (
          <Box
            key={item.imageSrc}
            className='m-4'
          >
            <ImageButton data={item} />
          </Box>
        );
      })}
    </footer>
  );
}

export default Footer;
