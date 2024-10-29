import EbookWidget from '~/components/organisms/ebook-widget';
import { Container } from '~/components/atoms';

import fixtureEbook from '~/__fixtures__/ebook';

export default {
  title: 'Organisms/ebook widget',
};

export const Default = () => (
  <Container>
    <EbookWidget {...fixtureEbook} />
  </Container>
);

Default.storyName = 'default';
