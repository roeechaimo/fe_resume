import Carousle from '../../components/carousel';
import ResumeItem from './ResumeItem';
import { RESUME_ITEM } from './constants';

const Resume = () => {
  const resumeItems = Object.values(RESUME_ITEM).map((resItem) => (
    <ResumeItem
      key={resItem.title}
      title={resItem.title}
      description={resItem.description}
      className='mb-4 text-center'
    />
  ));

  return (
    <Carousle
      items={resumeItems}
      className='text-center flex flex-col h-80 items-center justify-center m-auto'
    />
  );
};

export default Resume;
