import Heading from './atoms/heading';
import { Columns, Column, BoxAdaptive, Button, Container } from '~/components/atoms';
import { Pagination } from '~/components/organisms';
import { usePagination } from '~/hooks';

export default {
  title: 'Styleguide/page-navigation',
};

export const PageNavigation = () => {
  const { pageActive, onPageClick, itemsCount, perPage, maxPage, nextPage } = usePagination(
    1200,
    6
  );

  return (
    <Container>
      <Columns>
        <Column width={1}>
          <Heading>Page navigation</Heading>
          <BoxAdaptive
            mt={{ _: 60, sm: 65, lg: 60 }}
            display={{ _: 'block', sm: 'flex' }}
            justifyContent={{ sm: 'space-between' }}
          >
            <Button
              wide
              use="secondary"
              disabled={nextPage > maxPage}
              onClick={() => {
                if (nextPage <= maxPage) {
                  onPageClick(pageActive + 1);
                }
              }}
            >
              Load more articles
            </Button>
            <BoxAdaptive mt={{ _: 6, sm: 0 }} ml={{ sm: 40 }}>
              <Pagination
                pageActive={pageActive}
                itemsCount={itemsCount}
                perPage={perPage}
                onPageClick={onPageClick}
              />
            </BoxAdaptive>
          </BoxAdaptive>
          <br />
          <br />
        </Column>
        <Column width={1}>
          <Button use="secondary" w="100%">
            Load more
          </Button>
          <br />
          <br />
          <Button use="primary" w="100%" loading>
            Load more
          </Button>
          <br />
          <br />
          <Button use="secondary" w="100%" loading>
            Load more
          </Button>
          <br />
          <br />
          <Button use="primary" w="100%" loading disabled>
            Load more
          </Button>
          <br />
          <br />
          <Button use="secondary" w="100%" loading disabled>
            Load more
          </Button>
          <br />
          <br />
          <Button use="tertiary" w="100%" loading>
            Load more
          </Button>
          <br />
          <br />
        </Column>
      </Columns>
    </Container>
  );
};

PageNavigation.storyName = 'page-navigation';
