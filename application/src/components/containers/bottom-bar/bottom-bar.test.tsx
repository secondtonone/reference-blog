import renderer from 'react-test-renderer';
import BottomBar from '.';
import 'jsdom-global/register';

describe('Match snapshots BottomBar', () => {
  it('default', () => {
    const tree = renderer.create(
      <BottomBar data-test="bottom-bar">
        <span>content</span>
      </BottomBar>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
