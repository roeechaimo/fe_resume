import useToggleLightning from '../../../hooks/useToggleLightning';
import LightningBolt from '../../app-background/lightning-bolt';
import Box from '../../box';
import AppTooltip from '../../tooltip';

type LightningButtonProps = {
  text: string;
  className?: React.ComponentProps<'div'>['className'];
};

function LightningButton({ className, text }: LightningButtonProps) {
  const { toggleLightning } = useToggleLightning();

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
          onClick={toggleLightning}
        />
      </AppTooltip>
    </Box>
  );
}

export default LightningButton;
