import PodcastWidget from '~/components/organisms/podcast-widget';
import { Container } from '~/components/atoms';

const data = {
  id: 15584075,
  slug: 'marketing-scoop-season-finale',
  title: 'How to Earn Links from 931 Unique Domains in a Single Year',
  releaseDate: 'Aug 12, 2020',
  body: 'In this episode Amanda Milligan, Marketing Director at growth marketing agency Fractl, is diving into how they earned more than 900 unique backlinks for home improvement marketplace Porch in just one year.',
  image: 'https://assets.libsyn.com/secure/content/80764199',
};

export default {
  title: 'Organisms/podcast widget',
};

export const Default = () => (
  <Container>
    <PodcastWidget {...data} />
  </Container>
);

Default.storyName = 'default';
