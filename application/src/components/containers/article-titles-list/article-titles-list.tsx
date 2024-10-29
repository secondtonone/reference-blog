import Link from 'next/link';
import styled from 'styled-components';

import { BoxAdaptive, List, TextContent } from '~/components/atoms';
import SvgIcon from '~/components/containers/svg-icon';
import { ArticlesSubcategoryViewModel } from '~/view-model';
import { brUp } from '~/styles/helpers';

export interface IArticleTitlesListProps {
  pages?: ArticlesSubcategoryViewModel;
  title?: string;
}

const ArticleTitlesList: React.FC<IArticleTitlesListProps> = ({
  pages,
  title = 'Start explore with'
}) => (pages?.length ? (
  <ArticleTitlesListStyled
    pt={{ _: 32, sm: 38 }}
    pb={{ _: 30, sm: 42 }}
    px={{ _: 15, sm: 56 }}
    data-test="article-titles-list"
    borderRadius={{ _: 0, sm: '10px' }}
  >
    { title ? (
      <BoxAdaptive>
        <TextContent
          level={3}
          fontSize={{ _: '20px', sm: '26px' }}
          lineHeight={{ _: '31.2px', sm: '28px' }}
          fontWeight={700}
          data-test="article-titles-list-title"
        >
          {title}
        </TextContent>
      </BoxAdaptive>
    ) : null}

    <ArticleTitlesListListStyled
      data-test="article-titles-list-list"
      mt={title && { _: '20px', sm: '19px' }}
    >
      <List
        bullet={<SvgIcon code="bullet" size={[10, 10]} />}
        items={pages.map((page) => (
          <Link
            key={`article-titles-list-${page.url}-${page.title}`}
            href={`/${page.url}`}
            passHref
          >
            <a title={page.title}>
              {page.title}
            </a>
          </Link>
        ))}
      />
    </ArticleTitlesListListStyled>
  </ArticleTitlesListStyled>
) : null);

const ArticleTitlesListStyled = styled(BoxAdaptive)`
  color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.white)};
  background-color: ${({ theme }) => (theme.isLight ? '#F6F7F8' : theme.secondary2)};
`;

const ArticleTitlesListListStyled = styled(BoxAdaptive)`
  ul {
    font-size: 14px !important;

    li {
      padding-bottom: 12px !important;

      &:last-child {
        padding-bottom: 0 !important;
      }

      & a {
        color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.white)};
      }
    }

    li > span[data-list="bullet"] {
      width: 12px !important;
      height: 12px !important;
      top: 3px;

      & >  svg {
        width: 12px !important;
        height: 12px !important;
      }
    }

    li > div[data-list="text"] {
      padding-left: 9px !important;
    }

    ${brUp('md', `
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 38px;
      row-gap: 16px;
      font-size: 16px !important;
      line-height: 25.6px;

      li {
        padding-bottom: 0 !important;
      }

      li > span[data-list="bullet"] {
        width: 14px !important;;
        height: 14px !important;

        & > svg {
          width: 14px !important;
          height: 14px !important;
        }
      }

      li > div[data-list="text"] {
        padding-left: 10px !important;
      }
    `)}
  }
`;

export default ArticleTitlesList;
