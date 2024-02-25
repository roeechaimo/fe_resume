import Box from '../box';
import { FooterItem } from '../footer/types';

type ImageButtonProps = {
  data: FooterItem;
};

function ImageButton({ data }: ImageButtonProps) {
  return (
    <Box className='p-1.5 border border-transparent rounded-sm transition linear delay-150 hover:border-yellow-50 hover:duration-400'>
      <a
        href={data.href}
        target='_blank'
      >
        <Box className='bg-white rounded-sm'>
          <img src={data.imageSrc} />
        </Box>
      </a>
    </Box>
  );
}

export default ImageButton;
