import styled from 'styled-components';

import {
  TextContent,
  BoxAdaptive,
  ButtonLink,
  Container
} from '~/components/atoms';

interface Props {
  heading: string
  button: string
  link: string
  image: React.ReactNode
  shiftY?: number,
  imageWidth?: number,
  imageHeight?: number,
  reverse?: boolean,
  onClick?: () => void
}

const TrialBlock: React.FC<Props> = ({
  heading,
  button,
  link,
  image,
  shiftY = 0,
  imageWidth,
  imageHeight,
  reverse,
  onClick
}) => (
  <TrialBlockStyled data-test="trial-block" mt={shiftY} id="trial">
    <Container>
      <BoxAdaptive display="flex" justifyContent="space-between">
        <ImageStyled
          width={imageWidth}
          height={imageHeight}
          display={{ _: 'none', lg: 'flex' }}
          data-test="image"
          mt={{ _: -shiftY }}
          style={reverse ? { transform: 'scale(-1,1)' } : null}
        >
          {image}
        </ImageStyled>
        <BoxAdaptive
          data-test="content"
          pb={{
            _: 7,
            sm: '44px'
          }}
          pt={{
            _: 6, sm: 8
          }}
          m={{ _: '0 auto', lg: '0 45px 0 0' }}
          width={{ _: 240, sm: 448, lg: 400 }}
        >
          <TextContent
            data-test="trial-text"
            textAlign={{ _: 'center' }}
            fontSize={{ _: 6, x: 7, sm: 16 }}
            lineHeight={{ _: 1.2 }}
            fontWeight={{ _: 'bold' }}
            marginBottom={{ _: 6 }}
            level={0}
            accentFont
          >
            {heading}
          </TextContent>
          <BoxAdaptive maxWidth={{ _: 180, sm: 346 }} m="0 auto" display="flex">
            <ButtonLinkStyled
              data-test="trial-link"
              target="_blank"
              href={link}
              w="100%"
              onClick={onClick}
            >
              {button}
            </ButtonLinkStyled>
          </BoxAdaptive>
        </BoxAdaptive>
      </BoxAdaptive>
    </Container>
  </TrialBlockStyled>
);

type Shifted = {
  mt: number
}

const ButtonLinkStyled = styled(ButtonLink)`
  width: 100%;

  a {
    width: 100%;
  }
`;

const TrialBlockStyled = styled.div<Shifted>`
  margin-top: ${({ mt }) => mt}px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.purpleBrand};
  z-index: 2;
`;

const ImageStyled = styled(BoxAdaptive)`
  color: ${({ theme }) => theme.purpleBrand};
  position: relative;

  svg,
  img {
    width: 100%;
    max-width: 390px;
  }
`;

export default TrialBlock;
