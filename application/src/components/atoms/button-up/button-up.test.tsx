import renderer from 'react-test-renderer';
import ButtonUp from '.';
import SvgIcon from '~/components/containers/svg-icon';

jest.mock('~/components/containers/svg-icon', () => jest.fn().mockReturnValue('svg-icon'));

describe('Match snapshots ButtonUp', () => {
  it('default', () => {
    const tree = renderer.create(<ButtonUp />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(SvgIcon).toHaveBeenCalledWith({ code: 'up', size: [16, 16] }, {});
  });
  it('active', () => {
    const tree = renderer.create(<ButtonUp active />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(SvgIcon).toHaveBeenCalledWith({ code: 'up', size: [16, 16] }, {});
  });
});
