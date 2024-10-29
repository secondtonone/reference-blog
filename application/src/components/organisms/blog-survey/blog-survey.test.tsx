import renderer from 'react-test-renderer';
import BlogSurvey from '.';
import fixture from '~/__fixtures__/blog-surveys';

describe('Match snapshots BlogSurvey', () => {
  it('default', () => {
    const tree = renderer.create(<BlogSurvey {...fixture['with-content-in-2021']} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('in block', () => {
    const tree = renderer.create(<BlogSurvey {...fixture['with-content-in-2020']} inBlock />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
