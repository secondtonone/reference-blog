import renderer from 'react-test-renderer';
import RadioButton, { RadioGroup } from '.';

describe('RadioButton match snapshots', () => {
  it('empty state', () => {
    const component = renderer.create(
      <RadioButton checked={false} onRadioChange={() => false} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
  it('checked state', () => {
    const component = renderer.create(
      <RadioButton checked disabled={false} onRadioChange={() => false} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
  it('disabled checked state', () => {
    const component = renderer.create(
      <RadioButton checked disabled onRadioChange={() => false} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
  it('with label state', () => {
    const label = 'Search the blog';
    const component = renderer.create(
      <RadioButton checked label={label} onRadioChange={() => false} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
  it('with success state', () => {
    const label = 'Search the blog';
    const component = renderer.create(
      <RadioButton checked label={label} onRadioChange={() => false} variant="success" />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
  it('with label disabled state', () => {
    const label = 'Search the blog';
    const component = renderer.create(
      <RadioButton checked disabled label={label} onRadioChange={() => false} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
  it('with double items', () => {
    const component = renderer.create(
      <RadioGroup name="radio" value="2" onChange={() => false}>
        <RadioButton label="Search the blog" value="1" />
        <RadioButton label="Search example.com" value="2" />
      </RadioGroup>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
