import Box from '../../components/box';
import { PROJECT_LINKS } from './constants';

const Projects = () => {
  return (
    <Box className='z-10'>
      <Box className='underline flex justify-center'>
        You can Click on the relevant link
      </Box>

      {Object.values(PROJECT_LINKS).map((item) => {
        return (
          <Box
            key={item.href}
            className='flex pt-4'
          >
            <img
              src='./projects/outline_link_white_24dp.png'
              className='pe-4'
            />

            <a
              href={item.href}
              target='_blank'
            >
              {`${item.text} ->`}
            </a>
          </Box>
        );
      })}
    </Box>
  );
};

export default Projects;
