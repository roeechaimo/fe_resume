type BoxProps = {
  children: React.ReactNode;
  className?: React.ComponentProps<'div'>['className'];
  style?: React.CSSProperties;
};

function Box({ style, children, className }: BoxProps) {
  return (
    <div
      style={style}
      className={className}
    >
      {children}
    </div>
  );
}

export default Box;
