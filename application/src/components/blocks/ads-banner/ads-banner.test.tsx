import renderer from 'react-test-renderer';
import AdsBanner from '.';
import { BoxAdaptive } from '~/components/atoms';

const color = 'greenGrassIllust';

describe('Match snapshots AdsBanner', () => {
  it('default', () => {
    const tree = renderer.create(<AdsBanner
      heading="Evaluating the Pandemic Impact"
      description={(
        <>
          You will be impressed. Real, it’s exactly what you waited
          {' '}
          for. You will be impressed.
        </>
      )}
      background="purpleBrand"
      accent={color}
      button="Let's see"
      link="/blog"
      image={(
        <BoxAdaptive m={{ _: '0 56px 0', sm: '8px -12px 0 0', md: '-20px -5px -8px 0' }}>
          <img
            src={`https://storage.googleapis.com/blog-rc/front/rc/blog/banners/popup/ads-banner-id-${color}.png`}
            height="202"
            alt="ADS illustration"
            data-test="banner-ads-png"
          />
        </BoxAdaptive>
    )}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
