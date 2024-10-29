/**
 * @jest-environment jsdom
 */
import renderer from 'react-test-renderer';
import SubscriptionForm from '.';

jest.mock('~/components/atoms/tooltip', () => ({ children }) => <span>{children}</span>);

describe('Match snapshots SubscriptionForm', () => {
  it('default', () => {
    const tree = renderer.create(
      <SubscriptionForm
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
  it('unaffected by theme', () => {
    const tree = renderer.create(
      <SubscriptionForm
        internal
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
