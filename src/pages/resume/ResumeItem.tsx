import Box from '../../components/box';
import StackItem from './StackItem';
import { ResumeItem as ResumeItemType } from './types';

type ResumeItemProps = ResumeItemType & {
  className?: React.ComponentProps<'div'>['className'];
};

const ResumeItem = ({ title, description, className }: ResumeItemProps) => {
  return (
    <Box className={className}>
      <Box className='underline'>{title}</Box>

      <Box className='text-xs'>{description.summary}</Box>

      <Box className='text-xs grid grid-cols-2 mt-2'>
        {description.stack.map((item, index) => (
          <StackItem
            key={index}
            text={item.text}
            image={item.image}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ResumeItem;
