import styled from 'styled-components';
import { Hint, IHintProps } from '@semcore/typography';

const hintSelector = 'SHint';

const Container = styled.span<{ currentColor?: boolean }>`
  display: inline;

  & abbr[class*="${hintSelector}"] {
    color: ${({ theme, currentColor }) => (currentColor ? 'currentColor' : (theme.isLight ? theme.opposed : theme.secondary5))} !important;
  }
  & abbr[class*="${hintSelector}"]:hover {
    color: ${({ theme }) => theme.orangeBrand} !important;
  }
`;

interface CustomHintProps extends IHintProps {
  currentColor?: boolean;
  onClick?: () => void
}

const CustomHint: React.FC<CustomHintProps & React.HTMLAttributes<HTMLElement>> = ({
  children,
  addon,
  currentColor,
  onClick,
  'data-test': dataTest,
  ...props
}) => (
  <Container data-test={dataTest} currentColor={currentColor} onClick={onClick}>
    <Hint {...props}>
      {addon && <Hint.Addon>{addon}</Hint.Addon>}
      <Hint.Text>{children}</Hint.Text>
    </Hint>
  </Container>
);

export default CustomHint;
