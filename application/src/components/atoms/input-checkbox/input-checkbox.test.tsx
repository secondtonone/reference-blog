import renderer from 'react-test-renderer';
import InputCheckbox from '.';

describe('InputCheckbox match snapshots', () => {
  it('empty state', () => {
    const component = renderer.create(
      <InputCheckbox checked={false} onCheckboxChange={() => false} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
  it('checked state', () => {
    const component = renderer.create(
      <InputCheckbox checked disabled={false} onCheckboxChange={() => false} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
  it('disabled checked state', () => {
    const component = renderer.create(
      <InputCheckbox checked disabled onCheckboxChange={() => false} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
  it('with label state', () => {
    const label = 'I consent to example using my contact data for newsletter purposes';
    const component = renderer.create(
      <InputCheckbox checked label={label} onCheckboxChange={() => false} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
  it('with success state', () => {
    const label = 'I consent to example using my contact data for newsletter purposes';
    const component = renderer.create(
      <InputCheckbox checked label={label} onCheckboxChange={() => false} variant="success" />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
  it('with label disabled state', () => {
    const label = 'I consent to example using my contact data for newsletter purposes';
    const component = renderer.create(
      <InputCheckbox checked disabled label={label} onCheckboxChange={() => false} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
  it('with double items', () => {
    const label = 'I consent to example using my contact data for newsletter purposes';
    const component = renderer.create(
      <>
        <InputCheckbox checked disabled label={label} onCheckboxChange={() => false} />
        <InputCheckbox checked disabled={false} label={label} onCheckboxChange={() => false} />
      </>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
