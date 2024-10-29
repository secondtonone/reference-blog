import styled from 'styled-components';
import {
  typography, typographyProps,
  space, spaceProps,
  layout, layoutProps,
  color, colorProps,
  compose
} from 'styled-system';

import shouldForwardProp from '~/styles/should-forward-prop';

import { typographyFonts } from '~/styles';

type StyleProps = typographyProps & spaceProps & layoutProps & colorProps;

export interface TextContentProps extends StyleProps {
  accentFont?: boolean,
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

  uppercased?: boolean
}

const TextContent: React.FC<TextContentProps> = ({
  accentFont,
  level,
  ...props
}) => {
  const levels: any[] = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'];

  return (
    <TextStyled
      data-test="text-content"
      as={levels[level]}
      display="inline-block"
      fontFamily={accentFont
        ? typographyFonts.fontFamily.accent
        : typographyFonts.fontFamily.content}
      {...props}
    />
  );
};

const TextStyled = styled.span.withConfig({ shouldForwardProp })<{ uppercased?: boolean }>`
  ${compose(
    typography,
    space,
    layout,
    color
  )}
  ${({ uppercased }) => (uppercased ? 'text-transform: uppercase;' : '')}
`;

export default TextContent;
