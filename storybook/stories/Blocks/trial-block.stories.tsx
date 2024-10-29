import TrialBlock from '~/components/blocks/trial-block';

export default {
  title: 'Blocks/trial block',
};

export const Png = () => (
  <TrialBlock
    heading="Boost your digital marketing efforts"
    image={
      <img
        src="https://static.example.com/blog-next-static/banners/trial-gift.png"
        alt="Trial example banner"
        data-test="banner-trial-png"
      />
    }
    imageWidth={391}
    imageHeight={282}
    button="Get free trial"
    link="https://www.example.com/signup/?src=footer"
    shiftY={70}
  />
);

Png.storyName = 'png';

export const PngReverse = () => (
  <TrialBlock
    heading="Boost your digital marketing efforts"
    image={
      <img
        src="https://static.example.com/blogxt-static/banners/trial-gift.png"
        alt="Trial example banner"
        data-test="banner-trial-png"
      />
    }
    reverse
    imageWidth={391}
    imageHeight={282}
    button="Get free trial"
    link="https://www.example.com/signup/?src=footer"
    shiftY={70}
  />
);

PngReverse.storyName = 'png:reverse';
