import LightningBolt from '../../components/app-background/lightning-bolt';
import Box from '../../components/box';

const Lightning = () => {
  return (
    <Box>
      <LightningBolt
        width={200}
        height={240}
        color='#ddcbe6'
        className='flex justify-center items-center'
      />
    </Box>
  );
};

export default Lightning;
