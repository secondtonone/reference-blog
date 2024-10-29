import { BoxAdaptive, Container } from '~/components/atoms';
import BlogSurvey from '~/components/organisms/blog-survey';
import fixture from '~/__fixtures__/blog-surveys';

export default {
  title: 'Organisms/survey',
};

export const Default = () => (
  <Container>
    <BoxAdaptive width={660}>
      <BlogSurvey {...fixture['with-content-in-2021']} />
    </BoxAdaptive>
  </Container>
);

Default.storyName = 'default';

export const InBlock = () => (
  <Container>
    <BoxAdaptive width={660}>
      <BlogSurvey {...fixture['with-content-in-2020']} inBlock />
    </BoxAdaptive>
  </Container>
);

InBlock.storyName = 'in block';
