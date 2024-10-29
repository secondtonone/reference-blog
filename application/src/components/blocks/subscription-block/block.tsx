import styled from 'styled-components';
import { BoxAdaptive, Container } from '~/components/atoms';

export interface BlockProps {
  image?: React.ReactNode
  content: () => React.ReactNode
  shiftY?: number
  shiftX?: number
  inBlock?: boolean

  shiftOff?: boolean
  reverse?: boolean,
}

const PADDING_TOP = 40;
const DIFF_LG_TO_MD = 0.55;

const Block: React.FC<BlockProps> = ({
  content,
  inBlock,
  image,
  reverse,
  shiftOff,
  shiftY = 0,
  shiftX = 0,
}) => {
  const imageMarginForLg = shiftY + PADDING_TOP;
  const imageMarginForMd = imageMarginForLg * DIFF_LG_TO_MD;

  const Form = (
    <BoxAdaptive
      display="flex"
      flexDirection={reverse ? 'row-reverse' : 'row'}
      justifyContent={{
        _: 'space-evenly', sm: 'space-between'
      }}
      alignItems="center"
    >
      <BoxAdaptive
        data-test="subscription-content"
        width={inBlock ? {
          _: image ? '52%' : '100%'
        } : {
          _: '100%', xm: '45%', lg: 400
        }}
      >
        {content()}
      </BoxAdaptive>
      {image && (
        <ImageStyled
          data-test="subscription-image"
          display={{ _: 'none', xm: 'block' }}
          mr={shiftOff ? 0 : (inBlock ? { _: -shiftX } : { _: 0, lg: -shiftX })}
          mt={shiftOff
            ? 0
            : (inBlock ? { _: -shiftY } : { _: 0, xm: -imageMarginForMd, lg: -imageMarginForLg })}
          width={inBlock ? {
            _: '45%'
          } : {
            _: '43%', xm: 250, sm: 310, md: 420, lg: 500
          }}
        >
          {image}
        </ImageStyled>
      )}
    </BoxAdaptive>
  );

  return (
    <BlockStyled
      data-test="subscription-block"
      inBlock={inBlock}
      py={inBlock ? { _: '4.5%' } : { _: 24, sm: 45, lg: PADDING_TOP }}
      px={inBlock ? { _: '6%' } : { _: 0 }}
      mt={inBlock || shiftOff ? { _: 0 } : { _: 0, md: shiftY * DIFF_LG_TO_MD, lg: shiftY }}
    >
      {inBlock ? Form : (
        <Container>
          {Form}
        </Container>
      )}
    </BlockStyled>
  );
};

const BlockStyled = styled(BoxAdaptive)<{inBlock?: boolean}>`
  color: ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.yellow};
`;

const ImageStyled = styled(BoxAdaptive)`
  color: ${({ theme }) => theme.yellow};
  pointer-events: none;
`;

export default Block;
