import Link from 'next/link';
import styled from 'styled-components';
import { BoxAdaptive, TextContent } from '~/components/atoms';
import SvgIcon from '~/components/containers/svg-icon';

import { CategoryViewModel } from '~/view-model';

interface Props {
  isHot: boolean,
  isLarge?: boolean,
  category?: CategoryViewModel,
  timeToRead?: number,
  onlyText?: boolean
}

const PostCardCategory: React.FC<Props> = (
  {
    isHot,
    isLarge,
    category,
    timeToRead = null
  }
) => (
  <BoxAdaptive
    as="div"
    fontSize={2}
    mb={!timeToRead ? 3 : 0}
  >
    <DetailsStyled>
      {isHot && (
        <IconStyled
          width={{ _: 12, sm: 14 }}
          height={{ _: 14, sm: 17 }}
          mr={{ _: 3, sm: isLarge ? 5 : 4 }}
          ml={{ _: 1 }}
        >
          <SvgIcon code="ogonek" />
        </IconStyled>
      )}
      {category?.name && (
        <CategoryStyled
          fontSize={{ _: 1, sm: 2 }}
          level={0}
          data-test="category"
          lineHeight="15px"
          mr={{ _: 3, sm: 4 }}
        >
          {
            category?.slug ? (
              <Link href={`/blog/category/${category.slug}`}>
                <a target="_blank">
                  {category.name}
                </a>
              </Link>
            ) : category.name
          }
        </CategoryStyled>
      )}
      <TimeToReadStyled
        display="flex"
      >
        {timeToRead && (
          <TextContent
            fontWeight={{ _: 'normal' }}
            fontSize={{ _: 1, sm: 2 }}
            data-test="time-to-read"
          >
            {timeToRead}
            {' '}
            min read
          </TextContent>
        )}
      </TimeToReadStyled>
    </DetailsStyled>
  </BoxAdaptive>
);

const TimeToReadStyled = styled(BoxAdaptive)`
  color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.secondary3)};
`;

const IconStyled = styled(BoxAdaptive)`
  color: ${({ theme }) => (theme.orangeBrand)};
`;

const DetailsStyled = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryStyled = styled(TextContent)`
  white-space: nowrap;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.secondary5)};
`;

export default PostCardCategory;
