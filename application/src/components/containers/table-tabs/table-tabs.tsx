import styled from 'styled-components';
import { useCallback, useState } from 'react';
import Tag from '@semcore/tag';
import Table from '@semcore/table';
import clsx from 'clsx';
import { BoxAdaptive, Container } from '~/components/atoms';

interface Props {
  tabs: string[],
  columns: string[],
  heading: string,
  subheading: string,
}

const TableTabs: React.FC<Props> = ({
  heading,
  tabs,
  columns,
  subheading
}) => {
  const [active, setActive] = useState<number>(0);

  return (
    <Container>
      <h2>{heading}</h2>
      {tabs.length > 0 && (
        <BoxAdaptive m="20px 0">
          <TabsStyled>
            {tabs?.map((tab, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`tab-${idx}`}>
                <TagStyled
                  size="l"
                  use="secondary"
                  className={clsx({ '-active': idx === active })}
                  onClick={useCallback(() => setActive(idx), [])}
                  interactive
                >
                  {tab}
                </TagStyled>
              </li>
            ))}
          </TabsStyled>
        </BoxAdaptive>
      )}
      {tabs?.map((tab, idx) => (
        <TableStyled
          /* eslint-disable-next-line react/no-array-index-key */
          key={`table-${idx}`}
          display={{ _: active === idx ? 'block' : 'none' }}
        >
          <h3 itemProp="about">{subheading}</h3>
          <Table>
            <Table.Head>
              <Table.Row>
                {columns.map((column, ColNum) => (
                  <Table.CellHead
                    key={column}
                    width={ColNum === 0 ? '70%' : 'auto'}
                    style={{ textAlign: ColNum === 0 ? 'center' : 'left' }}
                  >
                    <b>{column}</b>
                  </Table.CellHead>
                ))}
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {new Array(10).fill('').map(el => (
                <Table.Row key={el}>
                  <Table.Cell>
                    {idx}
                  </Table.Cell>
                  <Table.Cell>
                    {idx}
                  </Table.Cell>
                  <Table.Cell>
                    {idx}
                  </Table.Cell>
                  <Table.Cell>
                    {idx}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </TableStyled>
      ))}
    </Container>
  );
};

const TagStyled = styled(Tag)`
  border: none !important;
  color: rgb(69, 87, 92);

  &.-active {
    background: rgb(184, 128, 255) !important;
    color: #fff !important;
  }
`;

const TabsStyled = styled.ul`
  li {
    display: inline-block;

    + li {
      margin-left: 10px;
    }
  }
`;

const TableStyled = styled(BoxAdaptive)`
  h3 {
    margin-bottom: 15px;
  }
`;

export default TableTabs;
