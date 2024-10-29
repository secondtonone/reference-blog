import FlameTooltip from '@flame/tooltip';
import TooltipContent from '../tooltip-content';

export interface Props {
  content?: React.ReactNode;
  isAccent?: boolean;
  isOpen?: boolean;
  direction?: string;
  distance?: number
}

const Tooltip: React.FC<Props> = props => {
  const {
    direction = 'top-start',
    distance = 18,
    isAccent,
    content,
  } = props;

  return (
    <FlameTooltip
      data-test="tooltip"
      {...props}
      arrowSize={10}
      padding={0}
      distance={distance}
      direction={direction}
      tagName="span"
      renderContent={side => (
        <TooltipContent isAccent={isAccent} arrowSide={side}>
          {content}
        </TooltipContent>
      )}
    />
  );
};

export default Tooltip;
