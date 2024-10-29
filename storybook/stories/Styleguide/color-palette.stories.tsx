import { BoxAdaptive, Column, Palette } from '~/components/atoms';
import Heading from './atoms/heading';

export default {
  title: 'Styleguide/color palette',
};

export const Light = () => (
  <Column width={{ _: 1 }}>
    <BoxAdaptive pt={5}>
      <Heading>Color palette</Heading>
      <Palette variant="light" />
    </BoxAdaptive>
  </Column>
);

Light.storyName = 'light';

export const Dark = () => (
  <Column width={{ _: 1 }} style={{ background: '#111317', color: '#FFF' }}>
    <BoxAdaptive pt={5}>
      <Heading>Color palette dark mode</Heading>
      <Palette variant="dark" />
    </BoxAdaptive>
  </Column>
);

Dark.storyName = 'dark';
