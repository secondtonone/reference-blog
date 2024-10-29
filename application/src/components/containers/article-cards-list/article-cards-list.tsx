import styled from 'styled-components';

import { BoxAdaptive } from '~/components/atoms';
import ArticleCard, { IArticleCardProps } from '~/components/organisms/article-card';
import { brUp } from '~/styles/helpers';

export interface IArticleCardsListProps {
  articles?: IArticleCardProps[];
  renderEmpty?: () => React.ReactNode,
}

const ArticleCardsList: React.FC<IArticleCardsListProps> = ({ articles, renderEmpty }) => (
  <BoxAdaptive
    data-test="article-cards-list"
    display="flex"
    flexWrap="wrap"
    flexDirection={{ _: 'column', xm: 'row' }}
    mt={{ _: '-24px', md: '-41px' }}
  >
    { !articles || articles.length === 0 ? typeof renderEmpty === 'function' && renderEmpty()
      : articles?.map((article) => (
        <ArticleCardStyled
          key={article.id}
          width={{ _: '100%', xm: '50%' }}
          data-test="article-cards-list-item"
          mt={{ _: '24px', md: '41px' }}
        >
          <ArticleCard {...article} />
        </ArticleCardStyled>
      ))}
  </BoxAdaptive>
);

const ArticleCardStyled = styled(BoxAdaptive)`
  ${brUp('xm', `
    &:nth-child(odd) {
      padding-right: 20px;
    }

    &:nth-child(even) {
      padding-left: 20px;
    }
  `)}
`;

export default ArticleCardsList;
