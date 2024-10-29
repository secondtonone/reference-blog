import styled from 'styled-components';

import Bar from '~/components/containers/bottom-bar';
import {
  Button, TextContent
} from '~/components/atoms';

const TITLE = 'Table of contents';

interface BottomBarProps {
  isExpanded: boolean
  onClick: () => void
}

const BottomBar: React.FC<BottomBarProps> = ({
  children,
  isExpanded,
  onClick
}) => (
  <Bar
    data-test="table-of-content"
    flexDirection="column"
  >
    {children}
    <ButtonTextStyled
      data-test="table-of-content-toggle"
      isExpanded={isExpanded}
    >
      <Button
        use="secondary"
        internal
        onClick={onClick}
        wide
      >
        <TextContent
          fontSize={{ _: 1, sm: 2 }}
          width={{ _: 204, sm: 139 }}
        >
          {TITLE}
        </TextContent>
      </Button>
    </ButtonTextStyled>
  </Bar>
);

const ButtonTextStyled = styled.div<{isExpanded: boolean}>`
  & {
    width: 100%;
    margin: 0 auto;
    @media (min-width: 500px) {
      width: 50%;
    }
  }
  & > span[data-test] > button {
    color: ${({ theme, isExpanded }) => (isExpanded ? theme.black : theme.white)} !important;
    background-color: ${({ theme, isExpanded }) => (isExpanded ? theme.white : 'transparent')} !important;
  }

  & > span[data-test] > button:active,
  & > span[data-test] > button:hover {
    background-color: ${({ theme, isExpanded }) => (isExpanded ? theme.white : 'transparent')} !important;
    border-color: ${({ theme }) => theme.white} !important;
    color: ${({ theme, isExpanded }) => (isExpanded ? theme.black : theme.white)} !important;
  }
`;

export default BottomBar;
