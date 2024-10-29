import renderer from 'react-test-renderer';
import CustomSwitch from '.';

describe('Switch match snapshots', () => {
  it('off state', () => {
    const component = renderer.create(
      <CustomSwitch checked={false} onChange={() => false} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
  it('with addon', () => {
    const component = renderer.create(
      <CustomSwitch checked={false} onChange={() => false} after="Label" />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
  it('with icon in slider', () => {
    const component = renderer.create(
      <CustomSwitch checked={false} onChange={() => false} slider={() => (<span>i</span>)} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
  it('checked state', () => {
    const component = renderer.create(
      <CustomSwitch checked disabled={false} onChange={() => false} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
  it('disabled checked state', () => {
    const component = renderer.create(
      <CustomSwitch checked disabled onChange={() => false} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
