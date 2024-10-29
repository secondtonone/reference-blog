import renderer from 'react-test-renderer';
import TooltipContent from './tooltip-content';
import SvgIcon from '~/components/containers/svg-icon';

jest.mock('~/components/containers/svg-icon', () => jest.fn().mockReturnValue('svg-arrow'));

describe('Match snapshots TooltipContent', () => {
  it('empty', () => {
    const tree = renderer.create(<TooltipContent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with content', () => {
    const tree = renderer.create(<TooltipContent>content</TooltipContent>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with warning color', () => {
    const tree = renderer.create(<TooltipContent isAccent>content</TooltipContent>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('with left arrow', () => {
    const tree = renderer.create(<TooltipContent isAccent arrowSide="left">content</TooltipContent>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(SvgIcon).toHaveBeenCalledWith({
      code: 'arrow',
      mod: '-arrow-left',
    }, {});
  });
  it('with right arrow', () => {
    const tree = renderer.create(<TooltipContent isAccent arrowSide="right">content</TooltipContent>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(SvgIcon).toHaveBeenCalledWith({
      code: 'arrow',
      mod: '-arrow-right',
    }, {});
  });
  it('with down arrow', () => {
    const tree = renderer.create(<TooltipContent isAccent arrowSide="down">content</TooltipContent>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(SvgIcon).toHaveBeenCalledWith({
      code: 'arrow',
      mod: '-arrow-down',
    }, {});
  });
  it('with up arrow', () => {
    const tree = renderer.create(<TooltipContent isAccent arrowSide="up">content</TooltipContent>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(SvgIcon).toHaveBeenCalledWith({
      code: 'arrow',
      mod: '-arrow-up',
    }, {});
  });
  it('default arrow is up', () => {
    const tree = renderer.create(<TooltipContent isAccent>content</TooltipContent>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(SvgIcon).toHaveBeenCalledWith({
      code: 'arrow',
      mod: '-arrow-up',
    }, {});
  });
  it('with html', () => {
    const tree = renderer
      .create(
        <TooltipContent>
          <p>content</p>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </TooltipContent>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
