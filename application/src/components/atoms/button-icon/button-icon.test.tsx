import renderer from 'react-test-renderer';
import ButtonIcon from '.';
import SvgIcon from '~/components/containers/svg-icon';

jest.mock('~/components/containers/svg-icon', () => jest.fn().mockReturnValue('svg-icon'));

describe('Match snapshots ButtonIcon', () => {
  it('with up icon', () => {
    const tree = renderer.create(<ButtonIcon code="up" />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(SvgIcon).toHaveBeenCalledWith({ code: 'up' }, {});
  });

  it('with up icon and view="filled"', () => {
    const tree = renderer.create(<ButtonIcon code="up" view="filled" />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(SvgIcon).toHaveBeenCalledWith({ code: 'up' }, {});
  });
});
