import { useEffect, useState } from 'react';
import { useStore } from '../../store';
import Box from '../box';
import ImageButton from '../image-button';
import { FOOTER_ITEMS } from './constants';

function Footer() {
  const [footerItems, setFooterItems] = useState(FOOTER_ITEMS);
  const resumeUrl = useStore((state) => state.resumeUrl);

  useEffect(() => {
    const items = { ...footerItems };
    items.RESUME.href = resumeUrl;

    setFooterItems(items);
  }, [resumeUrl]);

  return (
    <footer className='absolute bottom-40 max-sm:bottom-16 left-0 right-0'>
      <Box className='flex justify-center'>
        {Object.values(footerItems).map((item) => {
          return (
            <Box
              key={item.imageSrc}
              className='m-4'
            >
              <ImageButton data={item} />
            </Box>
          );
        })}
      </Box>

      <Box className='text-xs'>
        <span>Icons by </span>
        <a
          target='_blank'
          href='https://icons8.com'
        >
          Icons8
        </a>
      </Box>
    </footer>
  );
}

export default Footer;
