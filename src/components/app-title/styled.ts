import { motion } from 'framer-motion';
import styled from 'styled-components';

const Title = styled(motion.h1)<{ $size?: string }>`
  font-size: 1.2em;
  text-align: center;
  font-weight: 600;
  margin: auto;
  max-width: ${(props) => {
    return props.$size ? `${props.$size}` : 'initial';
  }};
`;

export default Title;
