import styled from 'styled-components';

import { BoxAdaptive, TextContent, Image } from '~/components/atoms';

export interface ISubcategoryHeadingProps {
  name?: string;
  description?: string;
  previewImage?: string;
}

const SubcategoryHeading: React.FC<ISubcategoryHeadingProps> = ({
  name,
  description,
  previewImage,
}) => (
  <SubcategoryHeadingStyled
    data-test="subcategory-heading"
  >
    <BoxAdaptive
      display={{ xm: 'flex' }}
    >
      <BoxAdaptive
        display="flex"
        flex="1"
        flexDirection="column"
      >
        {
          name ? (
            <TitleStyled
              data-test="subcategory-heading-name"
              fontSize={{
                _: '28px', sm: '48px'
              }}
              lineHeight={{ _: '33.6px', sm: '57.6px' }}
              mt="40px"
              maxWidth={{
                _: 250, x: 280, sm: 410, md: 480, lg: 550
              }}
              level={1}
              fontwidth={700}
            >
              {name}
            </TitleStyled>
          ) : null
        }
        {
          description ? (
            <TitleStyled
              fontSize="16px"
              lineHeight={{ _: '24px', sm: '25.6px' }}
              mt={{ _: '10px', sm: '16px' }}
              maxWidth={{
                _: 250, x: 280, xm: 380, sm: 480, lg: 550
              }}
              data-test="subcategory-heading-description"
            >
              {description}
            </TitleStyled>
          ) : null
        }
      </BoxAdaptive>
      {
        previewImage ? (
          <ImageStyled
            display={{ _: 'none', xm: 'flex' }}
            width={{
              _: '238px', sm: '278px'
            }}
            height={{
              _: '210px', sm: '240px'
            }}
            ml="10px"
            position="relative"
            svg={previewImage?.endsWith('svg')}
            data-test="subcategory-heading-image"
          >
            <Image
              data-test="image"
              src={previewImage}
              alt={name}
              width="277"
              height="240"
              isLazy
            />
          </ImageStyled>
        ) : null
      }
    </BoxAdaptive>
  </SubcategoryHeadingStyled>
);

const SubcategoryHeadingStyled = styled(BoxAdaptive)`
  color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.white)};

  & div[data-test="breadcrumbs"] {
    padding-top: 0 !important;
  }
`;

const ImageStyled = styled(BoxAdaptive)<{ svg?: boolean }>`
  img {
    pointer-events: none;
    object-fit: ${({ svg }) => (svg ? 'contain' : 'cover')};
    width: ${({ svg }) => (svg ? 'auto' : '100%')};
    height: ${({ svg }) => (svg ? 'auto' : '100%')};
    max-height: 100%;
  }
`;

const TitleStyled = styled(TextContent)`
  word-break: break-word;
  overflow-wrap: break-word;
`;

export default SubcategoryHeading;
