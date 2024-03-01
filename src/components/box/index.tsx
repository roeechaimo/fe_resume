type BoxProps = {
  children: React.ReactNode;
  className?: React.ComponentProps<'div'>['className'];
  style?: React.CSSProperties;
  onClick?: () => void;
};

function Box({ style, children, className, onClick }: BoxProps) {
  return (
    <div
      style={style}
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Box;
