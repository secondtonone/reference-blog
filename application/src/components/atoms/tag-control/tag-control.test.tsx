import renderer from 'react-test-renderer';
import Link from 'next/link';
import TagControl from '.';

jest.mock('next/link', () => jest.fn().mockReturnValue('link'));

describe('Match snapshot TagControl', () => {
  it('with button', () => {
    const tree = renderer.create(<TagControl />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with link', () => {
    const tree = renderer.create(<TagControl href="/" />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(Link).toHaveBeenCalled();
  });
});
