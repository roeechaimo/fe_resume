import { ReactNode, useEffect, useState } from 'react';
import Box from '../box';
import StyledWrapper from './styled';

type PageProps = {
  children: ReactNode;
};

const PageWrapper = ({ children }: PageProps) => {
  const [hideWrapper, setHideWrapper] = useState<boolean>(true);

  useEffect(() => {
    setHideWrapper(true);

    setTimeout(() => setHideWrapper(false), 100);
  }, [children]);

  return (
    <StyledWrapper $hide={hideWrapper}>
      <Box className='page-wrapper flex flex-col text-start pt-2 h-96'>
        {children}
      </Box>
    </StyledWrapper>
  );
};
export default PageWrapper;
