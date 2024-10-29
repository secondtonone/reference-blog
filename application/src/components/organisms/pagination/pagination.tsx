import styled from 'styled-components';
import PaginationContainer from 'rc-pagination';
import Page from './page';
import BoxAdaptive from '~/components/atoms/box-adaptive';
import { brUp } from '~/styles/helpers';

interface Props {
  pageActive: number,
  itemsCount: number,
  perPage: number,
  onPageClick: (page: number, pageSize: number) => void,
  short?: boolean
}

const Pagination: React.FC<Props> = ({
  pageActive,
  onPageClick,
  itemsCount,
  perPage,
  short
}) => (
  <PaginationStyled
    data-test="pagination-controls"
  >
    <PaginationContainer
      onChange={onPageClick}
      current={pageActive}
      defaultCurrent={3}
      total={itemsCount}
      pageSize={perPage}
      showTitle={false}
      showLessItems={short}
      itemRender={(page, code) => {
        const EMPTY = (
          <PageEmptyStyled
            width={{ sm: 30, lg: 41.5 }}
            height="100%"
            data-test="pagination-page-empty"
            key={`page-empty-${page}`}
          >
            ...
          </PageEmptyStyled>
        );

        const isActive = pageActive === page;

        const Element = {
          'jump-prev': EMPTY,
          'jump-next': EMPTY,
          page: (
            <Page
              data-test={isActive ? 'pagination-page-selected' : ''}
              number={page}
              selected={isActive}
            />
          )
        };

        return Element[code];
      }}
    />
  </PaginationStyled>
);

const PaginationStyled = styled(BoxAdaptive)`
  * + * {
    margin-right: 9.5px;
    ${brUp('x', `
      margin-right: 0;
    `)}
    ${brUp('sm', `
      margin-right: 13.5px;
    `)}
  }

  ul {
    list-style-type: none;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  li {
    display: flex;
  }

  .rc-pagination-disabled,
  .rc-pagination-prev,
  .rc-pagination-next,
  .rc-pagination-options {
    display: none;
  }

  button {
    min-width: 42px !important;
  }
`;

const PageEmptyStyled = styled(BoxAdaptive)`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.opposed};
  justify-content: center;
`;

export default Pagination;
