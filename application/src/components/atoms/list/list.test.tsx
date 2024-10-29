import renderer from 'react-test-renderer';
import List from '.';

const items = [
  'Ensure words are spelled correctly.',
  'Try rephrasing keywords or using synonyms.',
  'Try more general keywords.',
  'Make your queries as concise as possible.'
];

describe('Match snapshot List', () => {
  it('match snapshot default', () => {
    const tree = renderer.create(<List items={items} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('match snapshot ordered', () => {
    const tree = renderer.create(<List tag="ol" items={items} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
