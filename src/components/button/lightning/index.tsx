import { useStore } from '../../../store';
import LightningBolt from '../../app-background/lightning-bolt';
import Box from '../../box';
import { LIGHTNING_TIMEOUT } from '../../nav/constants';
import AppTooltip from '../../tooltip';

type LightningButtonProps = {
  text: string;
  className?: React.ComponentProps<'div'>['className'];
};

function LightningButton({ className, text }: LightningButtonProps) {
  const { setIsLightning } = useStore((state) => state);

  const toggleLigtning = () => {
    setIsLightning(true);

    setTimeout(() => {
      setIsLightning(false);
    }, LIGHTNING_TIMEOUT);
  };

  return (
    <Box className={`${className}`}>
      <AppTooltip
        id={text}
        text={text}
      >
        <LightningBolt
          width={40}
          height={40}
          color='#ffffff'
          className='border-2 border-blue-100 rounded-full hover:cursor-pointer'
          onClick={toggleLigtning}
        />
      </AppTooltip>
    </Box>
  );
}

export default LightningButton;
