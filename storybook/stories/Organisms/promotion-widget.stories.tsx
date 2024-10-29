import PromotionWidget from '~/components/organisms/promotion-widget';
import promotedMaterial from '~/constants/promoted-material';
import { Container } from '~/components/atoms';

export default {
  title: 'Organisms/promotion widget',
};

export const Default = () => (
  <Container>
    <PromotionWidget {...promotedMaterial[0]} />
  </Container>
);

Default.storyName = 'default';
