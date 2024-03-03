import Box from '../../components/box';
import { ResumeItemStack } from './types';

type StackItemProps = ResumeItemStack;

const StackItem = ({ text, image }: StackItemProps) => {
  return (
    <Box className='flex items-center'>
      <Box className='flex  items-center w-full px-2'>
        <img
          src='./resume/icons8-code-32.png'
          className='max-h-10 max-w-10 mr-2'
        />

        <span>{`${text}, `}</span>
      </Box>
    </Box>
  );
};

export default StackItem;
