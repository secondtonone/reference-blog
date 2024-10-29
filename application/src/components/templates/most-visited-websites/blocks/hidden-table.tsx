import styled from 'styled-components';

import formatNum from '~/components/templates/most-visited-websites/utils/format-num';

import VisitsRecord from '~/components/templates/most-visited-websites/view-model/visits-record.view-model';
import Industry from '~/components/templates/most-visited-websites/enums/industy';

interface Props {
    category: Industry;
    data: VisitsRecord[];
}

const HiddenTable = ({ category, data }: Props): JSX.Element => (
  <StyledHiddenTable>
    <h3>
      The Most Visited Websites – US,
      {category}
      {' '}
      Category
    </h3>
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Domain</th>
          <th>Monthly traffic</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={item.domain}>
            <td>{idx + 1}</td>
            <td>{item.domain}</td>
            <td>{formatNum(Number(item.visits), { fractionCount: 1 })}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </StyledHiddenTable>
);

const StyledHiddenTable = styled.div`
    position: absolute;
    top: auto;
    left: -10000px;
    overflow: hidden;
`;

export default HiddenTable;
