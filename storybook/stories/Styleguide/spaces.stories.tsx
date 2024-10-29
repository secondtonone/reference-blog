import { nanoid } from 'nanoid';
import { space as spaces } from '~/styles';
import Heading from './atoms/heading';
import { BoxAdaptive, Container } from '~/components/atoms';
import { SpaceStep } from '~/components/molecules';

export default {
  title: 'Styleguide/spaces',
};

export const Spaces = () => (
  <Container>
    <Heading>Spaces</Heading>
    {spaces.map(
      (space, idx) =>
        idx > 0 && (
          <BoxAdaptive bg="#6985EA" mb={16} key={`box-${nanoid()}`}>
            <SpaceStep pt={{ _: idx }} size={idx} />
          </BoxAdaptive>
        )
    )}
  </Container>
);

Spaces.storyName = 'spaces';
