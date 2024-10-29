import styled from 'styled-components';
import themes from '~/styles/themes';
import dimensions from '~/styles/scheme/dimensions';

interface Props {
  className?: string;
}

const CarouselScroll: React.FC<Props> = ({ className, children }) => (
  <CarouselScrollStyled data-test="carousel-scroll" className={className}>{children}</CarouselScrollStyled>
);

const CarouselScrollStyled = styled.div`
  background: ${({ theme }) => (theme.isLight ? theme.secondary2 : theme.secondary1)};
  transform: translateY(-35px);
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 4px;
  margin: 0 auto;
  left: 0;
  right: 0;
  border-radius: 4px;
  .swiper-scrollbar-drag {
    top: -14px;
    border: 0;
    outline: none;
    opacity: 1;
    position: relative;
    display: inline-block;
    background-color: transparent;
    width: 111px;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      border-radius: ${dimensions.radiuses.xs};
      background-color: ${({ theme }) => (theme.isLight ? themes.light.opposed : 'rgba(255, 255, 255, 0.38)')};
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    &:not(:last-child) {
      margin: 0 10px 0 0 !important;
    }

    &.-active {
      opacity: 1;
    }
  }
`;

export default CarouselScroll;
