import { nanoid } from 'nanoid';
import styled from 'styled-components';
import palette, { ThemeNames, variants, elements } from '~/styles/palette';
import { getColorByContrast } from '~/styles/helpers';

import {
  Columns,
  Column,
  BoxAdaptive
} from '..';

interface IPalette {
  variant?: ThemeNames
}

const Palette: React.FC<IPalette> = ({ variant = 'light' }) => (
  <Columns data-test="">
    {palette.map(group => (
      <Column minHeight={['42px', '55px']} width={{ _: 1, x: 1 / 2, sm: 1 / palette.length }} key={nanoid()} style={{ marginBottom: '40px' }}>
        {elements(group).map(([code, ...colorVariants]) => {
          const themeId: number = variants.indexOf(variant);
          const [name, color] = colorVariants[themeId] ? colorVariants[themeId] : colorVariants[0];
          const [prevName] = colorVariants[0];

          return (
            <BoxAdaptive
              mb={30}
              p={20}
              bg={color}
              flex={1}
              key={nanoid()}
              style={{
                borderRadius: 10, color: getColorByContrast({ main: color }), height: 'auto'
              }}
            >
              <div>
                <SubHeading>{name || prevName}</SubHeading>
                <Color>{color}</Color>
                <br />
                <Code>{code}</Code>
              </div>
            </BoxAdaptive>
          );
        })}
      </Column>
    ))}
  </Columns>
);

const SubHeading = styled.h3`
  margin: 0 0 18px;
  font-weight: 900;
`;

const Color = styled.div`
  user-select: all;
`;

const Code = styled(Color)`
  opacity: 0.3;
`;

export default Palette;
