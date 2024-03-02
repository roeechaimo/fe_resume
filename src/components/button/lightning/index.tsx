import { motion } from 'framer-motion';
import useToggleLightning from '../../../hooks/useToggleLightning';
import { useStore } from '../../../store';
import LightningBolt from '../../app-background/lightning-bolt';
import Box from '../../box';
import AppTooltip from '../../tooltip';

type LightningButtonProps = {
  text: string;
  className?: React.ComponentProps<'div'>['className'];
};

function LightningButton({ className, text }: LightningButtonProps) {
  const { setLightningDisabled, lightningDisabled } = useStore();
  const { toggleLightning } = useToggleLightning();

  const onButtonClick = () => {
    if (lightningDisabled) {
      toggleLightning();
    }

    setLightningDisabled(!lightningDisabled);
  };

  return (
    <Box className={`${className}`}>
      <motion.div
        key='button'
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 0.6, delay: 5, repeat: Infinity }}
      >
        <AppTooltip
          id={text}
          text={text}
        >
          <LightningBolt
            width={40}
            height={40}
            color={`${lightningDisabled ? 'bg-blue-100' : '#ffffff'}`}
            className={`border-2 border-blue-100 rounded-full hover:cursor-pointer ${
              lightningDisabled ? 'bg-blue-100' : 'transparent'
            } ${lightningDisabled && 'opacity-25'}`}
            onClick={onButtonClick}
          />
        </AppTooltip>
      </motion.div>
    </Box>
  );
}

export default LightningButton;
