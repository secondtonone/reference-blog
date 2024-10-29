import { BoxAdaptive, Container } from '~/components/atoms';
import AdsBanner from '~/components/blocks/ads-banner';
import Banner from '~/components/containers/banner';
import { BannerColorsKey } from '~/styles/palette';

const colors = [
  'greenGrassIllust',
  'orangeIllust',
  'orangePaleIllust',
  'purpleIllust',
  'yellowIllust',
];

export default {
  title: 'Blocks/ads banner',
};

export const Default = () => (
  <Container>
    {colors.map((color: BannerColorsKey) => (
      <AdsBanner
        mt={10}
        heading="Evaluating the Pandemic Impact"
        description={
          <>You will be impressed. Real, it’s exactly what you waited for. You will be impressed.</>
        }
        background="purpleBrand"
        accent={color}
        button="Let's see"
        link="/blog"
        image={
          <BoxAdaptive m={{ _: '0 56px 0', sm: '8px -12px 0 0', md: '-20px -5px -8px 0' }}>
            <img
              src={`https://storage.googleapis.com/blog-rc/front/rc/blog/banners/popup/ads-banner-id-${color}.png`}
              height="202"
              alt="ADS illustration"
              data-test="banner-ads-png"
            />
          </BoxAdaptive>
        }
      />
    ))}
  </Container>
);

Default.storyName = 'default';

export const InBlock = () => (
  <BoxAdaptive width={368}>
    {colors.map((color: BannerColorsKey) => (
      <AdsBanner
        inBlock
        mt={10}
        heading="Evaluating the Pandemic Impact"
        description={
          <>You will be impressed. Real, it’s exactly what you waited for. You will be impressed.</>
        }
        background="purpleBrand"
        accent={color}
        button="Let's see"
        link="/blog"
        image={
          <BoxAdaptive m={{ _: '10px 56px 0' }}>
            <img
              src={`https://storage.googleapis.com/blog/front/rc/blog/banners/popup/ads-banner-id-${color}.png`}
              height="202"
              alt="ADS illustration"
              data-test="banner-ads-png"
            />
          </BoxAdaptive>
        }
      />
    ))}
  </BoxAdaptive>
);

InBlock.storyName = 'in block';

export const WithoutBackground = () => (
  <Container>
    {colors.map((color: BannerColorsKey) => (
      <AdsBanner
        mt={10}
        heading="Evaluating the Pandemic Impact"
        description={
          <>You will be impressed. Real, it’s exactly what you waited for. You will be impressed.</>
        }
        accent={color}
        button="Let's see"
        link="/blog"
        image={
          <BoxAdaptive m={{ _: '0 56px 0', sm: '8px -12px 0 0', md: '-20px -5px -8px 0' }}>
            <img
              src={`https://storage.googleapis.com/blog/front/rc/blog/banners/popup/ads-banner-id-${color}.png`}
              height="202"
              alt="ADS illustration"
              data-test="banner-ads-png"
            />
          </BoxAdaptive>
        }
      />
    ))}
  </Container>
);

WithoutBackground.storyName = 'without background';

export const SwapAccent = () => (
  <Container>
    {colors.map((color: BannerColorsKey) => (
      <AdsBanner
        mt={10}
        heading="Evaluating the Pandemic Impact"
        description={
          <>You will be impressed. Real, it’s exactly what you waited for. You will be impressed.</>
        }
        accent="purpleBrand"
        background={color}
        button="Let's see"
        link="/blog"
        image={
          <BoxAdaptive m={{ _: '0 56px 0', sm: '8px -12px 0 0', md: '-20px -5px -8px 0' }}>
            <img
              src={`https://storage.googleapis.com/blog/front/rc/blog/banners/popup/ads-banner-id-${color}.png`}
              height="202"
              alt="ADS illustration"
              data-test="banner-ads-png"
            />
          </BoxAdaptive>
        }
      />
    ))}
  </Container>
);

SwapAccent.storyName = 'swap accent';

export const WithRandomColor = () => (
  <Container>
    <Banner.Coloring>
      {(color: BannerColorsKey) => (
        <AdsBanner
          heading="Evaluating the Pandemic Impact"
          description={
            <>
              You will be impressed. Real, it’s exactly what you waited for. You will be impressed.
            </>
          }
          background="purpleBrand"
          accent={color}
          button="Let's see"
          link="/blog"
          image={
            <BoxAdaptive m={{ _: '0 56px 0', sm: '8px -12px 0 0', md: '-20px -5px -8px 0' }}>
              <img
                src={`https://storage.googleapis.com/blog/front/rc/blog/banners/popup/ads-banner-id-${color}.png`}
                height="202"
                alt="ADS illustration"
                data-test="banner-ads-png"
              />
            </BoxAdaptive>
          }
        />
      )}
    </Banner.Coloring>
  </Container>
);

WithRandomColor.storyName = 'with random color';
