/**
 * @jest-environment jsdom
 */
import renderer from 'react-test-renderer';
import SubscriptionBlock from '.';

jest.mock('~/components/atoms/tooltip', () => ({ children }) => <span>{children}</span>);
jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('Match snapshots SubscriptionBlock', () => {
  it('default', () => {
    const tree = renderer.create(<SubscriptionBlock
      image={<span>image</span>}
      title="Join our newsletter"
      placeholder="Your email"
      button="Subscribe"
      tip="By clicking the button you consent to example using your contact data for newsletter purposes"
      successMessage="You’ve successfully subscribed to a newsletter"
      errorMessage="Something went wrong. Try one more time."
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('in block', () => {
    const tree = renderer.create(<SubscriptionBlock
      inBlock
      title="Join our newsletter"
      placeholder="Your email"
      button="Subscribe"
      tip="By clicking the button you consent to example using your contact data for newsletter purposes"
      successMessage="You’ve successfully subscribed to a newsletter"
      errorMessage="Something went wrong. Try one more time."
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with png', () => {
    const tree = renderer.create(
      <SubscriptionBlock
        image={(
          <img
            src="/blog/banners/banner-find-dark.png"
            alt="Trial example banner"
            data-test="banner-subscribe-dark-png"
          />
        )}
        title="Join our newsletter"
        placeholder="Your email"
        button="Subscribe"
        tip="By clicking the button you consent to example using your contact data for newsletter purposes"
        successMessage="You’ve successfully subscribed to a newsletter"
        errorMessage="Something went wrong. Try one more time."
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
