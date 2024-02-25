import Title from './styled';

type TitleProps = {
  text: string;
};

function AppTitle({ text }: TitleProps) {
  return <Title>{text}</Title>;
}

export default AppTitle;
