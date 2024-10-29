import renderer from 'react-test-renderer';
import ButtonLink from '.';

describe('Match snapshot Main ButtonLink', () => {
  it('match snapshot default', () => {
    const tree = renderer.create(<ButtonLink>Link</ButtonLink>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot disabled', () => {
    const tree = renderer.create(<ButtonLink disabled>Link</ButtonLink>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Match snapshot Ghost ButtonLink', () => {
  it('match snapshot default', () => {
    const tree = renderer.create(<ButtonLink use="secondary">Link</ButtonLink>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot with border', () => {
    const tree = renderer
      .create(
        <ButtonLink use="secondary" border>
          Link
        </ButtonLink>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot disabled', () => {
    const tree = renderer
      .create(
        <ButtonLink use="secondary" disabled>
          Link
        </ButtonLink>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('match snapshot selected', () => {
    const tree = renderer
      .create(
        <ButtonLink use="secondary" selected>
          Link
        </ButtonLink>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
