import { AnimatePresence, motion, wrap } from 'framer-motion';
import { ReactNode, useState } from 'react';
import Box from '../box';

type CarousleProps = {
  items: ReactNode[];
  className?: React.ComponentProps<'div'>['className'];
};

//TODO: make effect smoover
const variants = {
  enter: (direction: number) => {
    return {
      y: direction > 0 ? 120 : -220,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      y: direction < 0 ? 220 : -120,
      opacity: 0,
      scale: 0.7,
      transition: {
        duration: 0.2,
      },
    };
  },
};

function Carousle({ className, items }: CarousleProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const pageIndex = wrap(0, items.length, page);

  return (
    <Box className={`carousle relative max-w-md ${className}`}>
      <Box className='flex justify-center absolute top-0'>
        <img
          className='prev hover:cursor-pointer rotate-90'
          onClick={() => paginate(-1)}
          src='./carousle/icons8-chevron-30.png'
        />
      </Box>

      <AnimatePresence
        custom={direction}
        initial={false}
      >
        <motion.div
          key={pageIndex}
          initial='enter'
          animate='center'
          exit='exit'
          custom={direction}
          variants={variants}
          transition={{
            y: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            delay: 0.3,
          }}
          className='max-w-sm flex flex-col'
        >
          {items[pageIndex]}
        </motion.div>
      </AnimatePresence>

      <Box className='flex justify-center absolute bottom-0'>
        <img
          className='next hover:cursor-pointer -rotate-90'
          onClick={() => paginate(1)}
          src='./carousle/icons8-chevron-30.png'
        />
      </Box>
    </Box>
  );
}

export default Carousle;
