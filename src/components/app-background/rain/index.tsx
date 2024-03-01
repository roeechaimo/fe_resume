import { motion } from 'framer-motion';

// const Splash = () => {
//   const splashControls = useAnimation();

//   return (
//     <AnimatePresence>
//       <motion.div
//         className='splash absolute w-4 h-4 bg-blue-300 rounded-full'
//         initial={{ scale: 0, opacity: 0 }}
//         animate={splashControls} // Set initial animation values
//         exit={{ scale: 0, opacity: 0 }} // Ensure the splash disappears after animation
//         transition={{
//           duration: 0.1,
//         }}
//       />
//     </AnimatePresence>
//   );
// };

const Rain = () => {
  const numDrops = 50; // Number of raindrops
  const dropElements = [];

  for (let i = 0; i < numDrops; i++) {
    const delay = Math.random() * 2; // Randomize delay for each drop
    const duration = 2; // Randomize duration for each drop

    // Randomize drop's position and animation
    const dropStyle = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    };

    dropElements.push(
      <motion.div
        key={i}
        className='drop absolute w-px h-5 bg-blue-300 top-5'
        style={dropStyle}
        initial={{ opacity: 0, y: -280 }}
        animate={{ opacity: 1, y: '70vh' }}
        transition={{
          duration,
          delay,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {/* //TODO: handle splash effect */}
        {/* <Splash /> */}
      </motion.div>
    );
  }

  return (
    <div className='rain-container absolute w-full left-0'>{dropElements}</div>
  );
};

export default Rain;
