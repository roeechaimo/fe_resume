import { ReactNode } from 'react';
import { Tooltip } from 'react-tooltip';

type TooltipProps = {
  id: string;
  text: string;
  children?: ReactNode;
};

function AppTooltip({ id, text, children }: TooltipProps) {
  return (
    <>
      <a
        data-tooltip-id={id}
        data-tooltip-content={text}
        data-tooltip-place='top'
      >
        {children}
      </a>

      <Tooltip id={id} />
    </>
  );
}

export default AppTooltip;
