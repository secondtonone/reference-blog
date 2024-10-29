import { CarouselDots } from '~/components/atoms';

export default {
  title: 'Atoms/carousel dots',
};

export const Default = () => (
  <CarouselDots>
    <span />
    <span />
    <span />
  </CarouselDots>
);

Default.storyName = 'default';

export const Active = () => (
  <CarouselDots>
    <span />
    <span />
    <span className="-active" />
  </CarouselDots>
);

Active.storyName = 'active';
