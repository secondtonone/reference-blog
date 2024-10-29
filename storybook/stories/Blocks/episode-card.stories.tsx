import { BoxAdaptive, Container } from '~/components/atoms';
import EpisodeCard from '~/components/blocks/episode-card';

export default {
  title: 'Blocks/episode card',
};

export const Default = () => (
  <Container>
    <BoxAdaptive width={660}>
      <EpisodeCard
        title="SEO Analysis Drives Major Trucking Company Hiring 100s of Drivers"
        label="Episode 2"
        button="Tune-in Now"
        link="http://wwww.example.com/blog/example-seo-reality-show/"
      />
    </BoxAdaptive>
  </Container>
);

Default.storyName = 'default';
