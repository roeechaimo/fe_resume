import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledWrapper = styled.div<{ $hide: boolean }>`
  display: ${(props) => (props.$hide ? 'none' : 'block')};
  // display: none;
  animation: ${fadeIn} 0.2s ease-in-out;
`;

export default StyledWrapper;
