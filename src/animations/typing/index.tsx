import { motion } from 'framer-motion';
import React from 'react';
import Title from '../../components/app-title/styled';

type TypingAnimationProps = {
  text: string; // Text to be animated
  charDelay: number; // Delay between each character animation (milliseconds)
  charDuration: number; // Duration of individual character animation (seconds)
};

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  charDelay,
  charDuration,
}) => {
  const splitText = text.split('');

  return (
    <Title
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      $size='16rem'
    >
      {splitText.map((char, index) => (
        <motion.span
          key={index}
          className='character'
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: index * charDelay, duration: charDuration }}
        >
          {char}
        </motion.span>
      ))}
    </Title>
  );
};

export default TypingAnimation;
