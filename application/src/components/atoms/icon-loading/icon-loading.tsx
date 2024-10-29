import styled, { keyframes } from 'styled-components';
import Circle from './path';

interface Props {
  internal?: boolean
}

const IconLoading: React.FC<Props> = ({ internal = false }) => (
  <SpinStyled data-test="icon-loading" internal={internal} />
);

const SpinAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

const getIcon = (int, scheme) => Circle[!int && !scheme ? 'dark' : 'light'];

const SpinStyled = styled.div<{ internal?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px !important;
  height: 22px !important;
  animation: ${SpinAnimation} 0.75s infinite linear;
  background-repeat: no-repeat;
  background-size: contain;
  background-image:
    url(data:image/svg+xml;base64, ${({ theme, internal }) => getIcon(internal, theme.isDark)});
`;

export default IconLoading;
