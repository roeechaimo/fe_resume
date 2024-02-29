import { motion } from 'framer-motion';

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
        className='drop absolute w-px h-5 bg-blue-300'
        style={dropStyle}
        initial={{ opacity: 0, y: -120 }}
        animate={{ opacity: 1, y: '70vh' }}
        transition={{
          duration,
          delay,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
    );
  }

  return (
    <div className='rain-container absolute w-full left-0'>{dropElements}</div>
  );
};

export default Rain;
