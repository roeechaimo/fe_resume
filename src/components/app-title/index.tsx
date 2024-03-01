import TypingAnimation from '../../animations/typing';

type TitleProps = {
  text: string;
};

function AppTitle({ text }: TitleProps) {
  return (
    <TypingAnimation
      text={text}
      charDelay={0.1}
      charDuration={0.1}
    />
  );
}

export default AppTitle;
