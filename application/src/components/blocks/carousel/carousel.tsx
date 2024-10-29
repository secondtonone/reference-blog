import { Children } from 'react';
import styled from 'styled-components';
import { CarouselDots, CarouselScroll } from '~/components/atoms';

interface ISwiperOptions {
  slidesPerView?: number,
  pagination?: {
    clickable: boolean,
    el: string,
    bulletActiveClass: string,
  },
  loop: boolean
}

interface Props {
  dots?: boolean;
  scroll?: boolean;
  options?: ISwiperOptions
}

const defaultOptions: ISwiperOptions = {
  slidesPerView: 1,
  pagination: { clickable: true, el: '.carousel-dots', bulletActiveClass: '-active' },
  loop: true,
};

const Swiper = (props) => <div className="swiper" {...props} />;
const SwiperSlide = (props) => <div className="swiper-slide" {...props} />;

const Carousel: React.FC<Props> = ({
  children,
  dots = false,
  scroll = false,
  options = defaultOptions
}) => (
  <CarouselStyled
    data-test="carousel"
    style={{ maxHeight: 573, overflow: 'hidden' }}
    {...options}
  >
    {Children.map((children), Child => (
      <SwiperSlide style={{ height: 'auto' }} key={`slide-${children}`}>{Child}</SwiperSlide>
    ))}
    {dots && <CarouselDots className="swiper-pagination carousel-dots" />}
    {scroll && <CarouselScroll className="swiper-scrollbar carousel-scroll" />}
  </CarouselStyled>
);

const CarouselStyled = styled(Swiper)`
  width: 100%;
  background: #f8f8f8;
  max-width: 100vw;
  .swiper-slide {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > * {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
  img {
    display: flex;
    height: 100%;
    object-fit: cover;
    max-width: 100%;
  }
`;

export default Carousel;
