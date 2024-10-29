import styled from 'styled-components';
import { BoxAdaptive } from '~/components/atoms';
import EbookWidget from '~/components/organisms/ebook-widget';

export interface EbooksPromoProps {
  slug: string
}

const EbooksPromo: React.FC<EbooksPromoProps> = ({
  slug
}) => (
  <Container
    data-test="ebooks-promo-widget"
    position="relative"
    my={{ _: 40, xm: 60 }}
    width={{ _: '100%' }}
  >
    <EbookWidget
      slug={slug}
      isYoutube={false}
      textLimit={150}
      inArticle
    />
  </Container>
);

const Container = styled(BoxAdaptive)`
  & span[data-test="ebook-title"] a,
  & span[data-test="ebook-body"] a {
    color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.secondary5)} !important;

    &:hover {
      text-decoration: none !important;
      color: inherit !important;
    }
  }
`;

export default EbooksPromo;
