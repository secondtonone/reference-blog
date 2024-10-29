import styled from 'styled-components';
import Link from 'next/link';
import { brUp } from '~/styles/helpers';
import SvgIcon from '~/components/containers/svg-icon';
import {
  BoxAdaptive,
  TextContent,
  Image,
  List
} from '~/components/atoms';
import { CategoryCardViewModel } from '~/view-model';
import { getScheme } from '~/styles/scheme';

const lightTheme = getScheme();

export interface ICategoryCardProps extends CategoryCardViewModel {
  isHiddenImage?: boolean,
  inSubcategory?: boolean,
}

const CategoryCard: React.FC<ICategoryCardProps> = ({
  name,
  slug,
  background,
  previewImage,
  pages,
  isHiddenImage,
  inSubcategory,
  parent
}) => {
  if (!pages?.length) return null;

  let href = '/blog/';

  if (parent?.slug || slug) {
    href = `${href}category/`;

    if (parent?.slug) href = `${href}${parent.slug}/`;

    if (slug) href = `${href}${slug}`;
  }

  return (
    <CategoryCardStyled
      data-test="category-card"
      pl={{
        _: '15px', x: 6, sm: 7, lg: '56px'
      }}
      pr={{
        _: '15px', x: 6, sm: 7, lg: previewImage ? '35px' : '56px'
      }}
      borderRadius={{ _: 0, xm: '10px' }}
      display="flex"
      flexDirection={{ _: 'column', xm: 'row-reverse' }}
      inSubcategory={inSubcategory}
    >
      {
        previewImage
          ? (
            <CategoryCardImageStyled
              data-test="category-card-image"
              display={{ _: isHiddenImage ? 'none' : 'flex', sm: 'flex' }}
              position="relative"
              justifyContent="center"
              flexShrink={{ xm: 0 }}
              borderRadius="12px"
              width={{
                _: '100%', xm: 200, sm: 220
              }}
              height={{
                _: 168, zm: 200, sm: 220
              }}
              svg={previewImage?.endsWith('svg')}
              ml={{ xm: 6, lg: '37px' }}
              backgroundColor={lightTheme[background]}
            >
              <Link href={href} passHref>
                <LinkStyled
                  data-test="category-card-image-link"
                  title={name}
                >
                  <Image
                    isLazy
                    src={previewImage}
                    alt={name}
                    height="250"
                    width="310"
                  />
                </LinkStyled>
              </Link>
            </CategoryCardImageStyled>
          ) : null
      }
      <BoxAdaptive
        mt={{ _: isHiddenImage || inSubcategory ? 0 : '32px', xm: '7px' }}
      >
        {
          name ? (
            <BoxAdaptive data-test="category-card-title">
              <TextContent
                fontSize={{ _: '20px', sm: '32px' }}
                lineHeight={{ _: '28px', sm: '38.4px' }}
                fontWeight={{ _: 'bold' }}
                level={7}
                accentFont
              >
                <Link
                  href={href}
                  passHref
                >
                  <a title={name}>
                    {name}
                  </a>

                </Link>
              </TextContent>
            </BoxAdaptive>
          ) : null
        }
        <CategoryCardListStyled
          data-test="category-card-list"
          mt={{ _: '14px', sm: '24px' }}
        >
          <List
            bullet={<SvgIcon code="bullet" size={[10, 10]} />}
            items={pages.map((item) => (
              <Link
                key={`category-card-list-${item.id}`}
                href={`/${item.url}`}
              >
                {item.title}
              </Link>
            ))}
          />
        </CategoryCardListStyled>
      </BoxAdaptive>
    </CategoryCardStyled>
  );
};

const CategoryCardStyled = styled(BoxAdaptive)<{ inSubcategory?: boolean }>`
  color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.black)};
  background-color: ${({ inSubcategory }) => (
    inSubcategory ? 'initial' : '#F6F7F8'
  )};

  padding-top: ${({ inSubcategory }) => (
    inSubcategory ? 0 : '25px'
  )};

  padding-bottom: ${({ inSubcategory }) => (
    inSubcategory ? 0 : '32px'
  )};

  ${brUp('sm', `
      padding-top: 35px;
      padding-bottom: 42px;
  `)}
`;

const CategoryCardImageStyled = styled(BoxAdaptive)<{ background?: string }>`
  background: ${({ background }) => lightTheme[background]};

  img {
    pointer-events: none;
    object-fit: ${({ svg }) => (svg ? 'contain' : 'cover')};
    display: flex;
    height: 100%;
  }
`;

const LinkStyled = styled.a<{svg?: boolean}>`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
`;

const CategoryCardListStyled = styled(BoxAdaptive)`
  ul {
    font-size: 14px !important;

    li {
      & a {
        color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.black)};
      }
    }

    li > span[data-list="bullet"] {
      width: 12px !important;
      height: 12px !important;
      top: 3px;

      & > svg {
        width: 12px !important;
        height: 12px !important;
        color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.black)};
      }
    }

    li > div[data-list="text"] {
      padding-left: 9px !important;
    }

    ${brUp('md', `
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 38px;
      row-gap: 12px;
      font-size: 16px !important;

      li > span[data-list="bullet"] {
        width: 14px !important;
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

export default CategoryCard;
