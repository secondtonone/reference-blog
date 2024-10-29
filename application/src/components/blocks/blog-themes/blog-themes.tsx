import styled from 'styled-components';
import Link from 'next/link';
import { Container, BoxAdaptive, TextContent } from '~/components/atoms';
import { fontWeights } from '~/styles/scheme';
import { CategoryViewModel } from '~/view-model';
import { brUp } from '~/styles/helpers';

interface Props {
  categories: CategoryViewModel[],
  heading: string
}

const BlogThemes: React.FC<Props> = ({ categories, heading }) => (
  <ThemesStyled
    p={{
      _: '44px 0 39px',
      sm: '65px 0 64px',
      lg: '65px 0 61px',
    }}
    data-test="blog-themes"
  >
    <Container>
      <TextContent
        fontSize={{ _: 2, sm: 5 }}
        fontWeight={{ _: 'light' }}
        lineHeight={1}
        data-test="themes-heading"
      >
        {heading}
      </TextContent>
      {categories.length > 0 && (
        <TextContent
          accentFont
          fontSize={{ _: 6, sm: 16 }}
          as="div"
          data-test="themes-links"
          m="0 5px"
        >
          <CategoriesStyled data-test="blog-themes">
            {categories.map(category => (
              <CategoryStyled
                key={category.slug}
              >
                <Link href={`/blog/category/${category.slug}`}>
                  <a data-test="themes-link">{category.name}</a>
                </Link>
              </CategoryStyled>
            ))}
          </CategoriesStyled>
        </TextContent>
      )}
    </Container>
  </ThemesStyled>
);

const ThemesStyled = styled(BoxAdaptive)`
  background: ${({ theme }) => theme.orangeBrand};
  color: ${({ theme }) => theme.white};
`;

const CategoriesStyled = styled.ul`
  list-style-type: none;
  font-weight: ${fontWeights.accent};
  margin-top: 17px;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -5px;

  ${brUp('x', `
    max-width: 100%;
  `)}

   ${brUp('md', `
    margin-right: 0;
    margin-top: 18px;
  `)}
`;

const CategoryStyled = styled.li`
  display: inline-block;
  margin-right: 24px;
  line-height: 1.35;
  margin-top: 12px;
  letter-spacing: 0.2px;

  ${brUp('sm', `
    margin-top: 12px;
  `)}

  ${brUp('md', `
    margin-right: 42px;
  `)}

  a {
    position: relative;
    padding-bottom: 2px;

    &:before {
      content: '';
      position: absolute;
      height: 2px;
      background: ${({ theme }) => theme.white};
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      visibility: hidden;
    }
  }

  &:hover a:before {
    visibility: visible;
    transition: .25s visibility;
  }
`;

export default BlogThemes;
