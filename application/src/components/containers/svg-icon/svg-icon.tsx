import styled from 'styled-components';
import isServer from '~/constants/is-server';

interface Props {
  code: string;
  mod?: string;
  size?: [number, number];
  responsive?: boolean;
  onClick?: () => void
}

const ShowCodes = (code) => [
  'close',
].includes(code);

const SvgIcon: React.FC<Props & React.SVGAttributes<HTMLOrSVGElement>> = ({
  code, mod, size, responsive, ...props
}) => {
  const [width, height] = responsive ? ['100%', '100%'] : size || [20, 20];

  if (isServer && ShowCodes(code)) {
    return (
      <>
        {code}
      </>
    );
  }

  if (isServer) {
    return null;
  }

  return (
    <SvgStyled
      data-test={`svg-icon-${code}`}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={mod}
      {...props}
    >
      <use xlinkHref={`#${code}`} />
    </SvgStyled>
  );
};

const SvgStyled = styled.svg`
  fill: currentColor;
  max-height: 100%;
`;

export default SvgIcon;
