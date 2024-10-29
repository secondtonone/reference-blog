import { nanoid } from 'nanoid';
import Heading from './atoms/heading';
import { Container, Columns, Column, BoxAdaptive } from '~/components/atoms';

export default {
  title: 'Styleguide/columns',
};

export const _Columns = () => (
  <Container>
    <br />
    <Heading>Columns</Heading>
    <Columns>
      {[
        { _: 1 },
        { _: 1 / 2 },
        { _: 1 / 2 },
        { _: 1 / 3 },
        { _: 1 / 3 },
        { _: 1 / 3 },
        { _: 1 / 4, sm: 1 / 4, md: 1 / 6 },
        { _: 1 / 2, sm: 1 / 4, md: 1 / 6 },
        { _: 1 / 4, sm: 1 / 4, md: 1 / 6 },
        {
          _: 1 / 2,
          x: 1 / 3,
          sm: 1 / 4,
          md: 1 / 6,
        },
        { _: 1 / 2, x: 1 / 3, md: 1 / 6 },
        { _: 1 / 2, x: 1 / 3, md: 1 / 6 },
        { _: 1 / 2, x: 1 / 3, md: 1 / 6 },
      ].map((column) => (
        <Column
          minHeight={['42px', '55px']}
          width={column}
          key={nanoid()}
          style={{ marginBottom: '40px' }}
        >
          <BoxAdaptive bg="#6985EA" flex={1} style={{ height: '100%' }} />
        </Column>
      ))}
    </Columns>
    <br />
  </Container>
);

_Columns.storyName = 'columns';
