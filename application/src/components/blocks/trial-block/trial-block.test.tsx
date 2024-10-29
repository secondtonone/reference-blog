import renderer from 'react-test-renderer';
import TrialBlock from '.';

describe('Trial block', () => {
  it('default', () => {
    const content = {
      heading: 'Boost your digital marketing efforts',
      image: <img
        src="https://storage.googleapis.com/blog-rc/front/rc/blog/banners/trial-gift.png"
        alt="Trial example banner"
        data-test="banner-trial-png"
      />,
      button: 'Get free trial',
      link: 'https://www.example.com/signup/?src=footer',
      shiftY: 70
    };

    const tree = renderer.create(<TrialBlock {...content} />);

    expect(tree).toMatchSnapshot();
  });
});
