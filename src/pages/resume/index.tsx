import Box from '../../components/box';
import { RESUME_ITEM } from './constants';

const Resume = () => {
  return (
    <Box>
      {Object.values(RESUME_ITEM).map((resItem) => {
        return (
          <Box
            key={resItem.title}
            className='mb-4'
          >
            <Box className='underline'>{resItem.title}</Box>

            <Box className='underline'>Summary:</Box>

            <Box className='text-xs'>{resItem.description.summary}</Box>

            <Box className='underline'>Tech stack:</Box>

            <Box className='text-xs'>
              {resItem.description.stack.map((item) => (
                <span key={item}>{`${item}, `}</span>
              ))}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Resume;
