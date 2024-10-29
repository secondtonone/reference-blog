import styled from 'styled-components';

import ArrowUpXS from '@semcore/icon/lib/ArrowUp/xs';
import ArrowDownXS from '@semcore/icon/lib/ArrowDown/xs';

const Diff = ({ value }) => {
  const isPositive = value > 0;

  return (
    <StyledDiff isPositive={isPositive}>
      {isPositive ? <ArrowUpXS mr={1} /> : <ArrowDownXS mr={1} />}
      {Math.abs(value)}
      %
    </StyledDiff>
  );
};

const StyledDiff = styled.span<{ isPositive: boolean }>`
  margin-left: 8px;
  color: ${({ isPositive }) => (isPositive ? '#00BA96' : '#F51A38')}
`;

export default Diff;
