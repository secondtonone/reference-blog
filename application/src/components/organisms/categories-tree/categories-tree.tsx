import styled from 'styled-components';
import Link from 'next/link';
import {
  CategoriesTreeViewModel
} from '~/view-model';

import {
  BoxAdaptive,
  TextContent,
} from '~/components/atoms';

import { getScheme } from '~/styles/scheme';

const darkTheme = getScheme(true);

interface CategoriesTreeProps {
  tree: CategoriesTreeViewModel
  internal?: boolean
  leveled?: boolean
}

const CategoriesTree: React.FC<CategoriesTreeProps> = ({ tree, internal, leveled }) => (
  <>
    {tree?.map(({
      slug,
      name,
      children,
      id,
      lang
    }) => {
      const pathPrefix = '/blog/category';
      const parentPath = `${pathPrefix}/${slug}`;
      const cacheForceKey = `${leveled ? '?cache=no' : ''}`;

      return (
        <Category key={`category-tree-${lang}-${slug}-${id}`} pt={{ _: 24, xm: 32, md: 40 }} data-test="category">
          <TextContent
            fontSize={{ _: 3, xm: 11 }}
            lineHeight={1.2}
            fontWeight={{ _: 500 }}
            as="h3"
          >
            <Link href={`${parentPath}${cacheForceKey}`}><a data-test="category-link">{name}</a></Link>
          </TextContent>
          <BoxAdaptive data-test="subcategories" width={{ _: 235, xm: '100%' }}>
            {children.map(subcategory => (
              <TextContent
                key={`subcategory-${subcategory.slug}`}
                fontSize={2}
                fontFamily="Inter"
                fontWeight={{ _: 400 }}
                lineHeight={1.5}
                pt={{ _: 2, md: 16 }}
                pr={6}
                display={{ _: 'block', sm: 'inline-block' }}
              >
                <Link href={`${leveled ? parentPath : pathPrefix}/${subcategory.slug}${cacheForceKey}`}>
                  <a data-test="subcategory-link">
                    <SubcategoryName internal={internal}>
                      {subcategory.name}
                    </SubcategoryName>
                  </a>
                </Link>
              </TextContent>
            ))}
          </BoxAdaptive>
        </Category>
      );
    })}
  </>
);

const SubcategoryName = styled.span<{ internal?: boolean }>`
  color: ${({ theme, internal }) => (internal ? darkTheme.secondary4 : theme.secondary5)};
`;

const Category = styled(BoxAdaptive)`
  &:first-child {
    padding-top: 0;
  }
`;

export default CategoriesTree;
