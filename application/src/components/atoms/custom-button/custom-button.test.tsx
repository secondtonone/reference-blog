import renderer from 'react-test-renderer';
import Button from '.';

describe('Match snapshot Main Button', () => {
  it('match snapshot default', () => {
    const tree = renderer.create(<Button>Default</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot disabled', () => {
    const tree = renderer.create(<Button disabled>Disabled</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot active', () => {
    const tree = renderer.create(<Button active>Active</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot empty', () => {
    const tree = renderer.create(<Button disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot loading', () => {
    const tree = renderer.create(<Button loading>Loading</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot loading disabled', () => {
    const tree = renderer.create(<Button loading disabled>Loading disabled</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot selected', () => {
    const tree = renderer.create(<Button selected>Selected</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot internal', () => {
    const tree = renderer
      .create(
        <Button internal>
          Internal
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Match snapshot Ghost Button', () => {
  it('match snapshot default', () => {
    const tree = renderer.create(<Button use="secondary">Ghost</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot animated', () => {
    const tree = renderer.create(<Button animated>Ghost</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot with border', () => {
    const tree = renderer
      .create(
        <Button use="secondary" border>
          Ghost border
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot disabled', () => {
    const tree = renderer
      .create(
        <Button use="secondary" disabled>
          Ghost disabled
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot loading', () => {
    const tree = renderer
      .create(
        <Button use="secondary" loading>
          Ghost loading
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot loading disabled', () => {
    const tree = renderer
      .create(
        <Button use="secondary" loading disabled>
          Ghost loading disabled
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot selected', () => {
    const tree = renderer
      .create(
        <Button use="secondary" selected>
          Ghost selected
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot internal', () => {
    const tree = renderer
      .create(
        <Button use="secondary" internal>
          Ghost Internal
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
