import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '../../../store';

const Lightning = () => {
  const { isLightning } = useStore((state) => state);

  return (
    <div className='lightning-container absolute w-full h-full left-0 top-0 z-0'>
      <AnimatePresence>
        {isLightning && (
          <motion.div
            key='lightning'
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'white',
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lightning;
