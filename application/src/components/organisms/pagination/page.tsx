import { IButtonProps } from '@semcore/button';
import ButtonLink from '~/components/atoms/button-link';
import PaginationLink from './pagination-link';

interface Props extends IButtonProps {
  selected?: boolean,
  number: number,
  onPageClick?: (page: number) => void
  dataTest?: string
}

const Page: React.FC<Props> = ({
  number,
  selected = false,
  onPageClick,
  'data-test': dataTest,
  children,
}) => (
  <PaginationLink page={number}>
    {(url) => (
      <ButtonLink
        data-test={dataTest || 'pagination-page'}
        href={url}
        use="secondary"
        selected={selected}
        className="pagination-page"
        style={{ minWidth: 42 }}
        onClick={(e) => {
          if (onPageClick instanceof Function) {
            onPageClick(number);
          }
          e.preventDefault();
        }}
      >
        {children || number}
      </ButtonLink>
    )}
  </PaginationLink>
);

export default Page;
