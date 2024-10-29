import 'jsdom-global/register';
import renderer from 'react-test-renderer';
import IntersectionContainer from '.';

const intersectionObserverMock = () => ({
  observe: () => null
});

global.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

describe('Match snapshots IntersectionContainer', () => {
  it('default', () => {
    const tree = renderer.create(
      <IntersectionContainer onIntersection={() => ({})}>
        IntersectionContainer
      </IntersectionContainer>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('intersected once', () => {
    const tree = renderer.create(
      <IntersectionContainer once onIntersection={() => ({})}>
        IntersectionContainer
      </IntersectionContainer>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
