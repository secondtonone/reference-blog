import styled from 'styled-components';
import SvgIcon from '~/components/containers/svg-icon';

type ArrowSide = 'up' | 'down' | 'left' | 'right';

interface Props {
  arrowSide?: ArrowSide;
  isAccent?: boolean;
}

const TooltipContent: React.FC<Props> = ({ children, isAccent = false, arrowSide = 'up' }) => (
  <TooltipContentStyled data-test="tooltip-content" isAccent={isAccent}>
    <span>{children}</span>
    <SvgIcon code="arrow" mod={`-arrow-${arrowSide}`} />
  </TooltipContentStyled>
);

const TooltipContentStyled = styled.div<{ isAccent: boolean }>`
  color: ${({ theme, isAccent = false }) => (!isAccent ? theme.opposed : theme.accentWarning)};
  background: currentColor;
  padding: 20px 42px;
  border-radius: 10px;
  max-width: 300px;
  line-height: 1.5;
  font-size: 14px;

  span {
    color: #fff;
  }

  svg {
    position: absolute;
    z-index: -1;

    &.-arrow-up {
      bottom: -10px;
      left: 40px;
      transform: rotate(180deg);
    }
    &.-arrow-down {
      top: -10px;
      right: 40px;
    }
    &.-arrow-left {
      right: 0;
      top: 20px;
      transform: rotate(90deg) translateY(-80%);
    }
    &.-arrow-right {
      left: 0;
      top: 20px;
      transform: rotate(-90deg) translateY(-80%);
    }
  }
`;

export default TooltipContent;
