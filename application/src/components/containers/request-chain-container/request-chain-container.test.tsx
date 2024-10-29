import renderer from 'react-test-renderer';
import RequestChainContainer from '.';
import ArticlesList from '~/components/containers/articles-list';
import {
  ArticlesViewModel, CategoryViewModel
} from '~/view-model';
import PageMainArticles from '~/constants/page-main-articles';

describe('Match snapshots RequestContainer', () => {
  it('default', () => {
    const subdomain = 'en';

    const tree = renderer.create(
      <RequestChainContainer
        chain={[{
          method: 'pages',
          params: {
            limit: 6,
            categoryId: PageMainArticles[subdomain].seo,
            subdomain
          }
        }, {
          method: 'category',
          params: { slug: 'seo', params: { subdomain } }
        }]}
        // @ts-ignore
        data={[]}
      >
        {([
          articlesSeoRequested,
          { data: tagsSeoRequested }
        ]) => (articlesSeoRequested?.data ? (
          <ArticlesList
            cardsShow={3}
            largeCount={0}
            articles={articlesSeoRequested.data as ArticlesViewModel}
            data-test="articles-list-seo"
            category={(tagsSeoRequested as CategoryViewModel)?.name ?? ''}
            categorySlug="seo"
            anchor="articles-seo"
            tags={(tagsSeoRequested as CategoryViewModel)?.children}
          />
        ) : null)}
      </RequestChainContainer>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
